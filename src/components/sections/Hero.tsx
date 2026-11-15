import { useEffect, useState } from "react";
import { ArrowRight, ChevronsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroChips, projects } from "@/data/content";
import { SectionLink } from "@/components/site/Layout";
import heroImg from "@/assets/hero-computer.jpg";

const LINE = "We Build Digital Experiences That ";
export function Hero() {
  const [n, setN] = useState(LINE.length + 7);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setN(0);
    const id = setInterval(
      () => setN((v) => (v >= LINE.length + 7 ? (clearInterval(id), v) : v + 1)),
      40,
    );
    return () => clearInterval(id);
  }, []);
  const first = LINE.slice(0, Math.min(n, LINE.length));
  const hl = "Matter.".slice(0, Math.max(0, n - LINE.length));
  return (
    <section
      id="home"
      data-section="home"
      data-label="Home"
      className="relative overflow-hidden bg-background py-10 md:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute left-[8%] top-10 hidden h-4 w-4 animate-float-px bg-slate-light md:block"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-24 left-[45%] h-3 w-3 animate-float-px border border-ink bg-lime [animation-delay:1.2s]"
      />
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="animate-page-in">
          <p className="mb-5 inline-block border-2 border-ink bg-surface px-3 py-1 font-mono text-sm font-bold text-ink">
            &lt;/ webro studios /&gt;
          </p>
          <h1
            className="glow min-h-[3.4em] text-[40px] font-bold leading-[1.04] text-ink sm:text-[52px] md:text-[66px] lg:text-[72px]"
            aria-label="We Build Digital Experiences That Matter."
          >
            <span aria-hidden="true">
              {first}
              {hl && <span className="hl">{hl}</span>}
              <span className="animate-[blink_1.1s_ease-in-out_infinite] font-pixel text-lime">
                _
              </span>
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            A student-led product & web development studio from Assam, crafting modern, scalable and
            impactful websites, apps and platforms for startups, brands and institutions.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap [&>*]:w-full sm:[&>*]:w-auto">
            <Button asChild variant="px" size="px">
              <SectionLink id="contact">
                Start a Project <ArrowRight />
              </SectionLink>
            </Button>
            <Button asChild variant="pxOutline" size="px">
              <SectionLink id="work">See Live Work</SectionLink>
            </Button>
          </div>
          <ul className="mt-7 flex flex-wrap gap-2">
            {heroChips.map((c) => (
              <li
                key={c}
                className="border-2 border-ink bg-surface px-2.5 py-1 font-mono text-xs font-bold text-ink"
              >
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            ⭐ {projects.length} live projects · Websites from ₹5,000 · Based in Dibrugarh, Assam
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-md animate-page-in [animation-delay:150ms] lg:max-w-none">
          <img
            src={heroImg}
            alt="Retro computer showing the Webro W logo, with a code window, coffee mug and stacked books"
            width={1280}
            height={1024}
            fetchPriority="high"
            className="w-full mix-blend-multiply dark:border-2 dark:border-ink dark:mix-blend-normal dark:shadow-[var(--shadow-px-lg)] dark:brightness-95"
          />
        </div>
      </div>
      <SectionLink
        id="services"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 animate-float-px text-ink md:block"
      >
        <span className="sr-only">Go to services</span>
        <ChevronsDown className="h-7 w-7" />
      </SectionLink>
    </section>
  );
}
