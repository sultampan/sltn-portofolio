"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { PortraitMorph } from "./portrait-morph";
import { portfolioData, resolveLocalized } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

function RotatingWord({
  lang,
  words,
}: {
  lang: "id" | "en";
  words?: { id: string[]; en: string[] } | undefined;
}): ReactNode {
  const list =
    words?.[lang] ?? words?.en ?? [
      "Student",
      "Gamer",
      "GCS Operator",
      "Full-Stack Dev",
      "AI/ML Explorer",
      "Drone Enthusiast",
    ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % list.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [list.length]);

  return (
    <span className="relative inline-flex items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={`${lang}-${index}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block font-bold text-sky-400 dark:text-sky-300 underline underline-offset-6 decoration-sky-400/60 decoration-2 drop-shadow-[0_2px_12px_rgba(56,189,248,0.35)]"
        >
          {list[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function HeroSocials(): ReactNode {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/sultampan",
      icon: ({ className }: { className?: string }) => (
        <Github className={className} />
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com",
      icon: ({ className }: { className?: string }) => (
        <Linkedin className={className} />
      ),
    },
    {
      name: "X",
      href: "https://x.com",
      icon: () => (
        <Image
          src="/x.svg"
          alt="X"
          width={13}
          height={13}
          className="max-h-[13px] max-w-[13px] object-contain dark:invert"
        />
      ),
    },
    {
      name: "Email",
      href: `mailto:${portfolioData.personal.email}`,
      icon: ({ className }: { className?: string }) => (
        <Mail className={className} />
      ),
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {socials.map((s) => {
        const Icon = s.icon;
        return (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="flex h-8.5 w-8.5 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-foreground/10 bg-background/90 text-foreground/70 transition-all duration-200 hover:border-sky-400/40 hover:bg-sky-400/5 hover:text-sky-400 dark:hover:text-sky-300 shadow-xs"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}

export function Hero(): ReactNode {
  const { personal } = portfolioData;
  const { lang } = useLanguage();

  const bio = resolveLocalized(personal.bio, lang);

  return (
    <section className="relative flex h-full w-full items-center justify-center px-6 sm:px-10 pb-24 sm:pb-28 pt-4 sm:pt-6">
      <div className="mx-auto w-full max-w-275">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
          <FadeIn className="flex flex-col gap-3 sm:gap-3.5">
            {/* Small Greeting */}
            <p className="text-[14px] sm:text-[16px] leading-tight tracking-tight font-medium text-foreground/75">
              {lang === "id" ? "Hai, Nama Saya" : "Hey, My Name is"}
            </p>

            {/* Big Name with Accent Underline */}
            <h1 className="font-sans text-[2.15rem] sm:text-[3.15rem] lg:text-[3.75rem] font-bold leading-[1.04] tracking-tight text-foreground">
              <span className="relative inline-block">
                Sultan
                <span
                  className="absolute left-0 -bottom-1.5 h-1 sm:h-1.5 w-14 sm:w-20 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500 shadow-[0_2px_14px_rgba(56,189,248,0.5)]"
                  aria-hidden="true"
                />
              </span>
              <br />
              <span className="mt-1 inline-block">
                Syarif Al <span className="text-sky-400">.</span>
              </span>
            </h1>

            {/* Headline with Rotating Theme-aligned Word */}
            <div className="text-[15px] sm:text-[20px] font-medium leading-[1.3] tracking-tight text-foreground/90">
              <span>
                {lang === "id"
                  ? "Saya seorang Software Engineer"
                  : "I am a Software Engineer"}
              </span>
              <br />
              <span>&amp; </span>
              <RotatingWord lang={lang} words={personal.rotatingWords} />
            </div>

            {/* Short Bio */}
            <p className="max-w-[40ch] text-[13px] sm:text-[14.5px] leading-relaxed tracking-tight text-foreground/65">
              {bio}
            </p>

            {/* Social Icons & Action Buttons Row */}
            <div className="flex flex-col gap-2.5 pt-1">
              <HeroSocials />
              <HeroCtas />
            </div>
          </FadeIn>

          {/* Right Column: Morphing Portrait / Avatar with iOS 26 Glassmorphic Squircle */}
          <ScaleUnblur className="flex justify-center md:justify-end">
            <div className="group relative aspect-square w-full max-w-[210px] sm:max-w-[280px] md:max-w-[350px] lg:max-w-[390px] transition-transform duration-500 ease-out hover:scale-[1.02]">
              {/* iOS Liquid Glass Frost Cyan Ambient Glow */}
              <div
                className="pointer-events-none absolute -inset-3 rounded-[3.2rem] bg-gradient-to-tr from-sky-400/35 via-cyan-400/20 to-transparent dark:from-sky-400/25 dark:via-cyan-400/10 dark:to-transparent opacity-85 blur-2xl transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                aria-hidden="true"
              />

              {/* iOS 26 Frosted Glass Translucent Blue Squircle Card */}
              <div className="relative h-full w-full rounded-[2.35rem] sm:rounded-[2.65rem] border-2 border-sky-400/50 dark:border-sky-400/35 bg-gradient-to-b from-sky-400/15 via-white/10 to-sky-500/10 dark:from-sky-400/12 dark:via-sky-950/20 dark:to-cyan-900/15 p-2 sm:p-2.5 shadow-[0_0_35px_rgba(56,189,248,0.22),0_25px_65px_-12px_rgba(0,0,0,0.7)] ring-1 ring-cyan-300/30 dark:ring-sky-400/20 backdrop-blur-2xl overflow-hidden">
                {/* Specular Top-Light Reflection with Cyan Tint */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[2.35rem] sm:rounded-[2.65rem] bg-gradient-to-b from-sky-300/30 via-white/10 to-transparent dark:from-sky-300/20 dark:via-transparent z-10"
                  aria-hidden="true"
                />

                {/* Inner Beveled Photo Viewport */}
                <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] sm:rounded-[2.1rem] ring-1 ring-sky-400/30 dark:ring-sky-400/25 bg-neutral-900/10 dark:bg-white/5">
                  <PortraitMorph
                    srcA={personal.portrait.default}
                    srcB={personal.portrait.hover}
                    alt={personal.portrait.alt}
                  />
                </div>
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
