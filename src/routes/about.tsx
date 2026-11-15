import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { PageHero } from "@/components/sections/PageHero";
import { AboutStudio } from "@/components/sections/About";
import { Team } from "@/components/sections/Team";
import { Milestones } from "@/components/sections/Milestones";
import { Cta } from "@/components/sections/Cta";

const title = "About — The Webro Studio Story | Webro Studios";
const description =
  "A student-led studio from Dibrugarh, Assam and part of THEPOSTERZZ, building web experiences with real impact.";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { t: "Ship fast", d: "Momentum beats perfection. We launch, learn and improve." },
  { t: "Be honest", d: "Clear pricing, clear timelines, no jargon." },
  { t: "Craft matters", d: "Every pixel and every millisecond counts." },
  { t: "Grow together", d: "We stay with clients long after launch." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        label="// About"
        title={
          <>
            Built in <span className="hl">Assam</span>, for everyone.
          </>
        }
        subtitle="Our story, our mission and the people behind the pixels."
      />
      <AboutStudio label="// The studio" />
      <Section id="mission" label="Mission" tone="navy">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal className="border-2 border-lime p-8">
            <p className="text-sm font-bold text-lime">// Mission</p>
            <h2 className="mt-2 text-3xl font-bold">
              Make great tech accessible to every business.
            </h2>
          </Reveal>
          <Reveal delay={80} className="border-2 border-slate-px p-8">
            <p className="text-sm font-bold text-lime">// Vision</p>
            <h2 className="mt-2 text-3xl font-bold">
              Put Northeast India on the map for digital products.
            </h2>
          </Reveal>
        </div>
      </Section>
      <Section id="values" label="Values" tone="light">
        <SectionHeading
          label="// Values"
          title={
            <>
              What We <span className="hl">Believe</span>
            </>
          }
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 60}>
              <div className="px-card px-card-hover h-full p-5">
                <p className="font-pixel text-3xl text-ink">0{i + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-ink">{v.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Team label="// Team" />
      <Milestones label="// Milestones" />
      <Cta />
    </>
  );
}
