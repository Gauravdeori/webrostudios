import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { stats } from "@/data/content";
import { CountUp, Reveal, Section } from "@/components/site/primitives";
import aboutImg from "@/assets/about-dev.jpg";

export function AboutStudio({ label = "// 09 — About" }: { label?: string }) {
  return (
    <Section id="about" label="About" tone="light">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr_0.8fr]">
        <Reveal>
          <img
            src={aboutImg}
            alt="Illustration of a developer at a W laptop"
            width={1024}
            height={1024}
            loading="lazy"
            decoding="async"
            className="w-full border-2 border-ink shadow-[var(--shadow-px-lg)]"
          />
        </Reveal>
        <Reveal delay={80}>
          <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <span aria-hidden="true" className="inline-block h-2 w-2 bg-ink" />
            {label.replace(/^\/\/\s*/, "")}
          </p>
          <h2 className="glow text-4xl font-bold text-ink md:text-5xl">
            The <span className="hl">Webro</span> Studio
          </h2>
          <p className="mt-5 text-muted-foreground">
            We're a student-led studio from Dibrugarh, Assam — and a proud part of THEPOSTERZZ. We
            started by building for ourselves, and now build for startups, brands and institutions
            across India.
          </p>
          <p className="mt-3 text-muted-foreground">
            Our focus is simple: web experiences, tools and platforms with real impact — fast,
            honest and built to last.
          </p>
          <Link
            to="/about"
            className="mt-5 inline-flex items-center gap-2 font-mono text-sm font-bold text-ink underline underline-offset-4"
          >
            Our Story <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <Reveal delay={160}>
          <dl className="divide-y-2 divide-ink border-2 border-ink bg-surface">
            {stats.map((s) => (
              <div key={s.label} className="p-4">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-pixel text-4xl font-bold text-ink">
                  <CountUp to={s.value} suffix={s.suffix} />
                </dd>
                <dd className="font-mono text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
