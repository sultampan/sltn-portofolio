"use client";

import {
  FolderGit2,
  Home,
  Lightbulb,
  Mail,
  Moon,
  Sun,
  User,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { useLanguage } from "@/lib/language-context";

function useIsMounted(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

interface DockItemProps {
  mouseX: MotionValue<number>;
  icon?: React.ComponentType<{ className?: string }> | undefined;
  label: string;
  href?: string | undefined;
  isActive?: boolean | undefined;
  isExternal?: boolean | undefined;
  onClick?: (() => void) | undefined;
  children?: ReactNode;
}

function DockItem({
  mouseX,
  icon: Icon,
  label,
  href,
  isActive = false,
  isExternal = false,
  onClick,
  children,
}: DockItemProps): ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-140, 0, 140], [40, 72, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 240, damping: 16 });

  const iconSizeSync = useTransform(distance, [-140, 0, 140], [18, 32, 18]);
  const iconSize = useSpring(iconSizeSync, { mass: 0.1, stiffness: 240, damping: 16 });

  const content = (
    <motion.div
      ref={ref}
      style={{ width }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative aspect-square flex items-center justify-center rounded-full cursor-pointer select-none transition-colors duration-150 ${
        isActive
          ? "border-2 border-sky-400 bg-sky-400/15 text-sky-400 dark:text-sky-300 shadow-[0_0_16px_rgba(56,189,248,0.35)] ring-1 ring-sky-400/30"
          : "border border-foreground/10 bg-foreground/5 text-foreground/80 hover:text-sky-400 dark:hover:text-sky-300 hover:border-sky-400/40 hover:bg-sky-400/10 shadow-xs"
      }`}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 2, scale: 0.9 }}
            transition={{ duration: 0.12 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-background/95 px-2 py-0.5 text-[11px] font-medium text-foreground shadow-md border border-foreground/10 whitespace-nowrap pointer-events-none backdrop-blur-md z-50"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>

      {Icon ? (
        <motion.div
          style={{ width: iconSize, height: iconSize }}
          className="flex items-center justify-center pointer-events-none"
        >
          <Icon className="h-full w-full" />
        </motion.div>
      ) : children ? (
        <motion.div
          style={{ width: iconSize, height: iconSize }}
          className="flex items-center justify-center pointer-events-none"
        >
          {children}
        </motion.div>
      ) : null}
    </motion.div>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="focus-ring rounded-full self-end"
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        aria-label={label}
        aria-current={isActive ? "page" : undefined}
        className="focus-ring rounded-full self-end"
      >
        {content}
      </Link>
    );
  }

  return <div className="self-end">{content}</div>;
}

export function Nav(): ReactNode {
  const pathname = usePathname();
  const { lang, toggleLang } = useLanguage();
  const mounted = useIsMounted();
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";
  const mouseX = useMotionValue(Infinity);

  const toggleTheme = (event?: React.MouseEvent): void => {
    const next = isDark ? "light" : "dark";

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const supportsViewTransitions =
      typeof document !== "undefined" &&
      typeof document.startViewTransition === "function";

    if (!supportsViewTransitions || prefersReducedMotion) {
      setTheme(next);
      return;
    }

    const rect = event?.currentTarget?.getBoundingClientRect();
    const cx = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const cy = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    const radius = Math.hypot(
      Math.max(cx, window.innerWidth - cx),
      Math.max(cy, window.innerHeight - cy)
    );

    const root = document.documentElement;
    root.style.setProperty("--theme-cx", `${cx}px`);
    root.style.setProperty("--theme-cy", `${cy}px`);
    root.style.setProperty("--theme-r", `${radius}px`);
    root.dataset.themeAnim = "1";

    const transition = document.startViewTransition(() => {
      setTheme(next);
    });

    transition.finished.finally(() => {
      delete root.dataset.themeAnim;
    });
  };

  const navItems: Array<{
    id: string;
    label: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    isActive?: boolean | undefined;
    isExternal?: boolean | undefined;
  }> = [
    {
      id: "home",
      label: lang === "id" ? "Beranda" : "Home",
      href: "/",
      icon: Home,
      isActive: pathname === "/",
    },
    {
      id: "about",
      label: lang === "id" ? "Tentang" : "About",
      href: "/about",
      icon: User,
      isActive: pathname === "/about",
    },
    {
      id: "skills",
      label: lang === "id" ? "Keahlian" : "Skills",
      href: "/skills",
      icon: Lightbulb,
      isActive: pathname === "/skills" || pathname.startsWith("/skills/"),
    },
    {
      id: "project",
      label: lang === "id" ? "Proyek" : "Project",
      href: "/projects",
      icon: FolderGit2,
      isActive: pathname === "/projects" || pathname.startsWith("/projects/"),
    },
    
    {
      id: "contact",
      label: lang === "id" ? "Kontak Saya" : "Contact Me",
      href: "#contact",
      icon: Mail,
    },
  ];

  return (
    <nav
      aria-label="Dock Navigation"
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
    >
      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex h-16 items-end gap-2.5 sm:gap-3 rounded-2xl border border-foreground/10 dark:border-white/10 bg-background/85 dark:bg-[#0c0e14]/85 px-3.5 pb-2.5 shadow-2xl dark:shadow-[0_15px_35px_rgba(0,0,0,0.65),0_0_20px_rgba(56,189,248,0.1)] backdrop-blur-2xl ring-1 ring-black/5 dark:ring-white/10"
      >
        {navItems.map((item) => (
          <DockItem
            key={item.id}
            mouseX={mouseX}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isActive={item.isActive}
            isExternal={item.isExternal}
          />
        ))}

        {/* Divider hairline */}
        <div className="mx-0.5 sm:mx-1 h-6 w-px bg-foreground/10 mb-2 self-end" aria-hidden="true" />

        {/* Language Switch Dock Item */}
        <DockItem
          mouseX={mouseX}
          label={
            lang === "id"
              ? "Ganti Bahasa (Sekarang: ID)"
              : "Switch Language (Current: EN)"
          }
          onClick={toggleLang}
        >
          <span className="text-xs font-bold tracking-tight text-sky-400 dark:text-sky-300">
            {lang === "id" ? "ID" : "EN"}
          </span>
        </DockItem>

        {/* Theme Toggle Dock Item */}
        <DockItem
          mouseX={mouseX}
          label={
            mounted
              ? isDark
                ? lang === "id"
                  ? "Mode Terang"
                  : "Light Mode"
                : lang === "id"
                  ? "Mode Gelap"
                  : "Dark Mode"
              : "Toggle Theme"
          }
          onClick={toggleTheme}
        >
          <div className="flex h-full w-full items-center justify-center">
            {mounted && isDark ? (
              <Sun className="h-full w-full text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
            ) : (
              <Moon className="h-full w-full" />
            )}
          </div>
        </DockItem>
      </motion.div>
    </nav>
  );
}
