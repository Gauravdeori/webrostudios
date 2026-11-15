import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/content";
import { BrowserFrame, Chip, Reveal, Section, SectionHeading } from "@/components/site/primitives";

export function PostGrid() {
  return (
    <div className="grid gap-7 md:grid-cols-3">
      {posts.map((p, i) => (
        <Reveal key={p.slug} delay={i * 70}>
          <Link
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className="px-card px-card-hover group block h-full overflow-hidden"
          >
            <div className="border-b-2 border-ink">
              <BrowserFrame
                title={p.category}
                hue={(["lime", "slate", "navy"] as const)[i % 3] ?? "lime"}
              >
                {p.category}
              </BrowserFrame>
            </div>
            <div className="p-5">
              <Chip>{p.category}</Chip>
              <h3 className="mt-3 text-xl font-bold leading-snug text-ink">{p.title}</h3>
              <p className="mt-3 flex justify-between font-mono text-xs text-muted-foreground">
                <span>{p.read} read</span>
                <span className="font-bold text-ink transition-transform duration-300 group-hover:translate-x-1">
                  Read →
                </span>
              </p>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function Blog() {
  return (
    <Section id="insights" label="Insights" tone="light">
      <SectionHeading
        label="// 13 — Insights"
        title={
          <>
            Latest <span className="hl">Insights</span>
          </>
        }
        subtitle="Notes on building for the web."
      />
      <PostGrid />
      <div className="mt-10 text-center">
        <Button asChild variant="pxOutline" size="px">
          <Link to="/blog">
            Visit Blog <ArrowRight />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
