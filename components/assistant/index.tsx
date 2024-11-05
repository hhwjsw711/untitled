"use client";

import { Chat } from "@/components/chat";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { AssistantFeedback } from "./feedback";
import { Header } from "./header";
import { SidebarList } from "./sidebar-list";
import { chatExamples } from "../chat/examples";
import { BotCard } from "../chat/messages";
import { UserMessage } from "../chat/messages";

export function Assistant() {
  const [isExpanded, setExpanded] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");

  const toggleOpen = () => setExpanded((prev) => !prev);

  const onNewChat = () => {
    setInput("");
    setExpanded(false);
    setMessages([]);
  };

  const handleOnSelect = (message: string) => {
    const content = chatExamples.find(
      (example) => example.title === message,
    )?.content;

    setExpanded(false);

    if (content) {
      setMessages([
        {
          id: nanoid(),
          role: "user",
          display: <UserMessage>{message}</UserMessage>,
        },
        {
          id: nanoid(),
          role: "assistant",
          display: <BotCard content={content} />,
        },
      ]);
    }
  };

  useHotkeys("meta+j", () => onNewChat(), {
    enableOnFormTags: true,
  });

  return (
    <div className="overflow-hidden p-0 h-full w-full todesktop:max-w-[760px] md:max-w-[760px] md:h-[480px] todesktop:h-[480px]">
      {showFeedback && (
        <AssistantFeedback onClose={() => setShowFeedback(false)} />
      )}

      <SidebarList
        setExpanded={setExpanded}
        isExpanded={isExpanded}
        onNewChat={onNewChat}
        onSelect={handleOnSelect}
      />

      <Header toggleSidebar={toggleOpen} isExpanded={isExpanded} />

      <Chat
        messages={messages}
        setInput={setInput}
        input={input}
        submitMessage={setMessages}
        showFeedback={() => setShowFeedback(true)}
      />
    </div>
  );
}
