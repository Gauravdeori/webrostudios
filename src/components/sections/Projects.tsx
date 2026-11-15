import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, type ProjectCategory } from "@/data/content";
import { BrowserFrame, Chip, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

const filters = ["All", "Web", "App", "E-commerce", "AI & IoT"] as const satisfies readonly (
  "All" | ProjectCategory
)[];

export function ProjectGrid({ limit }: { limit?: number }) {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const list = projects.filter((p) => f === "All" || p.category === f).slice(0, limit);
  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((x) => {
          const count =
            x === "All" ? projects.length : projects.filter((p) => p.category === x).length;
          return (
            <button
              key={x}
              aria-pressed={f === x}
              onClick={() => setF(x)}
              className={cn(
                "border-2 border-ink px-4 py-1.5 font-mono text-sm font-bold transition-all duration-200",
                f === x
                  ? "bg-lime text-navy shadow-[var(--shadow-px)]"
                  : "bg-surface text-ink hover:bg-muted",
              )}
            >
              {x} <span className="opacity-60">{count}</span>
            </button>
          );
        })}
      </div>
      <div key={f} className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 70}>
            <article className="px-card px-card-hover group flex h-full flex-col overflow-hidden">
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="block border-b-2 border-ink"
                aria-label={`${p.title} case study`}
              >
                <BrowserFrame title={p.title} url={p.url} shot={p.shot} />
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-2">
                  <Chip>{p.category}</Chip>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-muted-foreground">
                    <span className="h-2 w-2 animate-pulse bg-lime ring-1 ring-ink" />
                    LIVE
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-bold text-ink">
                  <Link
                    to="/work/$slug"
                    params={{ slug: p.slug }}
                    className="hover:underline hover:underline-offset-4"
                  >
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="bg-muted px-2 py-0.5 font-mono text-xs text-ink">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-3 pt-5">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 border-2 border-ink bg-lime px-3 py-1.5 font-mono text-xs font-bold text-navy transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Visit live site <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <Link
                    to="/work/$slug"
                    params={{ slug: p.slug }}
                    className="inline-flex items-center gap-1.5 border-2 border-ink bg-surface px-3 py-1.5 font-mono text-xs font-bold text-ink transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Case study <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}

export function Projects() {
  return (
    <Section id="work" label="Work" tone="white">
      <SectionHeading
        label="// 02 — Work"
        title={
          <>
            Live <span className="hl">Work</span>
          </>
        }
        subtitle={`${projects.length} real products, live right now. Click through and try them.`}
      />
      <ProjectGrid limit={6} />
      <div className="mt-12 text-center">
        <Button asChild variant="px" size="px">
          <Link to="/work">
            View All {projects.length} Projects <ArrowRight />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
