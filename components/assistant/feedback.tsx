import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useState } from "react";

type Props = {
  onClose: () => void;
};

export function AssistantFeedback({ onClose }: Props) {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "executing" | "hasSucceeded">(
    "idle",
  );

  const handleSubmit = async () => {
    setStatus("executing");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("hasSucceeded");
    setValue("");
  };

  return (
    <div className="h-full absolute top-0 left-0 right-0 bottom-0 z-[100] bg-background">
      <div className="p-5 flex items-center space-x-3">
        <button
          type="button"
          className="items-center border bg-accent p-1"
          onClick={onClose}
        >
          <Icons.ArrowBack />
        </button>
        <h2>Send Feedback</h2>
      </div>
      <div className="p-4">
        {status === "hasSucceeded" ? (
          <div className="min-h-[100px] flex items-center justify-center flex-col space-y-1 mt-[100px]">
            <p className="font-medium text-sm">Thank you for your feedback!</p>
            <p className="text-sm text-[#4C4C4C]">
              We will be back with you as soon as possible
            </p>
          </div>
        ) : (
          <form className="space-y-4">
            <Textarea
              name="feedback"
              value={value}
              required
              autoFocus
              placeholder="Your feedback..."
              className="min-h-[320px] resize-none"
              onChange={(evt) => setValue(evt.target.value)}
            />

            <div className="mt-1 flex items-center justify-end">
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={value.length === 0 || status === "executing"}
              >
                {status === "executing" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Send"
                )}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
