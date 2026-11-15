import { useEffect, useRef, type ReactNode } from "react";
import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Projects } from "@/components/sections/Projects";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { Industries } from "@/components/sections/Industries";
import { Pricing } from "@/components/sections/Pricing";
import { AboutStudio } from "@/components/sections/About";
import { Team } from "@/components/sections/Team";
import { Milestones } from "@/components/sections/Milestones";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Cta } from "@/components/sections/Cta";
import { SectionLink } from "@/components/site/Layout";
import { navLinks } from "@/data/content";
import { panelFor, useActivePanel, type PanelId } from "@/lib/panels";
import { jumpToTop, scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

const title = "Webro Studios — We Build Digital Experiences That Matter";
const description =
  "Student-led product & web development studio from Dibrugarh, Assam. Websites from ₹5,000, plus apps and platforms for startups, brands and institutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

// One panel per navbar item; only the selected one is on screen.
const panels: Record<PanelId, () => ReactNode> = {
  home: () => (
    <>
      <Hero />
      <Clients />
      <WhyUs />
      <Testimonials />
      <Cta />
    </>
  ),
  services: () => (
    <>
      <Services />
      <Process />
      <TechStack />
      <Industries />
    </>
  ),
  work: () => (
    <>
      <Projects />
      <CaseStudy />
      <Milestones />
    </>
  ),
  pricing: () => (
    <>
      <Pricing />
      <Faq />
    </>
  ),
  about: () => (
    <>
      <AboutStudio />
      <Team />
      <Blog />
    </>
  ),
  contact: () => <Contact />,
};

function Index() {
  const active = useActivePanel();
  const hash = useRouterState({ select: (s) => s.location.hash });
  const switched = useRef(false);

  useEffect(() => {
    const id = hash.replace(/^#/, "");
    // A sub-section link (e.g. /#faq) opens its panel, then scrolls to it.
    if (id && id !== active && panelFor(id) === active) {
      requestAnimationFrame(() => scrollToSection(id));
    } else if (switched.current) {
      jumpToTop();
    }
    switched.current = true;
  }, [hash, active]);

  return (
    <div key={active} className="animate-page-in">
      {panels[active]()}
      <PanelNav active={active} />
    </div>
  );
}

/** Previous / next panel buttons shown at the end of every panel. */
function PanelNav({ active }: { active: PanelId }) {
  const i = navLinks.findIndex((l) => l.id === active);
  const prev = navLinks[i - 1];
  const next = navLinks[i + 1];
  const btn =
    "group flex min-w-0 flex-1 items-center gap-3 border-2 border-ink bg-surface p-4 text-ink shadow-[var(--shadow-px)] transition-transform duration-200 hover:-translate-y-0.5 md:p-5";
  return (
    <nav aria-label="Next section" className="border-t-2 border-ink bg-background">
      <div className="mx-auto max-w-[1200px] px-5 py-10 md:px-8">
        <p className="mb-4 text-center font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Section {i + 1} of {navLinks.length}
        </p>
        <div className="flex gap-3 md:gap-5">
          {prev ? (
            <SectionLink id={prev.id} className={btn}>
              <ArrowLeft className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-x-1" />
              <span className="min-w-0">
                <span className="block font-mono text-[11px] text-muted-foreground">Previous</span>
                <span className="block truncate text-lg font-bold md:text-xl">{prev.label}</span>
              </span>
            </SectionLink>
          ) : (
            <span className="hidden flex-1 md:block" />
          )}
          {next ? (
            <SectionLink
              id={next.id}
              className={cn(btn, "justify-end bg-lime text-right text-navy")}
            >
              <span className="min-w-0">
                <span className="block font-mono text-[11px] opacity-70">Next</span>
                <span className="block truncate text-lg font-bold md:text-xl">{next.label}</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </SectionLink>
          ) : (
            <SectionLink id="home" className={cn(btn, "justify-end bg-lime text-right text-navy")}>
              <span className="min-w-0">
                <span className="block font-mono text-[11px] opacity-70">Back to</span>
                <span className="block truncate text-lg font-bold md:text-xl">Home</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0" />
            </SectionLink>
          )}
        </div>
      </div>
    </nav>
  );
}
