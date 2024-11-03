"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

type Props = {
  role: "assistant" | "user";
};

export function ChatAvatar({ role }: Props) {
  switch (role) {
    case "user": {
      return (
        <Avatar className="size-6">
          <AvatarImage src="/profile_images.jpg" />
        </Avatar>
      );
    }

    default:
      return <Image src="/share.svg" width={24} height={24} alt="Share icon" />;
  }
}
