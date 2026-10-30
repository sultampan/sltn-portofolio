import { Hero } from "@/components/hero/hero";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description: `Welcome to ${siteConfig.name}. ${siteConfig.description}`,
  path: "/",
});

export default function HomePage(): ReactNode {
  return (
    <main
      id="main-content"
      className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-x-hidden px-4 pt-10 pb-32 sm:py-0 select-none"
    >
      <Hero />
    </main>
  );
}
