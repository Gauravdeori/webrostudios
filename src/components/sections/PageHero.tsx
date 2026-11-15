import type { ReactNode } from "react";
export function PageHero({
  label,
  title,
  subtitle,
  children,
}: {
  label: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-background py-16 md:py-24">
      <div
        aria-hidden="true"
        className="absolute right-10 top-10 h-6 w-6 animate-float-px border-2 border-ink bg-lime"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-32 h-4 w-4 animate-float-px bg-slate-light [animation-delay:1.5s]"
      />
      <div className="mx-auto max-w-[1200px] animate-page-in px-5 md:px-8">
        <p className="mb-4 inline-block border-2 border-ink bg-surface px-3 py-1 font-mono text-sm font-bold text-ink">
          {label}
        </p>
        <h1 className="glow max-w-4xl text-[42px] font-bold leading-[1.05] text-ink md:text-6xl">
          {title}
        </h1>
        <p className="cursor-blink mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
}
