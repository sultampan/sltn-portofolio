import type { ReactNode } from "react";

import { ShaderFlow } from "../shaders/shader-flow";

export function PageBackdrop(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Subtle Specular Ambient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.12),transparent_70%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.08),transparent_70%)]" />

      {/* Mobile & Tablet Optimized Lightweight Ambient Glow (0% GPU overhead, locked 120 FPS on iPad & Phones) */}
      <div className="lg:hidden absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(56,189,248,0.22),transparent_70%)] dark:bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(56,189,248,0.18),transparent_70%)]" />
      <div className="lg:hidden absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.1),transparent_50%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.1),transparent_50%)]" />

      {/* Desktop-Only Luminous Azure Flow Waves with Cyan Specular Highlights */}
      <div className="hidden lg:block absolute inset-0 opacity-45 dark:opacity-60">
        <ShaderFlow
          brightness={1.8}
          iterations={11}
          flowSpeed={[0, 0.07]}
          scale={5.0}
          colorLowA={[0.06, 0.24, 0.58]} // Rich Deep Azure / Sapphire
          colorHighA={[0.22, 0.74, 0.97]} // Luminous Frost Cyan Edge
          fadeRx={1.5}
          fadeRy={0.7}
        />
      </div>
    </div>
  );
}
