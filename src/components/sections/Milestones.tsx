import { milestones } from "@/data/content";
import { Reveal, Section, SectionHeading } from "@/components/site/primitives";

export function Milestones({ label = "// 11 — Milestones" }: { label?: string }) {
  return (
    <Section id="milestones" label="Milestones" tone="light">
      <SectionHeading
        label={label}
        title={
          <>
            Achievements & <span className="hl">Community</span>
          </>
        }
        subtitle="Wins, launches and the people we build with."
      />
      <ol className="-mx-5 flex snap-x gap-5 overflow-x-auto px-5 pb-6 [scrollbar-width:thin]">
        {milestones.map((m, i) => (
          <li key={m.title} className="w-64 shrink-0 snap-start">
            <Reveal delay={i * 70} className="h-full">
              <div className="px-card px-card-hover h-full p-5">
                <p className="text-3xl" aria-hidden="true">
                  {m.icon}
                </p>
                <p className="mt-3 font-pixel text-xs text-muted-foreground">
                  #{String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-lg font-bold leading-tight text-ink">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
