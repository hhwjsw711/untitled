import { create } from "zustand";

interface AssistantState {
  isOpen: boolean;
  message?: string;
  setOpen: (value?: boolean | string) => void;
}

export const useAssistantStore = create<AssistantState>()((set) => ({
  isOpen: false,
  message: undefined,
  setOpen: (value) =>
    set((state) => {
      if (typeof value === "boolean") {
        return { isOpen: value, message: undefined };
      }
      return { isOpen: !state.isOpen, message: value };
    }),
}));
