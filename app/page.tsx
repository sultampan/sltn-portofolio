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
      className="fixed inset-0 flex items-center justify-center overflow-hidden select-none"
    >
      <Hero />
    </main>
  );
}
