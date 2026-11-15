import { whyUs } from "@/data/content";
import { Icon, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import aboutImg from "@/assets/about-dev.jpg";

export function WhyUs() {
  return (
    <Section id="why" label="Why Us" tone="light">
      <SectionHeading
        label="// 04 — Why Webro"
        title={
          <>
            Why Teams <span className="hl">Choose</span> Webro
          </>
        }
        subtitle="Small studio. Big care. Real results."
      />
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="text-muted-foreground">
            We're a hungry, student-led team that treats every project like our own product. You get
            modern tech, honest pricing and people who actually pick up the phone.
          </p>
          <img
            src={aboutImg}
            alt="Illustration of a developer with headphones coding on a W laptop"
            width={1024}
            height={1024}
            loading="lazy"
            decoding="async"
            className="mt-6 w-full max-w-sm border-2 border-ink shadow-[var(--shadow-px)]"
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 60}>
              <div className="px-card px-card-hover h-full p-5">
                <span className="grid h-11 w-11 place-items-center border-2 border-navy bg-lime text-navy">
                  <Icon name={w.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-ink">{w.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
