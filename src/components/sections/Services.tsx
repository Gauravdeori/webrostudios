import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/content";
import { Icon, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <Section id="services" label="Services" tone="navy">
      <SectionHeading
        tone="navy"
        label="// 01 — Services"
        title={
          <>
            What We <span className="hl">Build</span>
          </>
        }
        subtitle="End-to-end digital solutions, from idea to launch."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 70}>
            <article
              className={cn(
                "notch group flex h-full flex-col border-2 p-6 transition-all duration-300 ease-out hover:-translate-y-1",
                i === 0
                  ? "border-lime bg-lime text-navy"
                  : "border-slate-px bg-navy-soft text-navy-foreground hover:border-lime hover:bg-lime hover:text-navy",
              )}
            >
              <span className="grid h-12 w-12 place-items-center border-2 border-current transition-transform duration-300 group-hover:rotate-6">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm opacity-90">{s.desc}</p>
              <p className="mt-4 font-mono text-xs font-bold uppercase tracking-wider opacity-80">
                What you get
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                {s.points.map((p) => (
                  <li key={p}>▪ {p}</li>
                ))}
              </ul>
              <Link
                to="/services"
                hash={s.slug}
                className="mt-auto inline-flex items-center gap-2 pt-5 font-mono text-sm font-bold"
              >
                Learn more{" "}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
