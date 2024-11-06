import ConvexClientProvider from "@/components/ConvexClientProvider";
import { Header } from "@/components/header";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

const AssistantModal = dynamic(
  () =>
    import("@/components/assistant/assistant-modal").then(
      (mod) => mod.AssistantModal,
    ),
  {
    ssr: false,
  },
);

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <ConvexClientProvider>
      <div className="relative">
        <div className="mx-4 md:ml-[95px] md:mr-10 pb-8">
          <Header />
          {children}
        </div>
        <AssistantModal />
      </div>
    </ConvexClientProvider>
  );
}
