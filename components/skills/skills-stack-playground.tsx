"use client";

import { RotateCcw, Sparkles } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { portfolioData, type TechStackItem as Chip } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

const CHIPS: Chip[] = portfolioData.techStack;

const CHIP_RADIUS = 14;
const ICON_RADIUS = 10;
const WALL_PAD = 16;

type ChipState = {
  chip: Chip;
  body: Matter.Body;
  width: number;
  height: number;
};

export function SkillsStackPlayground(): ReactNode {
  const { lang } = useLanguage();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);
  const chipRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void (async () => {
      const Matter = await import("matter-js");
      if (cancelled) return;

      const {
        Engine,
        Runner,
        World,
        Bodies,
        Body,
        Mouse,
        MouseConstraint,
        Events,
      } = Matter;

      const measureChildren = Array.from(measure.children) as HTMLElement[];
      const dims = measureChildren.map((el) => {
        const r = el.getBoundingClientRect();
        return { w: Math.max(85, r.width), h: Math.max(30, r.height) };
      });

      let width = container.clientWidth;
      let height = container.clientHeight;

      const engine = Engine.create();
      engine.gravity.y = 1;
      const world = engine.world;

      const wallThickness = 400;
      const floor = Bodies.rectangle(
        width / 2,
        height - WALL_PAD + wallThickness / 2,
        width * 3,
        wallThickness,
        { isStatic: true }
      );
      const leftWall = Bodies.rectangle(
        WALL_PAD - wallThickness / 2,
        height / 2,
        wallThickness,
        height * 4,
        { isStatic: true }
      );
      const rightWall = Bodies.rectangle(
        width - WALL_PAD + wallThickness / 2,
        height / 2,
        wallThickness,
        height * 4,
        { isStatic: true }
      );
      World.add(world, [floor, leftWall, rightWall]);

      const states: ChipState[] = CHIPS.map((chip, i) => {
        const dim = dims[i] ?? { w: 125, h: 36 };
        const { w, h } = dim;
        const halfW = w / 2;
        const minX = WALL_PAD + halfW + 4;
        const maxX = width - WALL_PAD - halfW - 4;
        const x = minX + Math.random() * Math.max(1, maxX - minX);
        const y = -80 - i * 55 - Math.random() * 100;
        const body = Bodies.rectangle(x, y, w, h, {
          chamfer: { radius: CHIP_RADIUS },
          restitution: 0.38,
          friction: 0.5,
          frictionAir: 0.02,
          density: 0.0018,
          angle: (Math.random() - 0.5) * 0.4,
        });
        World.add(world, body);
        return { chip, body, width: w, height: h };
      });

      const mouse = Mouse.create(container);

      const wheelTarget = mouse.element as HTMLElement & {
        mousewheel?: EventListener;
      };
      if (wheelTarget.mousewheel) {
        wheelTarget.removeEventListener("wheel", wheelTarget.mousewheel);
        wheelTarget.removeEventListener("DOMMouseScroll", wheelTarget.mousewheel);
      }

      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.22,
          damping: 0.18,
          render: { visible: false },
        },
      });
      World.add(world, mouseConstraint);

      Events.on(mouseConstraint, "startdrag", () => {
        container.style.cursor = "grabbing";
      });
      Events.on(mouseConstraint, "enddrag", () => {
        container.style.cursor = "grab";
      });

      const runner = Runner.create();
      Runner.run(runner, engine);

      let raf = 0;
      const tick = (): void => {
        for (let i = 0; i < states.length; i++) {
          const s = states[i];
          const el = chipRefs.current[i];
          if (!s || !el) continue;
          const { x, y } = s.body.position;
          el.style.transform = `translate3d(${x - s.width / 2}px, ${y - s.height / 2}px, 0) rotate(${s.body.angle}rad)`;
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);

      const onResize = (): void => {
        const newW = container.clientWidth;
        const newH = container.clientHeight;
        if (newW === width && newH === height) return;
        Body.setPosition(floor, {
          x: newW / 2,
          y: newH - WALL_PAD + wallThickness / 2,
        });
        Body.setPosition(leftWall, {
          x: WALL_PAD - wallThickness / 2,
          y: newH / 2,
        });
        Body.setPosition(rightWall, {
          x: newW - WALL_PAD + wallThickness / 2,
          y: newH / 2,
        });
        width = newW;
        height = newH;
      };

      window.addEventListener("resize", onResize);

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", onResize);
        Runner.stop(runner);
        Engine.clear(engine);
        World.clear(world, false);
      };
    })();

    return () => {
      cancelled = true;
      if (cleanup) cleanup();
    };
  }, [resetKey]);

  return (
    <section className="mx-auto w-full max-w-275 px-6 pb-20 sm:px-10 sm:pb-28">
      <div className="rounded-3xl border border-foreground/10 bg-foreground/2 p-6 sm:p-10 backdrop-blur-xl shadow-lg">
        {/* Header inside card */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-foreground/10">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/25 bg-sky-400/10 px-2.5 py-0.5 text-xs font-mono text-sky-600 dark:text-sky-400 mb-2 shadow-[0_0_10px_rgba(56,189,248,0.15)]">
              <Sparkles className="h-3 w-3 text-sky-400" />
              <span>{lang === "id" ? "INTERAKTIF" : "INTERACTIVE"}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
              {lang === "id" ? "Permainan Stack Physics" : "Stack Physics Playground"}
            </h2>
            <p className="text-xs sm:text-sm text-foreground/60 mt-1">
              {lang === "id"
                ? "Seret, lempar, dan mainkan teknologi favorit yang jatuh dengan gravitasi nyata!"
                : "Drag, toss, and bounce my favorite technologies with real gravity physics!"}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setResetKey((k) => k + 1)}
            className="self-start sm:self-auto inline-flex items-center gap-2 rounded-xl border border-foreground/15 bg-background px-4 py-2 text-xs font-mono font-medium text-foreground transition-all duration-200 hover:border-sky-400/50 hover:bg-sky-400/5 hover:text-sky-400 active:scale-95 shadow-xs cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>{lang === "id" ? "Jatuhkan Ulang" : "Drop Again"}</span>
          </button>
        </div>

        {/* Hidden measurement container */}
        <div
          ref={measureRef}
          aria-hidden="true"
          className="pointer-events-none absolute -top-[9999px] left-0 flex flex-wrap gap-2 opacity-0"
        >
          {CHIPS.map((chip) => (
            <div key={chip.label} className="shrink-0">
              <ChipPill chip={chip} />
            </div>
          ))}
        </div>

        {/* Physics viewport */}
        <div
          ref={containerRef}
          className="relative h-80 sm:h-96 md:h-[440px] w-full overflow-hidden rounded-2xl border border-foreground/10 bg-background/50 cursor-grab select-none shadow-inner"
        >
          {CHIPS.map((chip, i) => (
            <div
              key={`${resetKey}-${chip.label}`}
              ref={(el) => {
                chipRefs.current[i] = el;
              }}
              data-stack-chip
              className="pointer-events-none absolute top-0 left-0 will-change-transform"
              style={{ transform: "translate3d(-9999px, -9999px, 0)" }}
            >
              <ChipPill chip={chip} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChipPill({ chip }: { chip: Chip }): ReactNode {
  return (
    <div
      className="dark:ring-1 dark:ring-white/15 inline-flex items-center gap-2 p-1.5 pr-3 text-[14px] sm:text-[15px] font-medium tracking-tight shadow-md"
      style={{
        backgroundColor: chip.bg,
        color: chip.fg,
        borderRadius: `${CHIP_RADIUS}px`,
      }}
    >
      <span
        className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center bg-white/95"
        style={{ borderRadius: `${ICON_RADIUS}px` }}
        aria-hidden="true"
      >
        <img
          src={chip.iconUrl ?? `https://cdn.simpleicons.org/${chip.slug}`}
          alt=""
          width={18}
          height={18}
          className="h-4.5 w-4.5 sm:h-5 sm:w-5 object-contain"
          draggable={false}
        />
      </span>
      <span>{chip.label}</span>
    </div>
  );
}
