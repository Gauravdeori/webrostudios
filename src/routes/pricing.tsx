import { createFileRoute } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { addOns, comparison, pricing } from "@/data/content";
import { Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { PageHero } from "@/components/sections/PageHero";
import { PricingCards } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";

const title = "Pricing — Website & App Packages | Webro Studios";
const description =
  "Simple, transparent packages. Every plan includes domain, SEO setup, SSL security and support.";
export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHero
        label="// Pricing"
        title={
          <>
            Websites from <span className="hl">₹5,000</span>
          </>
        }
        subtitle="Simple, transparent packages. Every one includes domain, SEO setup, SSL security & support."
      />
      <Section id="packages" label="Packages" tone="white">
        <PricingCards />
      </Section>
      <Section id="compare" label="Compare" tone="light">
        <SectionHeading
          label="// Compare"
          title={
            <>
              Compare <span className="hl">Plans</span>
            </>
          }
        />
        <div className="overflow-x-auto border-2 border-ink bg-surface shadow-[var(--shadow-px)]">
          <table className="w-full min-w-[560px] text-sm text-ink">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="p-3 text-left">Feature</th>
                {pricing.map((p) => (
                  <th key={p.name} className="p-3 font-pixel">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((r) => (
                <tr key={r.feature} className="border-t-2 border-muted">
                  <td className="p-3 font-bold">{r.feature}</td>
                  {r.values.map((v, i) => (
                    <td key={i} className="p-3 text-center">
                      {typeof v === "boolean" ? (
                        v ? (
                          <Check className="mx-auto h-5 w-5" aria-label="Included" />
                        ) : (
                          <X
                            className="mx-auto h-5 w-5 text-muted-foreground"
                            aria-label="Not included"
                          />
                        )
                      ) : (
                        v
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section id="add-ons" label="Add-ons" tone="navy">
        <SectionHeading
          tone="navy"
          label="// Add-ons"
          title={
            <>
              Power <span className="hl">Ups</span>
            </>
          }
          subtitle="Extras you can add to any package."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {addOns.map((a, i) => (
            <Reveal key={a.title} delay={i * 60}>
              <div className="notch h-full border-2 border-slate-px bg-navy-soft p-5">
                <h3 className="text-xl font-bold">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-light">{a.desc}</p>
                <p className="mt-4 font-pixel text-xl text-lime">{a.price}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Faq label="// FAQ" />
      <Cta />
    </>
  );
}
