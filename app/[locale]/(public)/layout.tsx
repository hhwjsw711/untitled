import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

export default function StartPageLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        `${GeistSans.variable} ${GeistMono.variable}`,
        "bg-[#0C0C0C] overflow-x-hidden dark antialiased",
      )}
    >
      <main className="container mx-auto px-4 overflow-hidden md:overflow-visible">
        {children}
      </main>
    </div>
  );
}
