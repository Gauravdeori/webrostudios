import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/content";
import {
  BrowserFrame,
  CountUp,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/site/primitives";

export function CaseStudy({
  slug = "theposterzz",
  label = "// 03 — Case Study",
}: {
  slug?: string;
  label?: string;
}) {
  const p = projects.find((x) => x.slug === slug) ?? projects[0]!;
  return (
    <Section id="case-study" label="Case Study" tone="navy">
      <SectionHeading
        tone="navy"
        label={label}
        title={
          <>
            {p.title}: <span className="hl">{p.solution.split(" with ")[0]}</span>
          </>
        }
      />
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <a
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="group block border-2 border-lime bg-surface shadow-[8px_8px_0_var(--lime)] transition-transform duration-300 hover:-translate-y-1"
            aria-label={`Open ${p.title} live site`}
          >
            <BrowserFrame title={p.title} url={p.url} shot={p.shot} />
          </a>
        </Reveal>
        <Reveal delay={100}>
          <dl className="space-y-4">
            {(
              [
                ["Client", p.client],
                ["Problem", p.problem],
                ["Solution", p.solution],
              ] as const
            ).map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-xs font-bold tracking-widest text-lime">
                  {k.toUpperCase()}
                </dt>
                <dd className="mt-1 text-slate-light">{v}</dd>
              </div>
            ))}
          </dl>
          {p.results && (
            <div className="mt-6 grid grid-cols-3 gap-3">
              {p.results.map((r) => (
                <div key={r.label} className="border-2 border-slate-px p-3 text-center">
                  <p className="font-pixel text-3xl font-bold text-lime">
                    <CountUp to={r.value} suffix={r.suffix} />
                  </p>
                  <p className="mt-1 text-[11px] text-slate-light">{r.label}</p>
                </div>
              ))}
            </div>
          )}
          <div className="mt-6 flex flex-wrap gap-5">
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="inline-flex items-center gap-2 font-mono text-sm font-bold text-lime hover:underline"
            >
              Read full case study <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm font-bold text-navy-foreground hover:text-lime hover:underline"
            >
              Visit live site <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
