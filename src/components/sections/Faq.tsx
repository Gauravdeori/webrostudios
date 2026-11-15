import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/content";
import { Section, SectionHeading } from "@/components/site/primitives";

export function Faq({ label = "// 12 — FAQ" }: { label?: string }) {
  return (
    <Section id="faq" label="FAQ" tone="white">
      <SectionHeading
        center
        label={label}
        title={
          <>
            Frequently <span className="hl">Asked</span>
          </>
        }
        subtitle="Quick answers to common questions."
      />
      <Accordion type="single" collapsible className="mx-auto max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`q${i}`}
            className="group border-2 border-ink bg-surface px-5 text-ink shadow-[var(--shadow-px)] transition-colors duration-300 data-[state=open]:bg-lime data-[state=open]:text-navy"
          >
            <AccordionTrigger className="text-left font-display text-lg font-bold hover:no-underline [&>svg]:text-current">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
