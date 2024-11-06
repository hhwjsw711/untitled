"use client";

import { useEnterSubmit } from "@/hooks/use-enter-submit";
import { useScrollAnchor } from "@/hooks/use-scroll-anchor";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { nanoid } from "nanoid";
import { ChatEmpty } from "./chat-empty";
import { ChatExamples } from "./chat-examples";
import { ChatFooter } from "./chat-footer";
import { ChatList } from "./chat-list";
import { BotCard, SignUpCard, UserMessage } from "./messages";
import { chatExamples } from "./examples";

export function Chat({
  messages,
  submitMessage,
  input,
  setInput,
}: {
  messages: any[];
  submitMessage: any;
  input: string;
  setInput: any;
}) {
  const { formRef, onKeyDown } = useEnterSubmit();

  const onSubmit = async (input: string): Promise<void> => {
    const value = input.trim();

    if (value.length === 0) {
      return;
    }

    setInput("");
    scrollToBottom();

    submitMessage((messages: any) => [
      ...messages,
      {
        id: nanoid(),
        role: "user",
        display: <UserMessage>{value}</UserMessage>,
      },
    ]);

    const content = chatExamples.find(
      (example) => example.title === input,
    )?.content;
    if (content) {
      setTimeout(
        () =>
          submitMessage((message: any) => [
            ...message,
            {
              id: nanoid(),
              role: "assistant",
              display: (
                <BotCard
                  content={
                    chatExamples.find((example) => example.title === input)!
                      .content
                  }
                />
              ),
            },
          ]),
        500,
      );
    } else {
      setTimeout(
        () =>
          submitMessage((message: any) => [
            ...message,
            {
              id: nanoid(),
              role: "assistant",
              display: <SignUpCard />,
            },
          ]),
        200,
      );
    }
  };

  const { messagesRef, scrollRef, visibilityRef, scrollToBottom } =
    useScrollAnchor();

  const showExamples = messages.length === 0 && !input;

  return (
    <div className="relative">
      <ScrollArea className="md:h-[335px]" ref={scrollRef}>
        <div ref={messagesRef}>
          {messages.length ? (
            <ChatList messages={messages} className="p-4 pb-8" />
          ) : (
            <ChatEmpty />
          )}

          <div className="w-full h-px" ref={visibilityRef} />
        </div>
      </ScrollArea>

      <div className="fixed bottom-[1px] left-[1px] right-[1px] todesktop:h-[88px] md:h-[88px] bg-background border-border border-t-[1px]">
        {showExamples && <ChatExamples onSubmit={onSubmit} />}

        <form
          ref={formRef}
          onSubmit={(evt) => {
            evt.preventDefault();
            onSubmit(input);
          }}
        >
          <Textarea
            tabIndex={0}
            rows={1}
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            value={input}
            className="h-12 min-h-12 pt-3 resize-none border-none focus-visible:ring-0"
            placeholder="Ask Untitled a question..."
            onKeyDown={onKeyDown}
            onChange={(evt) => {
              setInput(evt.target.value);
            }}
          />
        </form>

        <ChatFooter
          onSubmit={() => onSubmit(input)}
        />
      </div>
    </div>
  );
}
