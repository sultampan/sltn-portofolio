import { CertificatesSection } from "@/components/skills/certificates-section";
import { SkillsHero } from "@/components/skills/skills-hero";
import { SkillsStackPlayground } from "@/components/skills/skills-stack-playground";
import { SkillsToolkitMarquee } from "@/components/skills/skills-toolkit-marquee";
import { WhatIDo } from "@/components/skills/what-i-do";
import { portfolioData } from "@/data/portfolio";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Skills & Experience",
  description: `Technical skills, programming stack, and verified certificates of ${portfolioData.personal.name}.`,
  path: "/skills",
});

export default function SkillsPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      {/* 1. Header with Title & Short Description */}
      <SkillsHero />

      {/* 2. MY TOOLKIT: Dual Infinite Marquee with Level Badges */}
      <SkillsToolkitMarquee />

      {/* 3. Interactive Drag & Drop Matter.js Stack Chip Playground (Directly below My Toolkit) */}
      <SkillsStackPlayground />

      {/* 4. "What I Do" Domains (Backend, Mobile, UAV GCS, Machine Learning) */}
      <WhatIDo />

      {/* 5. Certificates & Achievements Showcase (Bootcamp, Seminar, Competition) */}
      <CertificatesSection />

      {/* Dock navigation bottom spacing */}
      <div className="h-16 sm:h-24" />
    </main>
  );
}
