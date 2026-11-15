import { industries } from "@/data/content";
import { Icon, Reveal, Section, SectionHeading } from "@/components/site/primitives";

export function Industries() {
  return (
    <Section id="industries" label="Industries" tone="light">
      <SectionHeading
        label="// 07 — Industries"
        title={
          <>
            Industries We <span className="hl">Serve</span>
          </>
        }
        subtitle="From classrooms to cake shops."
      />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {industries.map((x, i) => (
          <Reveal key={x.title} delay={i * 40}>
            <div className="px-card px-card-hover flex h-full flex-col items-start gap-3 p-4">
              <Icon name={x.icon} className="h-6 w-6 text-ink" />
              <p className="text-sm font-bold text-ink">{x.title}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
