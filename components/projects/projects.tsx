"use client";

import {
  ArrowUpRight,
  Code2,
  Github,
  LineChart,
  Rocket,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { useLanguage } from "@/lib/language-context";

interface StackingProject {
  id: string;
  number: string;
  category: { id: string; en: string };
  title: { id: string; en: string };
  description: { id: string; en: string };
  tech: string[];
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  liveUrl?: string;
  githubUrl?: string;
  gradient: {
    overlay: string;
    border: string;
    glow: string;
    badgeBg: string;
    badgeText: string;
  };
}

const STACKING_PROJECTS: StackingProject[] = [
  {
    id: "uav-2025",
    number: "01",
    category: {
      id: "ROBOTIKA & TELEMETRI // AVRO POLINEMA",
      en: "ROBOTICS & TELEMETRY // AVRO POLINEMA",
    },
    title: {
      id: "Autonomous UAV Ground Control & Telemetry",
      en: "Autonomous UAV Ground Control & Telemetry",
    },
    description: {
      id: "Sistem kendali telemetri dan navigasi autonomous drone wahana terbang tanpa awak di tim riset AVRO Polinema. Memantau parameter penerbangan real-time, protokol komunikasi MAVLink, waypoint tracking, serta fail-safe safety recovery.",
      en: "Autonomous UAV ground control and real-time telemetry streaming engineered for AVRO Polinema aerial missions. Features MAVLink protocols, waypoint tracking, and fail-safe recovery systems.",
    },
    tech: ["Python", "MAVLink", "Telemetry", "Linux", "QGroundControl", "Robotics"],
    icon: Rocket,
    image:
      "https://cdn.dribbble.com/userupload/46128964/file/b92b9d268dd928642ca94bd49e32923a.jpg?resize=1024x768&vertical=center",
    imageAlt: "Autonomous UAV Telemetry Mockup",
    liveUrl: "#",
    githubUrl: "https://github.com/sultampan/UAV2025",
    gradient: {
      overlay:
        "from-sky-500/20 via-sky-950/40 to-[#070913]/95 dark:from-sky-500/25 dark:via-sky-950/50 dark:to-[#070913]/98",
      border: "border-sky-400/35 hover:border-sky-400/70",
      glow: "rgba(56,189,248,0.25)",
      badgeBg: "bg-sky-500/15 border-sky-400/30",
      badgeText: "text-sky-400 dark:text-sky-300",
    },
  },
  {
    id: "epl-match-predictor",
    number: "02",
    category: {
      id: "MACHINE LEARNING & ANALISIS DATA",
      en: "MACHINE LEARNING & DATA INTELLIGENCE",
    },
    title: {
      id: "Premier League (EPL) Match Outcome Predictor",
      en: "Premier League (EPL) Match Outcome Predictor",
    },
    description: {
      id: "Model prediktif cerdas berbasis Machine Learning untuk menganalisis dan memperkirakan hasil laga Premier League Inggris. Menerapkan pemrosesan data statistik historis pertandingan, feature engineering, dan evaluasi akurasi probabilitas kemenangan.",
      en: "Intelligent machine learning predictive model analyzing and forecasting English Premier League match results. Leverages historical football datasets, feature engineering, and model validation metrics in Python & Google Colab.",
    },
    tech: ["Python", "Google Colab", "Scikit-Learn", "Pandas", "NumPy", "Predictive ML"],
    icon: LineChart,
    image:
      "https://cdn.dribbble.com/userupload/47357856/file/75841fa59f32f05ca6c5ddf02d08dfe6.png?resize=1024x768&vertical=center",
    imageAlt: "EPL Match Predictor Dashboard Mockup",
    liveUrl: "#",
    githubUrl: "https://github.com/sultampan/epl-match-predictor",
    gradient: {
      overlay:
        "from-emerald-500/20 via-teal-950/40 to-[#070913]/95 dark:from-emerald-500/25 dark:via-teal-950/50 dark:to-[#070913]/98",
      border: "border-emerald-400/35 hover:border-emerald-400/70",
      glow: "rgba(52,211,153,0.25)",
      badgeBg: "bg-emerald-500/15 border-emerald-400/30",
      badgeText: "text-emerald-400 dark:text-emerald-300",
    },
  },
  {
    id: "sepatustore",
    number: "03",
    category: {
      id: "FULL-STACK WEB // CLEAN ARCHITECTURE",
      en: "FULL-STACK WEB // CLEAN ARCHITECTURE",
    },
    title: {
      id: "SepatuStore - E-Commerce & Filament Admin",
      en: "SepatuStore - Footwear Commerce & Filament Admin",
    },
    description: {
      id: "Platform web toko online e-commerce produk sepatu tangguh berbasis Laravel 11 menerapkan Service Repository Pattern. Dilengkapi panel dashboard admin interaktif Filament PHP, manajemen katalog sepatu, dan pengelolaan stok terstruktur.",
      en: "Robust footwear commerce web application developed with Laravel 11 implementing the Service Repository Pattern. Integrated with an interactive Filament PHP dashboard for catalog, orders, and inventory management.",
    },
    tech: ["Laravel 11", "Filament PHP", "MySQL", "Tailwind CSS", "Blade", "Service Repository"],
    icon: Code2,
    image:
      "https://cdn.dribbble.com/userupload/24599416/file/original-1ae5075dcd129aebb16bdbca24b41ac7.png?resize=1024x768&vertical=center",
    imageAlt: "SepatuStore Laravel Filament Mockup",
    liveUrl: "#",
    githubUrl: "https://github.com/sultampan/sepatustore",
    gradient: {
      overlay:
        "from-indigo-500/20 via-purple-950/40 to-[#070913]/95 dark:from-indigo-500/25 dark:via-purple-950/50 dark:to-[#070913]/98",
      border: "border-indigo-400/35 hover:border-indigo-400/70",
      glow: "rgba(129,140,248,0.25)",
      badgeBg: "bg-indigo-500/15 border-indigo-400/30",
      badgeText: "text-indigo-400 dark:text-indigo-300",
    },
  },
  {
    id: "pwl-simple-pos",
    number: "04",
    category: {
      id: "WEB ENTERPRISE // SISTEM INFORMASI BISNIS",
      en: "ENTERPRISE WEB // BUSINESS INFORMATION SYSTEM",
    },
    title: {
      id: "PWL Simple Point of Sales (POS) & Retail System",
      en: "PWL Simple Point of Sales (POS) & Retail System",
    },
    description: {
      id: "Aplikasi kasir dan manajemen transaksi penjualan Point of Sales (POS) berbasis Laravel. Memfasilitasi transaksi penjualan cepat, pencatatan stok inventaris secara terpusat, pengelompokan kategori barang, serta pelaporan keuangan operasional.",
      en: "Point of Sales (POS) and retail management application built with Laravel. Features streamlined checkout transactions, centralized inventory monitoring, item categorization, and periodic sales analytics.",
    },
    tech: ["Laravel", "Blade", "MySQL", "PHP", "Bootstrap", "Inventory System"],
    icon: Smartphone,
    image:
      "https://cdn.dribbble.com/userupload/43955214/file/original-d4cde1de803e84b97d8892e3444c04b0.png?resize=1024x768&vertical=center",
    imageAlt: "PWL Simple POS Application Mockup",
    liveUrl: "#",
    githubUrl: "https://github.com/sultampan/PWL-Simple-POS",
    gradient: {
      overlay:
        "from-amber-500/20 via-orange-950/40 to-[#070913]/95 dark:from-amber-500/25 dark:via-orange-950/50 dark:to-[#070913]/98",
      border: "border-amber-400/35 hover:border-amber-400/70",
      glow: "rgba(251,191,36,0.25)",
      badgeBg: "bg-amber-500/15 border-amber-400/30",
      badgeText: "text-amber-400 dark:text-amber-300",
    },
  },
];

export function Projects(): ReactNode {
  const { lang } = useLanguage();

  return (
    <section className="relative w-full pb-28 sm:pb-36">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-8 lg:px-10">
        {/* Sub-Header Indicator Bar */}
        <div className="flex items-center justify-between mb-8 sm:mb-12 border-b border-foreground/10 pb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-foreground/50 uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5 text-sky-400" />
            <span>
              {lang === "id"
                ? "KATALOG KARYA & SHOWCASE PRODUK"
                : "PRODUCT & PROJECT SHOWCASE"}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 font-mono text-[11px] text-foreground/45 uppercase tracking-[0.25em]">
            <span>Scroll</span>
            <span className="h-px w-8 bg-gradient-to-r from-sky-400 to-transparent" />
            <span className="text-sky-500 dark:text-sky-400 font-semibold">
              Stack
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* STICKY STACKING CARDS CONTAINER                           */}
        {/* ========================================================= */}
        <div className="relative space-y-10 sm:space-y-14">
          {STACKING_PROJECTS.map((project, index) => {
            const Icon = project.icon;
            const category =
              lang === "id" ? project.category.id : project.category.en;
            const title = lang === "id" ? project.title.id : project.title.en;
            const description =
              lang === "id"
                ? project.description.id
                : project.description.en;

            return (
              <div
                key={project.id}
                className="sticky transition-all duration-300"
                style={{
                  top: `calc(4.25rem + ${index * 1.35}rem)`,
                }}
              >
                <article
                  className={`group relative min-h-[460px] sm:min-h-[520px] lg:h-[72vh] lg:min-h-[560px] lg:max-h-[660px] w-full overflow-hidden rounded-3xl sm:rounded-[2rem] border bg-gradient-to-br ${project.gradient.overlay} ${project.gradient.border} p-5 sm:p-9 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-300`}
                >
                  {/* Subtle Top Inner Highlight */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                  {/* Giant Semi-Transparent Watermark Number in Corner */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-4 right-4 sm:right-8 font-black text-8xl sm:text-9xl lg:text-[11.5rem] tracking-tighter text-white/[0.06] select-none z-0 leading-none"
                  >
                    {project.number}
                  </div>

                  {/* Main Grid Content */}
                  <div className="relative z-10 grid h-full grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column: Details & Information */}
                    <div className="flex flex-col justify-between h-full lg:col-span-7 space-y-6">
                      <div>
                        {/* Top Tag & Category Line */}
                        <div className="flex flex-wrap items-center gap-3 mb-4 sm:mb-6">
                          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/80 backdrop-blur-md">
                            PROJECT {project.number} / 04
                          </span>
                          <span className="hidden sm:block h-px w-10 bg-white/30" />
                          <span
                            className={`font-mono text-[10.5px] uppercase tracking-wider font-semibold ${project.gradient.badgeText}`}
                          >
                            {category}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.1] tracking-tight text-white transition-colors">
                          {title}
                        </h2>

                        {/* Description */}
                        <p className="mt-4 text-xs sm:text-sm lg:text-base leading-relaxed text-white/75 max-w-xl">
                          {description}
                        </p>

                        {/* Tech Stack Chips */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-lg border border-white/15 bg-white/5 dark:bg-white/[0.06] px-3 py-1 text-xs font-mono text-white/85 backdrop-blur-md shadow-xs"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action CTAs */}
                      <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-3 sm:gap-4">
                        <a
                          href={project.liveUrl ?? "#"}
                          className="group/cta inline-flex items-center gap-2.5 rounded-xl bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all duration-300 hover:scale-[1.03] hover:bg-white/95"
                        >
                          <span>{lang === "id" ? "Lihat Demo / Proyek" : "Visit Project Live"}</span>
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                        </a>

                        <a
                          href={project.githubUrl ?? "https://github.com/sultampan"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs sm:text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10 hover:border-white/35"
                        >
                          <Github className="h-4 w-4 text-white/80" />
                          <span>{lang === "id" ? "Repositori GitHub" : "Source Code"}</span>
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Visual Mockup Showcase & Floating Tech Squircle */}
                    <div className="relative flex flex-col items-center justify-center lg:col-span-5 h-full">
                      {/* Floating Frosted Tech Badge Squircle */}
                      <div className="absolute -top-3 sm:-top-5 right-2 sm:right-6 z-20 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl sm:rounded-3xl border border-white/25 bg-white/10 dark:bg-white/15 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.4)] text-white group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                      </div>

                      {/* Mockup Frame */}
                      <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-white/20 bg-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          priority={index < 2}
                        />
                        {/* Anti-Glare Sheen */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/10" />
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
