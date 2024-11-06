import { Cookies } from "@/utils/constants";
import { Icons } from "@/components/ui/icons";
import { cookies } from "next/headers";
import Link from "next/link";
import { MainMenu } from "./main-menu";

export function Sidebar() {
  const initialItems = cookies().has(Cookies.MenuConfig)
    ? JSON.parse(cookies().get(Cookies.MenuConfig)?.value ?? "")
    : null;

  return (
    <aside className="h-screen flex-shrink-0 flex-col justify-between fixed top-0 ml-4 pb-4 items-center hidden md:flex">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-6">
          <Link href="/app">
            <Icons.LogoSmall />
          </Link>
        </div>
        <MainMenu initialItems={initialItems} />
      </div>
    </aside>
  );
}
