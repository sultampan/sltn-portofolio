"use client";

import { ArrowRight } from "lucide-react";
import { LayoutGroup, motion } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";

import { ContactButton } from "@/components/contact/contact-button";
import { useLanguage } from "@/lib/language-context";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroCtas(): ReactNode {
  const { lang } = useLanguage();

  return (
    <LayoutGroup>
      <motion.div
        layout
        transition={{ layout: { duration: 0.55, ease: EASE } }}
        className="mt-2 flex flex-wrap items-center gap-3"
      >
        <ContactButton />

        <motion.div
          layout
          transition={{ layout: { duration: 0.55, ease: EASE } }}
        >
          <Link
            href="/about"
            className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background/90 px-5 py-2.5 text-sm font-medium text-foreground shadow-2xl transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-400/5 hover:text-sky-400 dark:hover:text-sky-300"
          >
            {lang === "id" ? "tentang Aku" : "About Me"}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-sky-400 dark:group-hover:text-sky-300"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
}
