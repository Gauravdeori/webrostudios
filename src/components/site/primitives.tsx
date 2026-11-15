import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Code,
  Smartphone,
  PenTool,
  ShoppingCart,
  Rocket,
  Lightbulb,
  Zap,
  Package,
  IndianRupee,
  Cpu,
  Search,
  LifeBuoy,
  TrendingUp,
  GraduationCap,
  ShoppingBag,
  Bed,
  Utensils,
  HeartPulse,
  HandHeart,
  User,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  code: Code,
  smartphone: Smartphone,
  "pen-tool": PenTool,
  "shopping-cart": ShoppingCart,
  rocket: Rocket,
  lightbulb: Lightbulb,
  zap: Zap,
  package: Package,
  "indian-rupee": IndianRupee,
  cpu: Cpu,
  search: Search,
  "life-buoy": LifeBuoy,
  "trending-up": TrendingUp,
  "graduation-cap": GraduationCap,
  "shopping-bag": ShoppingBag,
  bed: Bed,
  utensils: Utensils,
  "heart-pulse": HeartPulse,
  "hand-heart": HandHeart,
  user: User,
};
export function Icon({ name, className }: { name: string; className?: string }) {
  const I = icons[name] ?? Code;
  return <I className={className} aria-hidden="true" />;
}

export function useInView<T extends Element>(threshold = 0.12) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("reveal", inView && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function CountUp({
  to,
  suffix = "",
  duration = 1600,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.round(to * (1 - Math.pow(1 - p, 4))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

type Tone = "light" | "navy" | "white";
/** A homepage/page section. Pass `label` to list it in the section rail & navbar scroll-spy. */
export function Section({
  id,
  label,
  tone = "light",
  children,
  className,
}: {
  id?: string;
  label?: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      data-section={label ? id : undefined}
      data-label={label}
      className={cn(
        "relative scroll-mt-28 py-14 md:py-28",
        tone === "light" && "bg-background text-ink",
        tone === "white" && "bg-surface text-ink",
        tone === "navy" && "bg-navy text-navy-foreground",
        className,
      )}
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  label,
  title,
  subtitle,
  tone = "light",
  center,
}: {
  label: string;
  title: ReactNode;
  subtitle?: string;
  tone?: Tone;
  center?: boolean;
}) {
  const navy = tone === "navy";
  return (
    <Reveal className={cn("mb-12 max-w-3xl", center && "mx-auto text-center")}>
      <p
        className={cn(
          "mb-4 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em]",
          navy ? "text-lime" : "text-muted-foreground",
        )}
      >
        <span
          aria-hidden="true"
          className={cn("inline-block h-2 w-2", navy ? "bg-lime" : "bg-ink")}
        />
        {label.replace(/^\/\/\s*/, "").replace(/^\d+\s*—\s*/, "")}
      </p>
      <h2 className="glow text-4xl font-bold leading-[1.05] md:text-[56px]">{title}</h2>
      {subtitle && (
        <p
          className={cn(
            "cursor-blink mt-5 text-base md:text-lg",
            navy ? "text-slate-light" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export function PixelDivider({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("px-divider w-full opacity-80", className)} />;
}

export function Logo({ inverted }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <span
        className={cn(
          "relative grid h-10 w-10 shrink-0 place-items-center border-2 font-pixel text-xl font-bold",
          inverted
            ? "border-lime bg-navy-soft text-navy-foreground"
            : "border-ink bg-navy text-navy-foreground dark:border-lime",
        )}
      >
        W<span className="absolute right-1 top-1 h-2 w-2 bg-lime" />
      </span>
      <span className="leading-none">
        <span className="block font-pixel text-xl font-bold">webro</span>
        <span className="block font-mono text-[11px] tracking-[0.3em]">studios</span>
      </span>
    </span>
  );
}

export function Chip({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-block border-2 px-2 py-0.5 font-mono text-xs font-bold",
        tone === "navy" ? "border-lime text-lime" : "border-ink bg-surface text-ink",
      )}
    >
      {children}
    </span>
  );
}

export function PixelAvatar({ initials, className }: { initials: string; className?: string }) {
  return (
    <div
      className={cn(
        "relative grid h-20 w-20 shrink-0 place-items-center border-2 border-navy bg-lime font-pixel text-2xl font-bold text-navy",
        className,
      )}
      aria-hidden="true"
    >
      <span className="absolute left-0 top-0 h-3 w-3 bg-navy" />
      <span className="absolute bottom-0 right-0 h-3 w-3 bg-navy" />
      {initials}
    </div>
  );
}

const host = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

/** Retro browser window. With `shot` it shows a live screenshot from /public/projects. */
export function BrowserFrame({
  title,
  url,
  shot,
  hue = "lime",
  children,
  priority,
  className,
}: {
  title: string;
  url?: string;
  shot?: string;
  hue?: string;
  children?: ReactNode;
  priority?: boolean;
  className?: string;
}) {
  const bg =
    hue === "lime"
      ? "bg-lime text-navy"
      : hue === "navy"
        ? "bg-navy text-lime"
        : "bg-slate-light text-navy";
  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="flex items-center gap-1.5 border-b-2 border-ink bg-surface px-3 py-2">
        <span className="h-2.5 w-2.5 bg-ink" />
        <span className="h-2.5 w-2.5 border border-ink bg-lime" />
        <span className="h-2.5 w-2.5 bg-slate-px" />
        <span className="ml-2 min-w-0 flex-1 truncate border border-ink/30 bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
          {url ? host(url) : `${title.toLowerCase().replace(/\s/g, "")}.app`}
        </span>
      </div>
      {shot ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={`/projects/${shot}-sm.webp`}
            srcSet={`/projects/${shot}-sm.webp 800w, /projects/${shot}.webp 1600w`}
            sizes="(min-width: 1024px) 600px, 100vw"
            alt={`Screenshot of the live ${title} website`}
            width={1600}
            height={1000}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
          />
        </div>
      ) : (
        <div
          className={cn(
            "relative grid aspect-[16/10] place-items-center transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105",
            bg,
          )}
        >
          <div className="absolute inset-4 grid grid-cols-6 gap-1 opacity-20">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="bg-current" style={{ opacity: (i * 7) % 3 ? 0.4 : 1 }} />
            ))}
          </div>
          <span className="relative font-pixel text-3xl font-bold">{children ?? title}</span>
        </div>
      )}
    </div>
  );
}

/** Retro phone frame around a mobile screenshot. */
export function PhoneFrame({ title, shot }: { title: string; shot: string }) {
  return (
    <div className="mx-auto w-full max-w-[260px] border-2 border-ink bg-navy p-2 shadow-[var(--shadow-px-lg)]">
      <div className="mx-auto mb-2 h-1.5 w-12 bg-slate-px" />
      <div className="aspect-[390/844] overflow-hidden border-2 border-navy-soft bg-muted">
        <img
          src={`/projects/${shot}-mobile.webp`}
          alt={`Mobile screenshot of ${title}`}
          width={600}
          height={1298}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="mx-auto mt-2 h-3 w-3 border-2 border-slate-px" />
    </div>
  );
}
