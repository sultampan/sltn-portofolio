import { AboutBio } from "@/components/about/about-bio";
import { AboutHero } from "@/components/about/about-hero";
import { createMetadata } from "@/lib/metadata";
import { portfolioData } from "@/data/portfolio";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: `About ${portfolioData.personal.name}, background, and experience.`,
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      {/* 1. Top Section: Business Information Systems Student (Bio & Hobbies Bento) - Fit precisely in 100vh */}
      <section className="relative w-full min-h-[100dvh] flex flex-col justify-center px-5 pt-12 pb-28 sm:px-8 sm:pt-14 sm:pb-32 lg:px-12 max-w-6xl lg:max-w-7xl mx-auto">
        <AboutBio />
      </section>

      {/* 2. Journey & Research Section (Polaroid Strip) */}
      <AboutHero />

      <div className="h-16 sm:h-24" />
    </main>
  );
}
