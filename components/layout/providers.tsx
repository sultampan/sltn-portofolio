"use client";

import { ReducedMotionProvider } from "@/lib/motion";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/language-context";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }): ReactNode {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        <ReducedMotionProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ReducedMotionProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
