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

      {/* Luminous Azure Flow Waves with Cyan Specular Highlights */}
      <div className="absolute inset-0 opacity-45 dark:opacity-60">
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
