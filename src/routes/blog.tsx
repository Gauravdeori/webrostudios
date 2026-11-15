import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";
import { Section } from "@/components/site/primitives";
import { PageHero } from "@/components/sections/PageHero";
import { PostGrid } from "@/components/sections/Blog";
import { Cta } from "@/components/sections/Cta";

const title = "Blog — Insights on Web & Business | Webro Studios";
const description =
  "Practical notes on websites, e-commerce and growing your business online, from Webro Studios.";
export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const matches = useMatches();
  if (matches.some((m) => m.routeId === "/blog/$slug")) return <Outlet />;
  return (
    <>
      <PageHero
        label="// Insights"
        title={
          <>
            Notes from the <span className="hl">studio</span>.
          </>
        }
        subtitle="Business · Strategy · Case Studies"
      />
      <Section id="posts" tone="white">
        <PostGrid />
      </Section>
      <Cta />
    </>
  );
}
