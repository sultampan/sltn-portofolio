"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Code2,
  Gamepad2,
  Radio,
  Sparkles,
} from "lucide-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ScrollReveal } from "@/components/ui/motion-primitives";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

function SoccerBallIcon({ className }: { className?: string }): ReactNode {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m12 7 3 2.5-1 3.5h-4l-1-3.5Z" />
      <path d="M12 7V2" />
      <path d="m15 9.5 4.5-1.5" />
      <path d="M14 13l3.5 3.5" />
      <path d="M10 13l-3.5 3.5" />
      <path d="M9 9.5 4.5 8" />
    </svg>
  );
}

export function AboutBio(): ReactNode {
  const { lang } = useLanguage();

  const hobbies = [
    {
      id: "code",
      stat: "Code",
      badge: { id: "Software & Web", en: "Software & Web" },
      title: { id: "Coding & Arsitektur Software", en: "Coding & Software Architecture" },
      description: {
        id: "Membangun arsitektur web modern skala produksi, backend API yang andal, dan ekosistem aplikasi mobile yang responsif.",
        en: "Building production-grade web architectures, dependable backend APIs, and high-performance mobile apps.",
      },
      tags: ["Next.js", "TypeScript", "Flutter", "Go / SQL"],
      status: { id: "Aktivitas Harian", en: "Daily Engineering" },
      icon: Code2,
      glow: "from-sky-500/20 to-cyan-500/10",
    },
    {
      id: "avro",
      stat: "AVRO",
      badge: { id: "Robotika Terbang", en: "Flying Robotics" },
      title: { id: "Drone & Ground Control Station", en: "Drone & Ground Control Station" },
      description: {
        id: "Operator telemetri Ground Control Station (GCS) robot terbang AVRO Polinema untuk misi navigasi otonom dan telemetri UAV.",
        en: "Ground Control Station (GCS) telemetry operator for AVRO flying robotics team at POLINEMA during autonomous flights.",
      },
      tags: ["GCS Telemetry", "Autonomous UAV", "Flight Protocol"],
      status: { id: "Tim AVRO Polinema", en: "AVRO Robotics Team" },
      icon: Radio,
      glow: "from-cyan-500/20 to-blue-500/10",
    },
    {
      id: "game",
      stat: "Game",
      badge: { id: "Taktik & Refleks", en: "Tactics & Reflex" },
      title: { id: "Gaming & Pengambilan Keputusan Taktis", en: "Strategy & Competitive Gaming" },
      description: {
        id: "Mengasah fokus konsentrasi, kecepatan reaksi kognitif, strategi adaptif bersama tim, serta sarana penyegaran pikiran.",
        en: "Sharpening focus, cognitive reaction speed, adaptive tactical decision-making, and creative mental refreshment.",
      },
      tags: ["Rapid Reflex", "Team Strategy", "Mind Refreshment"],
      status: { id: "Strategi & Refleks", en: "Strategy & Focus" },
      icon: Gamepad2,
      glow: "from-indigo-500/20 to-sky-500/10",
    },
    {
      id: "aiml",
      stat: "AI/ML",
      badge: { id: "Riset & Eksplorasi", en: "R&D & Exploration" },
      title: { id: "Machine Learning & Tinkering", en: "Machine Learning & Tinkering" },
      description: {
        id: "Eksplorasi kecerdasan buatan, visi komputer (Computer Vision), automasi sistem, dan eksperimen algoritma modern.",
        en: "Exploring AI models, computer vision systems, workflow automations, and modern algorithmic experiments.",
      },
      tags: ["Computer Vision", "Automation", "Model Inference"],
      status: { id: "Eksplorasi AI & Riset", en: "AI Exploration" },
      icon: Sparkles,
      glow: "from-sky-500/20 to-teal-500/10",
    },
    {
      id: "football",
      stat: "Ball",
      badge: { id: "Olahraga & Stamina", en: "Athletics & Stamina" },
      title: { id: "Sepak Bola & Semangat Atletik", en: "Football & Athletic Spirit" },
      description: {
        id: "Bermain sepak bola untuk melatih stamina fisik prima, visi permainan lapangan, sportivitas, dan kerja sama tim (teamwork) yang solid.",
        en: "Cultivating physical stamina, pitch vision, tactical communication, leadership, and athletic team chemistry.",
      },
      tags: ["Teamwork", "Endurance", "Field Vision", "Agility"],
      status: { id: "Sepak Bola Aktif", en: "Active Footballer" },
      icon: SoccerBallIcon,
      glow: "from-emerald-500/20 to-sky-500/10",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const total = hobbies.length;

  const nextCard = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevCard = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const jumpToCard = (index: number): void => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextCard, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextCard]);

  const activeHobby = hobbies[activeIndex] ?? hobbies[0]!;
  const Icon = activeHobby.icon;

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6">
      {/* Top Main Heading */}
      <ScrollReveal delay={0.05}>
        <h1 className="font-sans text-2xl sm:text-4xl lg:text-[2.65rem] font-bold leading-[1.14] tracking-tight text-foreground max-w-4xl">
          {lang === "id" ? (
            <>
              Mahasiswa Sistem Informasi Bisnis{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                di Politeknik Negeri Malang.
              </span>
            </>
          ) : (
            <>
              Business Information Systems Student{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                at State Polytechnic of Malang.
              </span>
            </>
          )}
        </h1>
      </ScrollReveal>

      {/* 2-Column Bento Grid engineered to fit 100vh viewport precisely */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-5 items-stretch">
        {/* Left Card: WHO I AM */}
        <ScrollReveal delay={0.1} className="lg:col-span-7 flex flex-col">
          <div className="relative flex flex-1 flex-col justify-between rounded-3xl border border-sky-400/30 dark:border-sky-400/20 bg-gradient-to-b from-sky-400/12 via-white/70 to-sky-500/10 dark:from-sky-500/12 dark:via-[#0c0e14]/75 dark:to-sky-950/25 p-5 sm:p-7 backdrop-blur-2xl shadow-[0_12px_40px_rgba(56,189,248,0.12),0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_25px_rgba(56,189,248,0.12)] ring-1 ring-sky-300/25 dark:ring-sky-400/15 overflow-hidden transition-all duration-300 hover:border-sky-400/45 hover:shadow-[0_16px_48px_rgba(56,189,248,0.2)]">
            {/* Specular Top-Light Reflection */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-32 rounded-t-3xl bg-gradient-to-b from-sky-300/30 via-white/10 to-transparent dark:from-sky-300/15 dark:via-transparent z-1"
              aria-hidden="true"
            />

            {/* Ambient specular highlight */}
            <div
              className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-sky-400/20 dark:bg-sky-500/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-2">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-sky-600 dark:text-sky-400 uppercase font-semibold">
                WHO I AM
              </span>

              <h2 className="mt-1 sm:mt-1.5 text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                {portfolioData.personal.name}
              </h2>

              <div className="mt-3 sm:mt-4 space-y-2 text-xs sm:text-[13.5px] leading-relaxed text-foreground/80 dark:text-foreground/75 font-normal">
                <p>
                  {lang === "id"
                    ? "Mahasiswa aktif program studi Sistem Informasi Bisnis di Politeknik Negeri Malang (POLINEMA). Berfokus mendalami rekayasa perangkat lunak skala produksi, manajemen arsitektur basis data, serta analisis proses bisnis untuk membangun solusi digital yang efisien, handal, dan berorientasi pada kebutuhan nyata pengguna."
                    : "Active Business Information Systems student at State Polytechnic of Malang (POLINEMA). Focusing on production-grade software engineering, database architectures, and business process analysis to create scalable, dependable, and user-centric digital products."}
                </p>
                <p>
                  {lang === "id"
                    ? "Programmer dan operator Ground Control Station (GCS) di tim robotika terbang AVRO Polinema. Memadukan ilmu manajemen sistem informasi perkuliahan dengan implementasi riil dalam ekosistem web, mobile, dan Machine Learning."
                    : "Software programmer and Ground Control Station (GCS) telemetry operator for the AVRO flying robotics team at POLINEMA, merging academic information systems principles with full-stack web, mobile engineering, and Machine Learning."}
                </p>
              </div>
            </div>

            {/* Buttons Row */}
            <div className="relative z-2 mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-sky-400/20 dark:border-white/10 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/skills"
                className="group inline-flex min-w-[145px] sm:min-w-[160px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all duration-200 hover:shadow-[0_0_28px_rgba(56,189,248,0.55)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{lang === "id" ? "Keahlian Saya" : "My Skills"}</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/projects"
                className="group inline-flex min-w-[145px] sm:min-w-[160px] items-center justify-center gap-2 rounded-full border border-sky-400/25 dark:border-white/15 bg-sky-400/10 dark:bg-white/5 px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-foreground/85 dark:text-neutral-200 backdrop-blur-md transition-all duration-200 hover:bg-sky-400/20 dark:hover:bg-white/10 hover:border-sky-400/40 hover:text-foreground dark:hover:text-white active:scale-[0.98]"
              >
                <span>{lang === "id" ? "Proyek Saya" : "My Projects"}</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Section: Apple iOS 26 Liquid Glass Smart Stack (5 Hobbies) */}
        <ScrollReveal delay={0.14} className="lg:col-span-5 flex flex-col h-full">
          <div
            className="group relative flex flex-1 flex-col h-full w-full min-h-[390px] sm:min-h-[410px] lg:min-h-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* 3D Physical Stacked Depth Layers (Behind Active Card) */}
            <div
              className="pointer-events-none absolute inset-0 translate-y-3 scale-[0.95] rounded-3xl border border-sky-400/15 dark:border-sky-400/10 bg-sky-400/5 dark:bg-[#0c0e14]/40 backdrop-blur-sm opacity-40 -z-2 transition-all duration-300"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 translate-y-1.5 scale-[0.98] rounded-3xl border border-sky-400/25 dark:border-sky-400/15 bg-sky-400/8 dark:bg-[#0c0e14]/65 backdrop-blur-md opacity-70 -z-1 transition-all duration-300"
              aria-hidden="true"
            />

            {/* Main Interactive Front Liquid Glass Card with True Move-to-Back 3D Animation */}
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={activeHobby.id}
                custom={direction}
                variants={{
                  enter: (dir: number) => ({
                    scale: 0.93,
                    y: dir > 0 ? 20 : -28,
                    opacity: 0,
                    filter: "blur(6px)",
                    zIndex: 1,
                  }),
                  center: {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    zIndex: 10,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 24,
                      mass: 0.8,
                    },
                  },
                  exit: (dir: number) => ({
                    // Physically lifts UP, tilts, then dives down into the BACK of the stack!
                    scale: [1, 1.04, 0.93],
                    y: dir > 0 ? [0, -56, 18] : [0, 56, -18],
                    rotate: dir > 0 ? [0, -3, 0] : [0, 3, 0],
                    zIndex: [10, 20, 0],
                    opacity: [1, 0.95, 0],
                    filter: ["blur(0px)", "blur(0px)", "blur(5px)"],
                    transition: {
                      duration: 0.55,
                      times: [0, 0.42, 1],
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex flex-col justify-between rounded-3xl border border-sky-400/30 dark:border-sky-400/20 bg-gradient-to-b from-sky-400/12 via-white/70 to-sky-500/10 dark:from-sky-500/12 dark:via-[#0c0e14]/85 dark:to-sky-950/25 p-5 sm:p-7 backdrop-blur-2xl shadow-[0_12px_40px_rgba(56,189,248,0.12),0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_25px_rgba(56,189,248,0.12)] ring-1 ring-sky-300/25 dark:ring-sky-400/15 overflow-hidden transition-colors duration-300 hover:border-sky-400/45 hover:shadow-[0_16px_48px_rgba(56,189,248,0.2)]"
              >
                {/* Specular Top-Light Reflection */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-32 rounded-t-3xl bg-gradient-to-b from-sky-300/30 via-white/10 to-transparent dark:from-sky-300/15 dark:via-transparent z-1"
                  aria-hidden="true"
                />

                {/* Dynamic Ambient Glow Behind Active Card */}
                <div
                  className={`pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-gradient-to-br ${activeHobby.glow} blur-3xl transition-all duration-700`}
                  aria-hidden="true"
                />

                {/* Top Bar: iOS Smart Stack Badge & Prev/Next Controls */}
                <div className="relative z-2 flex items-center justify-between border-b border-sky-400/15 dark:border-white/8 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-sky-600 dark:text-sky-400 uppercase font-semibold">
                      Hobby
                    </span>
                    <span className="rounded-md border border-sky-400/25 bg-sky-400/10 px-1.5 py-0.5 text-[9px] font-mono font-medium text-sky-600 dark:text-sky-300">
                      {`0${activeIndex + 1} / 0${total}`}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={prevCard}
                      aria-label="Previous hobby"
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-sky-400/25 dark:border-white/15 bg-sky-400/10 dark:bg-white/5 text-foreground/75 dark:text-neutral-200 transition-all hover:bg-sky-400/20 hover:scale-110 active:scale-95 cursor-pointer"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={nextCard}
                      aria-label="Next hobby"
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-sky-400/25 dark:border-white/15 bg-sky-400/10 dark:bg-white/5 text-foreground/75 dark:text-neutral-200 transition-all hover:bg-sky-400/20 hover:scale-110 active:scale-95 cursor-pointer"
                    >
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="relative z-2 py-3 flex-1 flex flex-col justify-center gap-3">
                  {/* Header Row: Big Stat & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground bg-gradient-to-r from-foreground via-foreground to-sky-500 bg-clip-text">
                        {activeHobby.stat}
                      </span>
                      <span className="text-[11px] font-mono font-medium rounded-full border border-sky-400/30 bg-sky-400/15 px-2.5 py-0.5 text-sky-600 dark:text-sky-300">
                        {activeHobby.badge[lang]}
                      </span>
                    </div>

                    <div className="rounded-2xl border border-sky-400/30 bg-sky-400/15 p-2.5 text-sky-500 dark:text-sky-300 shadow-[0_0_16px_rgba(56,189,248,0.25)] ring-1 ring-sky-300/30">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold tracking-tight text-foreground">
                      {activeHobby.title[lang]}
                    </h3>
                    <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-foreground/75 dark:text-neutral-300 line-clamp-3">
                      {activeHobby.description[lang]}
                    </p>
                  </div>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {activeHobby.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-sky-400/20 dark:border-white/10 bg-sky-400/8 dark:bg-white/5 px-2 py-0.5 text-[10.5px] font-mono text-sky-700 dark:text-sky-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar: Status Badge & Pagination Dots */}
                <div className="relative z-2 flex items-center justify-between border-t border-sky-400/15 dark:border-white/8 pt-3">
                  <span className="text-[11px] font-medium text-foreground/60 dark:text-neutral-400 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {activeHobby.status[lang]}
                  </span>

                  {/* Dot Indicators */}
                  <div className="flex items-center gap-1.5">
                    {hobbies.map((h, i) => (
                      <button
                        key={h.id}
                        type="button"
                        onClick={() => jumpToCard(i)}
                        aria-label={`Jump to ${h.stat}`}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          i === activeIndex
                            ? "w-6 bg-gradient-to-r from-sky-400 to-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                            : "w-2 bg-foreground/20 dark:bg-white/20 hover:bg-foreground/40 dark:hover:bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
