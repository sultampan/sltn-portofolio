"use client";

import {
  Bot,
  Brain,
  Globe,
  Smartphone,
  Terminal,
  Activity,
  Sparkles,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { portfolioData, resolveLocalized } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";
import { useState, type ReactNode } from "react";

const ICON_MAP: Record<string, LucideIcon> = {
  globe: Globe,
  smartphone: Smartphone,
  bot: Bot,
  brain: Brain,
};

interface ModuleMeta {
  lvl: string;
  code: string;
  statusId: string;
  statusEn: string;
}

const MODULE_META: Record<string, ModuleMeta> = {
  "fullstack-backend": {
    lvl: "01",
    code: "BACKEND_CORE",
    statusId: "ONLINE",
    statusEn: "ONLINE",
  },
  "mobile-development": {
    lvl: "02",
    code: "MOBILE_APPLICATIONS",
    statusId: "READY",
    statusEn: "READY",
  },
  "robotics-gcs": {
    lvl: "03",
    code: "AVRO_GCS_TELEMETRY",
    statusId: "AKTIF",
    statusEn: "ACTIVE",
  },
  "machine-learning": {
    lvl: "04",
    code: "AI_PREDICTIVE_MODELS",
    statusId: "SYNCED",
    statusEn: "SYNCED",
  },
};

export function WhatIDo(): ReactNode {
  const { lang } = useLanguage();
  const items = portfolioData.whatIDo ?? [];
  const [activeHover, setActiveHover] = useState<string | null>(null);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(`module-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-20 sm:px-10 sm:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        {/* ========================================================= */}
        {/* LEFT COLUMN: Sticky Left Aligned Cyber-Avionics Command   */}
        {/* ========================================================= */}
        <aside className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-start text-left space-y-6">

          {/* Editorial Title with Cyber-Avionics Accent */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-medium tracking-tight text-foreground leading-tight">
              What I Do
            </h2>
            <div className="mt-2.5 flex items-center gap-2.5">
              <div className="h-0.5 w-8 bg-sky-400/80 rounded-full" />
              <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/50 font-medium">
                {lang === "id" ? "REKAYASA SISTEM & PENGEMBANGAN" : "SYSTEMS ENGINEERING & DEV"}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base leading-relaxed text-foreground/75 max-w-prose">
            {lang === "id"
              ? "Merancang dan mengeksekusi sistem komputasi terintegrasi: dari arsitektur backend skala besar, aplikasi mobile berkinerja tinggi, stasiun kendali robotika UAV otonom (AVRO), hingga eksplorasi machine learning terapan."
              : "Engineering cross-disciplinary computing solutions: from scalable backend architectures and native-feel mobile apps, to autonomous UAV robotics ground control (AVRO) and applied machine learning."}
          </p>

          {/* Interactive Module Navigator / Quick-Jump */}
          <div className="w-full space-y-2 pt-1">
            <div className="flex items-center justify-between text-[11px] font-mono text-foreground/50 pb-1">
              <span className="text-sky-500 dark:text-sky-400 font-mono tracking-wider text-[11px] font-semibold uppercase">
                {lang === "id" ? "PILIH MODUL TELEMETRI:" : "SELECT TELEMETRY MODULE:"}
              </span>
              <span className="font-mono text-[10px] text-foreground/40">4 / 4 LOADED</span>
            </div>

            <div className="flex flex-col gap-2">
              {items.map((item, idx) => {
                const meta = MODULE_META[item.id] ?? {
                  lvl: `0${idx + 1}`,
                  code: item.id.toUpperCase(),
                  statusId: "ONLINE",
                  statusEn: "ONLINE",
                };
                const title = resolveLocalized(item.title, lang);
                const isHovered = activeHover === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleScrollTo(item.id)}
                    onMouseEnter={() => setActiveHover(item.id)}
                    onMouseLeave={() => setActiveHover(null)}
                    className={`group/btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isHovered
                        ? "border-sky-400/50 bg-sky-500/15 dark:bg-sky-400/10 shadow-[0_0_20px_rgba(56,189,248,0.15)] translate-x-1"
                        : "border-foreground/10 bg-foreground/2 hover:border-sky-400/30 hover:bg-foreground/4"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="font-mono text-[11px] font-bold text-sky-500 dark:text-sky-400 shrink-0">
                        [{meta.lvl}]
                      </span>
                      <span className="text-xs sm:text-[13px] font-medium text-foreground/85 truncate group-hover/btn:text-sky-400 dark:group-hover/btn:text-sky-300">
                        {title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-[9px] px-2 py-0.5 rounded border border-sky-400/25 bg-sky-500/10 text-sky-500 dark:text-sky-300 uppercase tracking-wider font-semibold">
                        {lang === "id" ? meta.statusId : meta.statusEn}
                      </span>
                      <ChevronRight className="h-3.5 w-3.5 text-foreground/40 group-hover/btn:text-sky-400 group-hover/btn:translate-x-0.5 transition-all" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* High-Tech Telemetry HUD Console Widget */}
          <div className="w-full rounded-2xl border border-sky-400/20 bg-gradient-to-b from-sky-400/5 via-foreground/[0.02] to-sky-500/5 p-4 sm:p-5 backdrop-blur-xl shadow-xs">
            <div className="flex items-center justify-between text-[11px] font-mono mb-2.5">
              <span className="text-foreground/80 flex items-center gap-2 font-medium">
                <Terminal className="h-3.5 w-3.5 text-sky-400" />
                {"AVRO_GCS // WORKSTATION CORE"}
              </span>
              <span className="text-emerald-500 dark:text-emerald-400 text-[10px] font-semibold flex items-center gap-1 font-mono">
                <Activity className="h-3 w-3 animate-pulse" />
                ONLINE
              </span>
            </div>

            {/* Telemetry Bar */}
            <div className="w-full h-1.5 rounded-full bg-foreground/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-300 shadow-[0_0_10px_rgba(56,189,248,0.7)]"
                style={{ width: "96%" }}
              />
            </div>

            <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono text-foreground/55">
              <span>TELEMETRY: STABLE (99.8%)</span>
              <span>LATENCY: &lt;12ms</span>
            </div>
          </div>
        </aside>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: 4 Horizontal Landscape Liquid Glass Cards   */}
        {/* ========================================================= */}
        <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-7">
          {items.map((item, idx) => {
            const Icon = ICON_MAP[item.icon] ?? Globe;
            const meta = MODULE_META[item.id] ?? {
              lvl: `0${idx + 1}`,
              code: item.id.toUpperCase(),
              statusId: "ONLINE",
              statusEn: "ONLINE",
            };
            const title = resolveLocalized(item.title, lang);
            const subtitle = resolveLocalized(item.subtitle, lang);
            const description = resolveLocalized(item.description, lang);
            const highlights = resolveLocalized(item.highlights, lang) ?? [];
            const isHovered = activeHover === item.id;

            return (
              <article
                key={item.id}
                id={`module-${item.id}`}
                onMouseEnter={() => setActiveHover(item.id)}
                onMouseLeave={() => setActiveHover(null)}
                className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 scroll-mt-28 p-6 sm:p-8 backdrop-blur-2xl ${
                  isHovered
                    ? "border-sky-400/60 bg-gradient-to-b from-sky-400/15 via-white/80 to-sky-500/10 dark:from-sky-500/15 dark:via-[#0c0e14]/90 dark:to-sky-950/35 shadow-[0_20px_50px_rgba(56,189,248,0.18)]"
                    : "border-sky-400/20 bg-gradient-to-b from-sky-400/10 via-white/70 to-sky-500/[0.05] dark:from-sky-500/10 dark:via-[#0c0e14]/85 dark:to-sky-950/25 shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:border-sky-400/50 hover:shadow-[0_20px_50px_rgba(56,189,248,0.15)]"
                }`}
              >
                {/* Decorative Ambient Glow in Corner */}
                <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-sky-400/10 blur-2xl transition-all duration-500 group-hover:bg-sky-400/25" />

                {/* Top Row: Cyber-Avionics Badge & Squircle Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-semibold text-sky-500 dark:text-sky-300 bg-sky-500/10 dark:bg-sky-400/10 border border-sky-400/30 px-3 py-1 rounded-lg tracking-wider uppercase flex items-center gap-2 shadow-xs">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                      {`SYS_0${idx + 1} // ${meta.code}`}
                    </span>
                    <span className="hidden sm:inline-block font-mono text-[10px] text-foreground/40 uppercase">
                      {lang === "id" ? `[STATUS: ${meta.statusId}]` : `[STATUS: ${meta.statusEn}]`}
                    </span>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-400/10 text-sky-500 dark:text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-400 group-hover:text-white dark:group-hover:text-slate-950">
                    <Icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-foreground group-hover:text-sky-500 dark:group-hover:text-sky-300 transition-colors">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-sky-600 dark:text-sky-400/90 mt-1 mb-4 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 shrink-0 text-sky-500" />
                  <span>{subtitle}</span>
                </p>

                {/* Paragraph Description */}
                <p className="text-xs sm:text-sm leading-relaxed text-foreground/75 mb-6">
                  {description}
                </p>

                {/* Key Objectives / Highlights with Modern Avionics Glyph */}
                <div className="mb-6 space-y-2 rounded-2xl border border-foreground/8 bg-foreground/2 dark:bg-foreground/[0.02] p-4 sm:p-5">
                  <span className="block font-mono text-[10.5px] uppercase tracking-wider text-sky-500 dark:text-sky-400 font-semibold mb-2">
                    {lang === "id" ? "POKOK KOMPETENSI & SPESIFIKASI" : "CORE COMPETENCIES & HIGHLIGHTS"}
                  </span>
                  <ul className="space-y-2.5">
                    {highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85 leading-relaxed"
                      >
                        <span className="font-mono text-sky-500 dark:text-sky-400 text-xs shrink-0 mt-0.5 select-none font-bold">
                          ▸
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Tools Row */}
                <div className="pt-4 border-t border-sky-400/15 flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="font-mono text-[10px] text-foreground/50 mr-1 uppercase font-semibold">
                    STACK:
                  </span>
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg border border-sky-400/20 bg-sky-400/5 dark:bg-sky-950/40 px-2.5 py-1 text-[11px] font-mono text-foreground/80 hover:border-sky-400/50 hover:text-sky-500 dark:hover:text-sky-300 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
