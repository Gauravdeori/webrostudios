import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";
import { Section } from "@/components/site/primitives";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectGrid } from "@/components/sections/Projects";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Cta } from "@/components/sections/Cta";
import { projects } from "@/data/content";

const title = "Our Work — Live Projects & Case Studies | Webro Studios";
const description =
  "Live websites, apps and platforms built by Webro Studios: theposterzz, Present IQ, Poba Express, Golden Stay, WasteWise and more.";
export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/work" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const matches = useMatches();
  if (matches.some((m) => m.routeId === "/work/$slug")) return <Outlet />;
  return (
    <>
      <PageHero
        label="// Work"
        title={
          <>
            Products we're <span className="hl">proud</span> of.
          </>
        }
        subtitle={`${projects.length} live projects — filter by type, open the live site or read the case study.`}
      />
      <Section id="projects" label="Projects" tone="white">
        <ProjectGrid />
      </Section>
      <CaseStudy label="// Featured case study" />
      <Cta />
    </>
  );
}
