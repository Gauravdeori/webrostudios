import { process } from "@/data/content";
import { Icon, Reveal, Section, SectionHeading } from "@/components/site/primitives";

export function Process() {
  return (
    <Section id="process" label="Process" tone="white">
      <SectionHeading
        label="// 05 — Process"
        title={
          <>
            How We <span className="hl">Work</span>
          </>
        }
        subtitle="Five simple steps from idea to growth."
      />
      <ol className="relative grid gap-8 md:grid-cols-5 md:gap-4">
        <div
          aria-hidden="true"
          className="absolute left-6 top-0 h-full border-l-4 border-dashed border-lime md:left-0 md:top-6 md:h-0 md:w-full md:border-l-0 md:border-t-4"
        />
        {process.map((s, i) => (
          <Reveal key={s.n} delay={i * 120}>
            <li className="relative flex gap-4 md:block">
              <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center border-2 border-navy bg-lime text-navy shadow-[var(--shadow-px)]">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <div className="md:mt-5">
                <p className="font-pixel text-sm text-muted-foreground">{s.n}</p>
                <h3 className="text-2xl font-bold text-ink">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                <p className="mt-2 inline-block bg-navy px-2 py-0.5 font-mono text-xs text-lime">
                  ⏱ {s.time}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
