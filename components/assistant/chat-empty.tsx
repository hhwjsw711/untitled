import Image from "next/image";

export function ChatEmpty() {
  return (
    <div className="w-full mt-24 flex flex-col items-center justify-center text-center">
      <Image src="/share.svg" width={48} height={48} alt="Share icon" />
      <span className="font-medium text-xl mt-6">
        Hello, how can I help <br />
        you today?
      </span>
    </div>
  );
}
