"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { MainMenu } from "./main-menu";

export function MobileMenu() {
  const [isOpen, setOpen] = useState(false);
  const [initialItems, setInitialItems] = useState<{ path: string; name: string }[] | null>(null);

  useEffect(() => {
    const getCookieValue = () => {
      try {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; menu-config-v2=`);
        if (parts.length === 2) {
          const cookieValue = parts.pop()?.split(';').shift();
          return cookieValue ? JSON.parse(cookieValue) : null;
        }
        return null;
      } catch (e) {
        return null;
      }
    };

    setInitialItems(getCookieValue());
  }, [isOpen]); 

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setOpen(true)}
          className="rounded-full w-8 h-8 items-center relative flex md:hidden"
        >
          <Icons.Menu size={16} />
        </Button>
      </div>
      <SheetContent side="left" className="border-none rounded-none -ml-2">
        <div className="ml-2 mb-8">
          <Icons.Logo />
        </div>

        <MainMenu
          initialItems={initialItems ?? []}
          onSelect={() => setOpen(false)}
        />
      </SheetContent>
    </Sheet>
  );
}
