import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricing } from "@/data/content";
import { Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { SectionLink } from "@/components/site/Layout";
import { cn } from "@/lib/utils";

export function PricingCards() {
  return (
    <>
      <div className="grid gap-8 md:grid-cols-3">
        {pricing.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <div
              className={cn(
                "px-card px-card-hover relative flex h-full flex-col p-7",
                p.popular && "!bg-lime !text-navy md:-translate-y-3 shadow-[var(--shadow-px-lg)]",
              )}
            >
              {p.popular && (
                <span className="absolute -top-4 left-6 border-2 border-navy bg-navy px-3 py-1 font-pixel text-xs text-lime">
                  ★ MOST POPULAR
                </span>
              )}
              <h3 className={cn("text-2xl font-bold", p.popular ? "text-navy" : "text-ink")}>
                {p.name}
              </h3>
              <p className={cn("text-sm", p.popular ? "text-navy/75" : "text-muted-foreground")}>
                {p.for}
              </p>
              <p
                className={cn(
                  "mt-5 font-mono text-xs uppercase tracking-wider",
                  p.popular ? "text-navy/75" : "text-muted-foreground",
                )}
              >
                Starting at
              </p>
              <p
                className={cn(
                  "font-pixel text-5xl font-bold",
                  p.popular ? "text-navy" : "text-ink",
                )}
              >
                {p.price}
              </p>
              <ul className={cn("mt-5 space-y-2 text-sm", p.popular ? "text-navy" : "text-ink")}>
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={p.popular ? "px" : "pxOutline"}
                size="px"
                className={cn("mt-8 w-full", p.popular && "!bg-navy !text-lime !border-navy")}
              >
                <SectionLink id="contact">
                  {p.cta} <ArrowRight />
                </SectionLink>
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-muted-foreground">
        All prices in INR. Need something different?{" "}
        <SectionLink id="contact" className="font-bold text-ink underline underline-offset-4">
          Let's talk →
        </SectionLink>
        {" · "}
        <Link to="/pricing" className="font-bold text-ink underline underline-offset-4">
          Compare plans & add-ons
        </Link>
      </p>
    </>
  );
}

export function Pricing() {
  return (
    <Section id="pricing" label="Pricing" tone="white">
      <SectionHeading
        label="// 08 — Pricing"
        title={
          <>
            Websites from <span className="hl">₹5,000</span>
          </>
        }
        subtitle="Every package includes domain, SEO setup, SSL security & support."
      />
      <PricingCards />
    </Section>
  );
}
