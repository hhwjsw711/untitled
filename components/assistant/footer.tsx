import { Icons } from "@/components/ui/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Props = {
  onSubmit: () => void;
};

export function Footer({ onSubmit }: Props) {
  const router = useRouter();

  return (
    <div className="flex px-3 h-[40px] w-full border-t-[1px] items-center bg-background backdrop-filter dark:border-[#2C2C2C] backdrop-blur-lg dark:bg-[#151515]/[99]">
      <Popover>
        <PopoverTrigger>
          <div className="scale-50 opacity-50 -ml-2">
            <Image src="/share.svg" width={36} height={36} alt="Share icon" />
          </div>
        </PopoverTrigger>

        <PopoverContent
          className="bg-background backdrop-filter dark:border-[#2C2C2C] backdrop-blur-lg dark:bg-[#1A1A1A]/95 p-2 rounded-lg -ml-2 w-auto"
          side="top"
          align="start"
          sideOffset={10}
        >
          <ul className="flex flex-col space-y-2">
            <li>
              <button
                type="button"
                className="flex space-x-2 items-center text-xs hover:bg-[#2b2b2b] rounded-md transition-colors w-full p-1"
                onClick={() => router.push("https://x.com/hhwjsw711")}
              >
                <Icons.X className="w-[16px] h-[16px]" />
                <span>Follow us</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex space-x-2 items-center text-xs hover:bg-[#2b2b2b] rounded-md transition-colors w-full p-1"
                onClick={() => router.push("https://discord.gg/p7VAZarb")}
              >
                <Icons.Discord className="w-[16px] h-[16px]" />
                <span>Join Our Community</span>
              </button>
            </li>

            <li>
              <button
                type="button"
                className="flex space-x-2 items-center text-xs hover:bg-[#2b2b2b] rounded-md transition-colors w-full p-1"
                onClick={() => router.push("https://github.com/hhwjsw711/untitled")}
              >
                <Icons.GithubOutline className="w-[16px] h-[16px]" />
                <span>Github</span>
              </button>
            </li>
          </ul>
        </PopoverContent>
      </Popover>

      <div className="ml-auto flex space-x-4">
        <button
          className="flex space-x-2 items-center text-xs"
          type="button"
          onClick={onSubmit}
        >
          <span>Submit</span>
          <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-accent px-1.5 font-mono text-[10px] font-medium">
            <span>↵</span>
          </kbd>
        </button>
      </div>
    </div>
  );
}
