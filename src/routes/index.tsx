import { createFileRoute } from "@tanstack/react-router";
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

// Section order = navbar order: Home → Services → Work → Pricing → About → Contact.
function Index() {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <Projects />
      <CaseStudy />
      <WhyUs />
      <Process />
      <TechStack />
      <Industries />
      <Pricing />
      <AboutStudio />
      <Team />
      <Milestones />
      <Testimonials />
      <Faq />
      <Blog />
      <Cta />
      <Contact />
    </>
  );
}
