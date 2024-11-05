import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="md:mt-[250px] relative md:min-h-[375px]">
      <div className="hero-slide-up flex flex-col mt-[240px]">
        <Link href="/updates/apps">
          <Button
            variant="outline"
            className="rounded-full border-border flex space-x-2 items-center"
          >
            <span className="font-mono text-xs">Introducing Apps</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              fill="none"
            >
              <path
                fill="currentColor"
                d="M8.783 6.667H.667V5.333h8.116L5.05 1.6 6 .667 11.333 6 6 11.333l-.95-.933 3.733-3.733Z"
              />
            </svg>
          </Button>
        </Link>

        <h1 className="text-[30px] md:text-[90px] font-medium mt-6 leading-none">
          Trust in
          <br /> Every Trade
        </h1>

        <p className="mt-4 md:mt-6 max-w-[600px] text-[#878787]">
          Untitled is a trusted platform for secure data trading, where IP is
          protected and future is secured.
        </p>

        <div className="mt-8">
          <div className="flex items-center space-x-4">
            <Link href="/talk-to-us">
              <Button
                variant="outline"
                className="border border-primary h-12 px-6"
              >
                Talk to us
              </Button>
            </Link>

            <a href="/app">
              <Button className="h-12 px-5">Get Started</Button>
            </a>
          </div>
        </div>

        <p className="text-xs text-[#707070] mt-8 font-mono">
          Used by over{" "}
          <Link href="/open-startup" prefetch>
            <span className="underline">9,400+</span>
          </Link>{" "}
          businesses.
        </p>
      </div>
    </section>
  );
}
