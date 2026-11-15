import { Section, SectionHeading } from "@/components/site/primitives";
import { ContactDetails, ContactForm } from "./ContactForm";

/** Homepage contact section — the working project enquiry form. */
export function Contact({ label = "// 14 — Contact" }: { label?: string }) {
  return (
    <Section id="contact" label="Contact" tone="white">
      <SectionHeading
        label={label}
        title={
          <>
            Let's <span className="hl">build</span> something.
          </>
        }
        subtitle="Tell us about your project — we usually reply within 24 hours."
      />
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="px-card p-6 md:p-8">
          <ContactForm />
        </div>
        <ContactDetails />
      </div>
    </Section>
  );
}
