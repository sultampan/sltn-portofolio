"use client";

import {
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { ContactCardCtas } from "./contact-card-ctas";
import { FadeIn } from "@/components/ui/motion-primitives";
import { ShaderFlow } from "../shaders/shader-flow";
import { portfolioData, resolveLocalized, type SocialLinkItem } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

const CARD_FADE_MASK =
  "radial-gradient(ellipse 90% 110% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0.15) 100%)";

export function ContactCard(): ReactNode {
  const { personal, socials, site } = portfolioData;
  const { lang } = useLanguage();

  const title = lang === "id" ? "Mari terhubung" : "Let's connect";
  const desc =
    lang === "id"
      ? "Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang kolaborasi. Hubungi saya kapan saja!"
      : "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Just reach out!";
  const footerTagline = resolveLocalized(site.footerTagline, lang);

  return (
    <section id="contact" className="mx-auto my-12 w-full max-w-275 px-6 sm:my-20 sm:px-10 scroll-mt-28">
      <FadeIn>
        <div className="relative w-full overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
          <div className="relative w-full overflow-hidden rounded-[1.6rem]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-25"
              style={{
                WebkitMaskImage: CARD_FADE_MASK,
                maskImage: CARD_FADE_MASK,
              }}
            >
              <ShaderFlow
                scale={3}
                brightness={3}
                className="absolute inset-0 h-full w-full grayscale"
              />
            </div>

            <div className="relative grid gap-8 p-6 sm:gap-10 sm:p-7 md:grid-cols-[1.2fr_1fr] md:items-stretch md:gap-6 md:p-6">
              <div className="flex flex-col gap-5">
                <h2 className="font-serif text-[2.25rem] font-medium leading-[1.05] tracking-tight text-foreground sm:text-[2.75rem] lg:text-[3.25rem]">
                  {title}
                </h2>
                <p className="max-w-[29ch] text-[18px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[22px] mb-6">
                  {desc}
                </p>
                <ContactCardCtas />
              </div>

              <div className="border-foreground/8 flex flex-col items-center justify-center gap-6 rounded-[1.1rem] border bg-background p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-center gap-3 opacity-75">
                  {socials.map((social) => (
                    <SocialButton key={social.name} social={social} />
                  ))}
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <p className="text-[13px] tracking-tight text-foreground/70">
                    {new Date().getFullYear()} &copy; {personal.name}
                  </p>
                  <p className="text-[12px] tracking-tight text-foreground/45">
                    {footerTagline || "Built with Next.js"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function SocialButton({ social }: { social: SocialLinkItem }): ReactNode {
  const isExternal = social.url.startsWith("http");
  const props = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  const renderIcon = () => {
    switch (social.type) {
      case "mail":
        return <Mail className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />;
      case "github":
        return <Github className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />;
      case "linkedin":
        return <Linkedin className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />;
      case "x":
        return (
          <Image
            src="/x.svg"
            alt=""
            width={14}
            height={14}
            aria-hidden="true"
            className="max-h-[14px] max-w-[14px] object-contain dark:invert"
          />
        );
      case "instagram":
        return <Instagram className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />;
      default:
        return <Globe className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />;
    }
  };

  return (
    <Link
      href={social.url}
      aria-label={social.name}
      className="border-foreground/8 hover:border-sky-400/40 focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-background text-foreground/70 transition-all duration-200 hover:text-sky-400 dark:hover:text-sky-300 hover:bg-sky-400/5 shadow-xs"
      {...props}
    >
      {renderIcon()}
    </Link>
  );
}
