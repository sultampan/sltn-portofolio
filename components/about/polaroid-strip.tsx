"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useSyncExternalStore, type ReactNode } from "react";
import { DottedPattern } from "@/components/ui/dotted-pattern";
import { useLanguage } from "@/lib/language-context";

export type Polaroid = {
  id: string;
  rotate: number;
  label: { id: string; en: string };
  badge?: string;
  image?: string;
};

// Kamu bisa langsung menambahkan path foto kamu di sini, contoh: image: "/photos/drone.jpg"
// Pastikan file foto ditaruh di dalam folder public/
const PHOTOS: Polaroid[] = [
  { id: "a", rotate: -7, label: { id: "GCS & Drone", en: "GCS & Drone" }, badge: "AVRO" },
  { id: "b", rotate: 5, label: { id: "Web Backend", en: "Web Backend" }, badge: "API" },
  { id: "c", rotate: -3, label: { id: "Machine Learning", en: "Machine Learning" }, badge: "ML" },
  { id: "d", rotate: 6, label: { id: "Mobile App", en: "Mobile App" }, badge: "App" },
  { id: "e", rotate: -5, label: { id: "Sistem Informasi", en: "Info Systems" }, badge: "Polinema" },
  { id: "f", rotate: 4, label: { id: "Full-Stack Dev", en: "Full-Stack Dev" }, badge: "Code" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function PolaroidCard({
  photo,
  index,
}: {
  photo: Polaroid;
  index: number;
}): ReactNode {
  const { lang } = useLanguage();
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 220, damping: 18, mass: 0.6 });
  const tx = useTransform(sx, (v) => `${v}px`);
  const ty = useTransform(sy, (v) => `${v}px`);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>): void => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const max = 18;
    const k = 0.25;
    mx.set(Math.max(-max, Math.min(max, dx * k)));
    my.set(Math.max(-max, Math.min(max, dy * k)));
  };

  const handleLeave = (): void => {
    mx.set(0);
    my.set(0);
  };

  const labelText = photo.label[lang] ?? photo.label.en;

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      initial={{ opacity: 0, y: -80, filter: "blur(18px)", rotate: photo.rotate }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotate: photo.rotate }}
      whileHover={{ scale: 1.06, zIndex: 30 }}
      transition={{
        duration: 0.9,
        delay: 0.05 + index * 0.08,
        ease: EASE,
      }}
      style={{
        x: tx,
        y: ty,
        rotate: photo.rotate,
      }}
      className="group relative flex flex-col justify-between aspect-[3/4.2] w-[clamp(6.2rem,11.5vw,9.5rem)] shrink-0 overflow-hidden rounded-2xl border-6 border-neutral-300/50 bg-white p-2 shadow-lg dark:border-white/12 dark:bg-[#0c0e14]/90 dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)] cursor-grab active:cursor-grabbing transition-all duration-300 hover:shadow-2xl dark:hover:border-sky-400/40 dark:hover:shadow-[0_0_24px_rgba(56,189,248,0.25)]"
    >
      <div className="relative h-[78%] w-full overflow-hidden rounded-xl bg-foreground/3">
        {photo.image ? (
          <Image
            src={photo.image}
            alt={labelText}
            fill
            sizes="(max-width: 640px) 120px, 160px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <DottedPattern className="relative h-full w-full overflow-hidden rounded-xl" />
        )}
        {photo.badge && (
          <span className="absolute top-1.5 right-1.5 rounded-md border border-sky-400/30 bg-sky-400/15 px-1.5 py-0.5 text-[9px] font-mono font-medium text-sky-600 dark:text-sky-300 backdrop-blur-md shadow-xs">
            {photo.badge}
          </span>
        )}
      </div>

      <div className="flex h-[20%] w-full items-center justify-center pt-1">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-tight text-foreground/75 truncate text-center group-hover:text-sky-500 dark:group-hover:text-sky-300 transition-colors">
          {labelText}
        </span>
      </div>
    </motion.div>
  );
}

export function PolaroidStrip(): ReactNode {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return <div aria-hidden="true" className="h-[clamp(8rem,15vw,12rem)] w-full" />;
  }

  return (
    <div className="flex flex-wrap w-full items-center justify-center gap-2 px-4 sm:gap-2.5 sm:px-8">
      {PHOTOS.map((photo, i) => (
        <PolaroidCard key={photo.id} photo={photo} index={i} />
      ))}
    </div>
  );
}
