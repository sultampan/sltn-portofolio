"use client";

import { useState, useMemo, type ReactNode } from "react";
import { Code2, Layers, Wrench, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, resolveLocalized, type SkillCategoryItem } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

type FilterTab = "all" | "language" | "framework" | "tool";

export function SkillsGrid(): ReactNode {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const allSkills = portfolioData.categorizedSkills ?? [];

  const filteredSkills = useMemo(() => {
    return allSkills.filter((item) => {
      const matchesTab = activeTab === "all" || item.category === activeTab;
      const desc = resolveLocalized(item.description, lang) ?? "";
      const matchesQuery =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesQuery;
    });
  }, [allSkills, activeTab, searchQuery, lang]);

  const tabs: { id: FilterTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    {
      id: "all",
      label: lang === "id" ? "Semua Teknologi" : "All Technologies",
      icon: Layers,
    },
    {
      id: "language",
      label: lang === "id" ? "Bahasa Pemrograman" : "Languages",
      icon: Code2,
    },
    {
      id: "framework",
      label: lang === "id" ? "Framework & Library" : "Frameworks",
      icon: Layers,
    },
    {
      id: "tool",
      label: lang === "id" ? "Tools & Platform" : "Tools & Platforms",
      icon: Wrench,
    },
  ];

  return (
    <section className="mx-auto w-full max-w-275 px-6 pb-20 sm:px-10 sm:pb-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-foreground/10 pb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-foreground/50">
            {lang === "id" ? "Stack & Teknologi" : "Stack & Technologies"}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-foreground mt-1">
            {lang === "id"
              ? "Bahasa, Framework & Tools yang Saya Pakai"
              : "Languages, Frameworks & Tools I Use"}
          </h2>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === "id" ? "Cari teknologi..." : "Search tech..."}
            className="w-full rounded-xl border border-foreground/10 bg-foreground/2 pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:border-sky-400/50 focus:outline-none focus:ring-1 focus:ring-sky-400/30 transition-all"
          />
        </div>
      </div>

      {/* Tabs Row */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {tabs.map((t) => {
          const Icon = t.icon;
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-sky-400 text-slate-950 font-semibold shadow-[0_0_18px_rgba(56,189,248,0.35)]"
                  : "bg-foreground/4 text-foreground/70 hover:bg-sky-400/10 hover:text-sky-400 hover:border-sky-400/30 border border-foreground/6"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Tech Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} lang={lang} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredSkills.length === 0 && (
        <div className="py-16 text-center text-foreground/50">
          <p className="text-sm">
            {lang === "id"
              ? "Tidak ada teknologi yang cocok dengan pencarian Anda."
              : "No technologies matched your search query."}
          </p>
        </div>
      )}
    </section>
  );
}

function SkillCard({
  skill,
  lang,
}: {
  skill: SkillCategoryItem;
  lang: "id" | "en";
}): ReactNode {
  const desc = resolveLocalized(skill.description, lang);
  const levelText = resolveLocalized(skill.level, lang);

  const categoryLabel = {
    language: lang === "id" ? "Bahasa" : "Language",
    framework: lang === "id" ? "Framework" : "Framework",
    tool: lang === "id" ? "Tool" : "Tool",
  }[skill.category];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="group relative flex flex-col justify-between rounded-2xl border border-foreground/10 bg-foreground/2 p-4 sm:p-5 backdrop-blur-md transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-400/5 hover:shadow-lg"
    >
      {/* Top row: Logo + Name + Category Badge */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            {/* Logo container */}
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-background/90 p-2 shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:border-sky-400/30"
              style={{
                boxShadow: `0 4px 12px ${skill.color}15`,
              }}
            >
              <img
                src={
                  skill.iconUrl ??
                  `https://cdn.simpleicons.org/${skill.slug}`
                }
                alt={`${skill.name} logo`}
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
                loading="lazy"
                onError={(e) => {
                  // Fallback to text if icon fails to load
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            </div>

            <div>
              <h3 className="font-sans text-base font-semibold tracking-tight text-foreground group-hover:text-sky-400 dark:group-hover:text-sky-300 transition-colors">
                {skill.name}
              </h3>
              <span className="text-[11px] font-mono tracking-tight text-foreground/50">
                {categoryLabel}
              </span>
            </div>
          </div>

          {/* Proficiency / Level Pill */}
          {levelText && (
            <span className="rounded-full border border-foreground/10 bg-foreground/4 px-2.5 py-0.5 text-[10px] font-mono tracking-wide text-foreground/70">
              {levelText}
            </span>
          )}
        </div>

        {/* Description */}
        {desc && (
          <p className="text-xs sm:text-[13px] leading-relaxed text-foreground/65 mt-2">
            {desc}
          </p>
        )}
      </div>

      {/* Bottom accent indicator */}
      <div className="mt-4 pt-3 border-t border-foreground/5 flex items-center justify-between text-[11px] text-foreground/40 font-mono">
        <span className="flex items-center gap-1.5">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: skill.color }}
          />
          {skill.slug}
        </span>
      </div>
    </motion.div>
  );
}
