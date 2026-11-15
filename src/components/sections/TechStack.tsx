import { stack } from "@/data/content";
import { Reveal, Section, SectionHeading } from "@/components/site/primitives";

export function TechStack() {
  return (
    <Section id="stack" label="Stack" tone="navy">
      <SectionHeading
        tone="navy"
        label="// 06 — Stack"
        title={
          <>
            Tools We <span className="hl">Build</span> With
          </>
        }
        subtitle="Battle-tested tools, picked for each project."
      />
      <div className="space-y-6">
        {stack.map((g, gi) => (
          <Reveal
            key={g.group}
            delay={gi * 60}
            className="grid gap-3 md:grid-cols-[140px_1fr] md:items-center"
          >
            <p className="font-pixel text-lg font-bold text-lime">{g.group}</p>
            <ul className="flex flex-wrap gap-3">
              {g.items.map((t) => (
                <li
                  key={t}
                  title={`${g.group}: ${t}`}
                  className="notch cursor-default border-2 border-slate-px bg-navy-soft px-4 py-2.5 font-mono text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:border-lime hover:bg-lime hover:text-navy"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
