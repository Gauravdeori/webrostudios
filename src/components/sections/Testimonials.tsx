import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { isPlaceholder, testimonials } from "@/data/content";
import { PixelAvatar, Section, SectionHeading } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

/** Hidden until real quotes replace the "[...]" placeholders in content.ts. */
export function Testimonials() {
  const list = testimonials.filter((t) => !isPlaceholder(t.quote));
  const [i, setI] = useState(0);
  const n = list.length;
  useEffect(() => {
    if (n < 2) return;
    const id = setInterval(() => setI((v) => (v + 1) % n), 6000);
    return () => clearInterval(id);
  }, [n]);
  if (!n) return null;
  const t = list[i] ?? list[0]!;
  return (
    <Section id="testimonials" label="Testimonials" tone="navy">
      <SectionHeading
        tone="navy"
        center
        label="// Testimonials"
        title={
          <>
            What Clients <span className="hl">Say</span>
          </>
        }
      />
      <div className="mx-auto max-w-2xl">
        <figure
          key={i}
          className="animate-page-in border-2 border-lime bg-navy-soft p-8 shadow-[8px_8px_0_var(--lime)]"
          aria-live="polite"
        >
          <p className="text-lime" aria-label="5 stars">
            ★★★★★
          </p>
          <blockquote className="mt-4 font-display text-2xl">“{t.quote}”</blockquote>
          <figcaption className="mt-6 flex items-center gap-4">
            <PixelAvatar
              initials={t.name
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 2)}
              className="h-12 w-12 text-lg"
            />
            <span>
              <b className="block">{t.name}</b>
              <span className="text-sm text-slate-light">{t.business}</span>
            </span>
          </figcaption>
        </figure>
        {n > 1 && (
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setI((i - 1 + n) % n)}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center border-2 border-lime text-lime transition-colors hover:bg-lime hover:text-navy"
            >
              <ChevronLeft />
            </button>
            {list.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Testimonial ${k + 1}`}
                className={cn(
                  "h-3 w-3 border-2 border-lime transition-colors",
                  k === i && "bg-lime",
                )}
              />
            ))}
            <button
              onClick={() => setI((i + 1) % n)}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center border-2 border-lime text-lime transition-colors hover:bg-lime hover:text-navy"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </Section>
  );
}
