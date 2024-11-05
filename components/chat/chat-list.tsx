"use client";

import { cn } from "@/lib/utils";

type Props = {
  messages: any;
  className?: string;
};

export function ChatList({ messages, className }: Props) {
  if (!messages.length) {
    return null;
  }

  return (
    <div className={cn("flex flex-col select-text", className)}>
      {messages
        .filter((tool: any) => tool.display !== undefined)
        .map((message: any, index: number) => (
          <div key={message.id}>
            {message.display}
            {index < messages.length - 1 && <div className="my-6" />}
          </div>
        ))}
    </div>
  );
}
