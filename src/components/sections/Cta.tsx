import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/content";
import { SectionLink } from "@/components/site/Layout";
import night from "@/assets/night-scene.jpg";

export function Cta() {
  return (
    <section id="contact-cta" className="relative overflow-hidden bg-navy text-navy-foreground">
      <img
        src={night}
        alt=""
        aria-hidden="true"
        width={1920}
        height={768}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-navy via-navy/40 to-navy/70"
      />
      {[
        ["10%", "20%"],
        ["30%", "12%"],
        ["70%", "25%"],
        ["85%", "15%"],
      ].map(([l, t], i) => (
        <span
          key={i}
          aria-hidden="true"
          className="absolute h-2 w-2 animate-twinkle bg-lime"
          style={{ left: l, top: t, animationDelay: `${i * 0.6}s` }}
        />
      ))}
      <div className="relative mx-auto max-w-[1200px] px-5 py-24 text-center md:py-32">
        <h2 className="glow text-5xl font-bold md:text-7xl">
          Have an <span className="hl">Idea?</span>
        </h2>
        <p className="cursor-blink mx-auto mt-5 max-w-xl font-mono text-lg text-slate-light">
          Let's turn it into a product people love.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild variant="pxLime" size="px">
            <SectionLink id="contact">
              Get in Touch <ArrowRight />
            </SectionLink>
          </Button>
          <Button asChild variant="pxGhostNavy" size="px">
            <a href={site.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle /> Chat on WhatsApp
            </a>
          </Button>
        </div>
        <p className="mt-5 font-mono text-xs text-slate-light">
          Websites from ₹5,000 · Usually replies within 24 hours
        </p>
      </div>
    </section>
  );
}
