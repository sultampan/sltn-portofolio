"use client";

import { FolderGit2 } from "lucide-react";
import { FadeIn } from "@/components/ui/motion-primitives";
import { useLanguage } from "@/lib/language-context";
import type { ReactNode } from "react";

export function ProjectsHeader(): ReactNode {
  const { lang } = useLanguage();

  const title = lang === "id" ? "Proyek Saya" : "My Projects";
  const desc =
    lang === "id"
      ? "Kumpulan riset sistem robotika, aplikasi web & mobile, serta rekayasa software yang saya bangun."
      : "A curated selection of robotics systems, web & mobile applications, and software engineering projects.";

  return (
    <section className="mx-auto w-full max-w-275 px-6 pt-32 pb-8 sm:px-10 sm:pt-40 sm:pb-12">
      <FadeIn className="flex flex-col items-center gap-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-3.5 py-1 text-xs font-mono tracking-wider text-sky-600 dark:text-sky-400 mb-1 backdrop-blur-md shadow-[0_0_12px_rgba(56,189,248,0.15)]">
          <FolderGit2 className="h-3.5 w-3.5 text-sky-400" />
          <span>{lang === "id" ? "PORTOFOLIO & KARYA" : "MY PROJECTS"}</span>
        </div>
        <h1 className="font-serif text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3.25rem] lg:text-[3.75rem]">
          {title}
        </h1>
        <p className="max-w-[36ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
          {desc}
        </p>
      </FadeIn>
    </section>
  );
}
