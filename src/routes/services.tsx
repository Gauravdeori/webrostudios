import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { process, services } from "@/data/content";
import { Chip, Icon, Reveal, Section } from "@/components/site/primitives";
import { PageHero } from "@/components/sections/PageHero";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";

const title = "Services — Web, App, Design & Branding | Webro Studios";
const description =
  "Web development, app development, UI/UX design, e-commerce, branding and tech consulting from Webro Studios, Assam.";
export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        label="// Services"
        title={
          <>
            Everything you need to <span className="hl">launch</span> online.
          </>
        }
        subtitle="Six focused services. One team from idea to launch."
      />
      {services.map((s, i) => (
        <Section key={s.slug} id={s.slug} label={s.title} tone={i % 2 ? "navy" : "light"}>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <p
                className={
                  i % 2 ? "text-sm font-bold text-lime" : "text-sm font-bold text-muted-foreground"
                }
              >
                // 0{i + 1} — {s.title}
              </p>
              <h2 className="mt-3 flex items-center gap-4 text-4xl font-bold md:text-5xl">
                <span className="grid h-14 w-14 shrink-0 place-items-center border-2 border-current">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                {s.title}
              </h2>
              <p className={i % 2 ? "mt-4 text-slate-light" : "mt-4 text-muted-foreground"}>
                {s.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tech.map((t) => (
                  <Chip key={t} tone={i % 2 ? "navy" : "light"}>
                    {t}
                  </Chip>
                ))}
              </div>
              <Button asChild variant={i % 2 ? "pxLime" : "px"} size="px" className="mt-7">
                <Link to="/contact">
                  Start a {s.title.split(" ")[0]} project <ArrowRight />
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={100} className="grid gap-5 sm:grid-cols-2">
              <div className="px-card p-5 text-ink">
                <h3 className="text-lg font-bold">What's included</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {s.included.map((x) => (
                    <li key={x} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-card !bg-lime p-5 !text-navy">
                <h3 className="text-lg font-bold">Our process</h3>
                <ol className="mt-3 space-y-2 text-sm">
                  {process.map((p) => (
                    <li key={p.n}>
                      <b>{p.n}</b> {p.title} <span className="opacity-70">· {p.time}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </Section>
      ))}
      <Faq label="// FAQ" />
      <Cta />
    </>
  );
}
