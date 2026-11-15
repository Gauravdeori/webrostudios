import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/content";
import {
  BrowserFrame,
  Chip,
  CountUp,
  PhoneFrame,
  Reveal,
  Section,
} from "@/components/site/primitives";
import { PageHero } from "@/components/sections/PageHero";
import { Cta } from "@/components/sections/Cta";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const t = loaderData
      ? `${loaderData.project.title} — Case Study | Webro Studios`
      : "Project not found | Webro Studios";
    const d = loaderData?.project.desc ?? "This project could not be found.";
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  component: CasePage,
});

function CasePage() {
  const { project: p } = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length] ?? p;
  return (
    <>
      <PageHero
        label={`// Case Study — ${p.category}`}
        title={<span className="hl">{p.title}</span>}
        subtitle={p.desc}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild variant="px" size="px">
            <a href={p.url} target="_blank" rel="noreferrer">
              Visit live site <ExternalLink />
            </a>
          </Button>
          <Button asChild variant="pxOutline" size="px">
            <Link to="/work">
              <ArrowLeft /> All projects
            </Link>
          </Button>
        </div>
      </PageHero>
      <Section id="overview" label="Overview" tone="white">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="px-card px-card-hover group block"
              aria-label={`Open ${p.title} live site`}
            >
              <BrowserFrame title={p.title} url={p.url} shot={p.shot} priority />
            </a>
          </Reveal>
          <Reveal delay={80}>
            <dl className="space-y-5">
              {(
                [
                  ["Client", p.client],
                  ["Problem", p.problem],
                  ["Solution", p.solution],
                ] as const
              ).map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-xs font-bold tracking-widest text-muted-foreground">
                    {k.toUpperCase()}
                  </dt>
                  <dd className="mt-1 text-ink">{v}</dd>
                </div>
              ))}
              <div>
                <dt className="font-mono text-xs font-bold tracking-widest text-muted-foreground">
                  TECH STACK
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs font-bold tracking-widest text-muted-foreground">
                  LIVE AT
                </dt>
                <dd className="mt-1">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 break-all font-bold text-ink underline underline-offset-4"
                  >
                    {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}{" "}
                    <ExternalLink className="h-4 w-4 shrink-0" />
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Section>
      <Section id="screens" label="Screens" tone="light">
        <h2 className="mb-10 text-4xl font-bold text-ink">
          Live <span className="hl">Screens</span>
        </h2>
        <div className="grid items-start gap-10 md:grid-cols-[1fr_260px]">
          <Reveal className="space-y-6">
            <div className="px-card">
              <BrowserFrame title={p.title} url={p.url} shot={p.shot} />
            </div>
            <div className="px-card p-6">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Highlights
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-ink">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-ink" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <PhoneFrame title={p.title} shot={p.shot} />
            <p className="mt-4 text-center font-mono text-xs text-muted-foreground">Mobile view</p>
          </Reveal>
        </div>
      </Section>
      <Section id="results" label="Results" tone="navy">
        {p.results ? (
          <>
            <h2 className="mb-8 text-4xl font-bold">Results</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {p.results.map((r) => (
                <div key={r.label} className="border-2 border-lime p-6">
                  <p className="font-pixel text-5xl font-bold text-lime">
                    <CountUp to={r.value} suffix={r.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-slate-light">{r.label}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-4xl font-bold">
                See it <span className="hl">live</span>
              </h2>
              <p className="mt-2 text-slate-light">The best way to judge our work is to use it.</p>
            </div>
            <Button asChild variant="pxLime" size="px">
              <a href={p.url} target="_blank" rel="noreferrer">
                Open {p.title} <ExternalLink />
              </a>
            </Button>
          </div>
        )}
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="mt-12 inline-flex items-center gap-2 font-display text-2xl font-bold text-lime hover:underline"
        >
          Next project: {next.title} <ArrowRight />
        </Link>
      </Section>
      <Cta />
    </>
  );
}
