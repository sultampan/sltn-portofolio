"use client";

import { Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/motion-primitives";
import { PolaroidStrip } from "./polaroid-strip";
import { useLanguage } from "@/lib/language-context";
import type { ReactNode } from "react";

export function AboutHero(): ReactNode {
  const { lang } = useLanguage();

  return (
    <section className="relative flex w-full flex-col items-center px-4 py-12 sm:py-20">
      {/* Header Section */}
      <ScrollReveal delay={0.05} className="flex flex-col items-center text-center max-w-2xl mx-auto z-10 pt-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/25 bg-sky-400/10 px-3.5 py-1 text-xs font-mono tracking-wider text-sky-600 dark:text-sky-400 mb-3 shadow-[0_0_12px_rgba(56,189,248,0.15)] backdrop-blur-md">
          <Sparkles className="h-3 w-3 text-sky-400" />
          {lang === "id" ? "JOURNEY & RESEARCH" : "JOURNEY & RESEARCH"}
        </span>

        <h2 className="font-sans text-[2.25rem] sm:text-[3rem] lg:text-[3.25rem] font-bold leading-[1.12] tracking-tight text-foreground">
          {lang === "id" ? "Perjalanan, Riset & Karya" : "Journey, Research & Craft"}
        </h2>

        <p className="mt-3 max-w-[42ch] text-[15px] sm:text-[17px] leading-relaxed tracking-tight text-foreground/65">
          {lang === "id"
            ? "Mengenal lebih dekat latar belakang saya di Sistem Informasi Bisnis, riset robot terbang AVRO, dan ekosistem software."
            : "A closer look at my background in Business Information Systems, AVRO flying robotics, and software engineering."}
        </p>
      </ScrollReveal>

      {/* Middle Interactive Polaroids */}
      <div className="w-full max-w-312 my-auto py-8 sm:py-12 z-10">
        <PolaroidStrip />
      </div>
    </section>
  );
}
