import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/primitives";
import { PageHero } from "@/components/sections/PageHero";
import { ContactDetails, ContactForm } from "@/components/sections/ContactForm";

const title = "Contact — Start a Project | Webro Studios";
const description =
  "Tell us about your idea. Webro Studios usually replies within 24 hours. WhatsApp, email or the project form.";
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        label="// Contact"
        title={
          <>
            Let's <span className="hl">build</span> something.
          </>
        }
        subtitle="Tell us about your project. We usually reply within 24 hours."
      />
      <Section id="form" tone="white">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="px-card p-6 md:p-8">
            <ContactForm />
          </div>
          <ContactDetails />
        </div>
      </Section>
    </>
  );
}
