"use client";

import { FadeIn } from "@/components/ui/motion-primitives";
import { useLanguage } from "@/lib/language-context";
import type { ReactNode } from "react";

export function SkillsHero(): ReactNode {
  const { lang } = useLanguage();

  const title =
    lang === "id"
      ? "Pengalaman Teknis & Keahlian"
      : "My Technical Experience / Skills";

  const description =
    lang === "id"
      ? "Mahasiswa Sistem Informasi Bisnis di Polinema & Programmer di AVRO. Memadukan logika backend yang andal, frontend interaktif, pengembangan mobile, kendali telemetri drone (GCS), dan riset Machine Learning dalam solusi nyata."
      : "Business Information Systems student at Polinema & Programmer at AVRO. Bridging reliable backend systems, interactive frontends, mobile apps, drone GCS telemetry, and Machine Learning research into real-world solutions.";

  return (
    <section className="mx-auto w-full max-w-275 px-6 pt-32 pb-8 sm:px-10 sm:pt-40 sm:pb-12">
      <FadeIn className="flex flex-col items-center text-center">
        {/* Main Headline */}
        <h1 className="font-serif text-[2.5rem] font-medium leading-[1.08] tracking-tight text-foreground sm:text-[3.25rem] lg:text-[3.75rem]">
          {title}
        </h1>

        {/* Short Description */}
        <p className="mt-4 max-w-[55ch] text-[16px] sm:text-[18px] leading-relaxed tracking-tight text-foreground/70">
          {description}
        </p>
      </FadeIn>
    </section>
  );
}
