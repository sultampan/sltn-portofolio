"use client";

import type { ReactNode } from "react";
import { portfolioData, resolveLocalized } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

export function Skills(): ReactNode {
  const { lang } = useLanguage();
  const skills = portfolioData.skills;

  return (
    <div id="skills" className="flex flex-col gap-3 scroll-mt-28">
      <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
        {lang === "id" ? "Keahlian" : "What I do"}
      </h3>
      <div className="rounded-4xl border border-foreground/5 bg-foreground/2 p-2 sm:p-4 dark:bg-foreground/5">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => {
            const skillText = resolveLocalized(skill, lang);
            return (
              <span
                key={idx}
                className="rounded-full border border-foreground/8 bg-background px-4 py-2 text-[14px] tracking-tight text-foreground/85 sm:text-[15px] transition-colors duration-200 hover:border-sky-400/50 hover:text-sky-500 dark:hover:text-sky-300"
              >
                {skillText}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
