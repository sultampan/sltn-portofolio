"use client";

import { useLanguage } from "@/lib/language-context";
import { portfolioData, resolveLocalized, type SkillCategoryItem } from "@/data/portfolio";
import type { ReactNode } from "react";

function ToolkitPill({
  skill,
  lang,
}: {
  skill: SkillCategoryItem;
  lang: "id" | "en";
}): ReactNode {
  const levelEn = (resolveLocalized(skill.level, "en") ?? "").toLowerCase();

  let levelType: "advanced" | "intermediate" | "basic" = "intermediate";
  if (levelEn.includes("advanced")) {
    levelType = "advanced";
  } else if (levelEn.includes("basic")) {
    levelType = "basic";
  }

  const levelLabels = {
    advanced: lang === "id" ? "Lanjutan" : "Advanced",
    intermediate: lang === "id" ? "Menengah" : "Intermediate",
    basic: lang === "id" ? "Dasar" : "Basic",
  };

  const levelBadgeStyles = {
    advanced:
      "border-sky-400/35 bg-sky-400/12 text-sky-500 dark:text-sky-300",
    intermediate:
      "border-blue-400/30 bg-blue-500/12 text-blue-600 dark:text-blue-300",
    basic:
      "border-neutral-400/25 bg-neutral-400/10 text-neutral-600 dark:text-neutral-400",
  };

  return (
    <div
      title={resolveLocalized(skill.description, lang)}
      className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-sky-400/20 dark:border-white/10 bg-sky-400/[0.04] dark:bg-white/[0.04] px-3.5 py-1.5 sm:px-4 sm:py-2 backdrop-blur-md shadow-xs transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-400/10 hover:scale-105 hover:shadow-[0_0_18px_rgba(56,189,248,0.25)] cursor-default select-none"
    >
      {/* Tech Logo */}
      <div className="flex h-4 w-4 sm:h-4.5 sm:w-4.5 shrink-0 items-center justify-center">
        <img
          src={skill.iconUrl ?? `https://cdn.simpleicons.org/${skill.slug}`}
          alt={`${skill.name} icon`}
          width={18}
          height={18}
          className="h-3.5 w-3.5 sm:h-4 sm:w-4 object-contain transition-transform duration-300 group-hover:scale-115"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLElement).style.display = "none";
          }}
        />
      </div>

      {/* Tech Name */}
      <span className="font-sans text-xs sm:text-[13px] font-semibold tracking-tight text-foreground group-hover:text-sky-500 dark:group-hover:text-sky-300 transition-colors whitespace-nowrap">
        {skill.name}
      </span>

      {/* Subtle Separator Dot */}
      <span className="h-0.5 w-0.5 rounded-full bg-foreground/25 dark:bg-white/25" />

      {/* Skill Level Badge - small & sleek text */}
      <span
        className={`rounded-full border px-1.5 py-0.5 text-[8px] sm:text-[8.5px] font-mono font-medium tracking-tight whitespace-nowrap ${levelBadgeStyles[levelType]}`}
      >
        {levelLabels[levelType]}
      </span>
    </div>
  );
}

export function SkillsToolkitMarquee(): ReactNode {
  const { lang } = useLanguage();
  const allSkills = portfolioData.categorizedSkills ?? [];

  // Split skills into two balanced sets
  const mid = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, mid);
  const row2 = allSkills.slice(mid);

  return (
    <section className="mx-auto w-full max-w-275 px-6 pb-12 sm:px-10 sm:pb-18">
      {/* Scoped CSS animations for 100% reliable continuous 120 FPS marquee */}
      <style>{`
        @keyframes toolkitMarqueeLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }
        @keyframes toolkitMarqueeRight {
          0% {
            transform: translate3d(-100%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .toolkit-track-left {
          display: flex !important;
          flex-shrink: 0 !important;
          animation: toolkitMarqueeLeft 30s linear infinite !important;
          will-change: transform !important;
        }
        .toolkit-track-right {
          display: flex !important;
          flex-shrink: 0 !important;
          animation: toolkitMarqueeRight 30s linear infinite !important;
          will-change: transform !important;
        }
        .marquee-hover-pause:hover .toolkit-track-left,
        .marquee-hover-pause:hover .toolkit-track-right {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Header: MY TOOLKIT with gradient dividing line */}
      <div className="mb-6 sm:mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-sky-600 dark:text-sky-400">
            MY TOOLKIT
          </span>
        </div>
        <div className="ml-6 h-px flex-1 bg-gradient-to-r from-sky-400/35 via-sky-400/10 to-transparent dark:from-white/15 dark:via-white/5 dark:to-transparent" />
      </div>

      {/* Dual Row Marquee Container with Left-Right Gradient Fade */}
      <div
        className="marquee-hover-pause relative w-full overflow-hidden py-1"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {/* Row 1: Scrolling Left (Two sibling tracks for seamless infinite looping) */}
        <div className="flex overflow-hidden">
          <div className="toolkit-track-left flex shrink-0 items-center gap-3 sm:gap-4 pr-3 sm:pr-4">
            {row1.map((skill, i) => (
              <ToolkitPill key={`r1a-${skill.slug}-${i}`} skill={skill} lang={lang} />
            ))}
          </div>
          <div
            className="toolkit-track-left flex shrink-0 items-center gap-3 sm:gap-4 pr-3 sm:pr-4"
            aria-hidden="true"
          >
            {row1.map((skill, i) => (
              <ToolkitPill key={`r1b-${skill.slug}-${i}`} skill={skill} lang={lang} />
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right (Two sibling tracks for seamless infinite looping) */}
        <div className="flex overflow-hidden mt-3 sm:mt-4">
          <div className="toolkit-track-right flex shrink-0 items-center gap-3 sm:gap-4 pr-3 sm:pr-4">
            {row2.map((skill, i) => (
              <ToolkitPill key={`r2a-${skill.slug}-${i}`} skill={skill} lang={lang} />
            ))}
          </div>
          <div
            className="toolkit-track-right flex shrink-0 items-center gap-3 sm:gap-4 pr-3 sm:pr-4"
            aria-hidden="true"
          >
            {row2.map((skill, i) => (
              <ToolkitPill key={`r2b-${skill.slug}-${i}`} skill={skill} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
