import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import Lenis from "lenis";
import {
  ArrowUp,
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Menu,
  MessageCircle,
  Moon,
  Sun,
  Twitter,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, pageLinks, services, site } from "@/data/content";
import { Logo } from "./primitives";
import { cn } from "@/lib/utils";
import { getLenis, scrollToSection, scrollToTop, setLenis } from "@/lib/scroll";
import { useActivePanel } from "@/lib/panels";
import { useTheme } from "@/lib/theme";
import { submitForm } from "@/lib/contact";

/* ---------- smooth scrolling ---------- */
export function SmoothScroll() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
    });
    setLenis(lenis);
    let raf = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);
  // Lenis keeps its own scroll target; re-sync it after route changes so new pages start cleanly.
  useEffect(() => {
    getLenis()?.resize();
  }, [pathname]);
  return null;
}

/* ---------- section scroll-spy ---------- */
type SectionInfo = { id: string; label: string };
function useSections() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const panel = useActivePanel();
  const [sections, setSections] = useState<SectionInfo[]>([]);
  const [active, setActive] = useState("");
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-section]")).filter(
      (e) => e.id,
    );
    setSections(els.map((e) => ({ id: e.id, label: e.dataset["label"] ?? e.id })));
    setActive(els[0]?.id ?? "");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [pathname, panel]);
  return { sections, active, pathname, panel };
}

export function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="relative border-b-2 border-navy bg-lime py-2 pl-4 pr-10 text-center font-mono text-xs font-bold text-navy md:px-10 md:text-sm">
      🚀 Websites from ₹5,000
      <span className="hidden sm:inline">
        {" "}
        — Free consultation for startups & institutions
      </span>{" "}
      <SectionLink id="contact" className="underline underline-offset-4">
        → Book a call
      </SectionLink>
      <button
        onClick={() => setOpen(false)}
        aria-label="Dismiss announcement"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 transition-transform hover:rotate-90"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

const socials = [
  { href: site.socials.github, label: "GitHub", Icon: Github },
  { href: site.socials.instagram, label: "Instagram", Icon: Instagram },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: site.socials.x, label: "X (Twitter)", Icon: Twitter },
];

/** Opens a homepage panel ("/#pricing"). Works from any page; only that panel is shown. */
export function SectionLink({
  id,
  children,
  className,
  onNavigate,
  ...rest
}: {
  id: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
  "aria-current"?: "true" | undefined;
}) {
  const navigate = useNavigate();
  const onClick = (e: MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate?.();
    void navigate({
      to: "/",
      ...(id === "home" ? {} : { hash: id }),
      hashScrollIntoView: false,
      resetScroll: false,
    });
  };
  return (
    <a href={id === "home" ? "/" : `/#${id}`} onClick={onClick} className={className} {...rest}>
      {children}
    </a>
  );
}

/* ---------- theme toggle ---------- */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Day mode" : "Night mode"}
      className={cn(
        "group relative flex h-11 w-[76px] shrink-0 items-center border-2 border-ink bg-surface p-1 shadow-[var(--shadow-px)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0.5",
        className,
      )}
    >
      <span className="relative z-10 grid flex-1 place-items-center text-ink">
        <Sun className="h-4 w-4" />
      </span>
      <span className="relative z-10 grid flex-1 place-items-center text-ink">
        <Moon className="h-4 w-4" />
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] border-2 border-navy bg-lime transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
          dark && "translate-x-[calc(100%+4px)]",
        )}
      >
        <span className="absolute left-0.5 top-0.5 h-1.5 w-1.5 bg-navy" />
      </span>
      <span className="sr-only">{dark ? "Night mode on" : "Day mode on"}</span>
    </button>
  );
}

/* ---------- navbar ---------- */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const bar = useRef<HTMLDivElement>(null);
  const { pathname, panel } = useSections();
  const tabs = useRef<HTMLUListElement>(null);

  useEffect(() => {
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 10);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (bar.current)
          bar.current.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => {
      window.removeEventListener("scroll", on);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  useEffect(() => {
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  const isActive = (id: string) => (pathname === "/" ? panel === id : `/${id}` === pathname);

  // Keep the active mobile tab in view.
  useEffect(() => {
    const ul = tabs.current;
    const el = ul?.querySelector<HTMLElement>("[aria-current]");
    if (ul && el)
      ul.scrollTo({
        left: el.offsetLeft - (ul.clientWidth - el.offsetWidth) / 2,
        behavior: "smooth",
      });
  }, [panel, pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b-2 border-ink bg-surface/95 backdrop-blur transition-shadow duration-300",
        scrolled && "shadow-[0_4px_0_var(--shadow-c)]",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-3 px-5 md:px-8"
        aria-label="Main"
      >
        <SectionLink id="home" className="text-ink" aria-current={undefined}>
          <span className="sr-only">Webro Studios home</span>
          <Logo />
        </SectionLink>
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <SectionLink
                id={l.id}
                aria-current={isActive(l.id) ? "true" : undefined}
                className={cn(
                  "relative block border-2 px-3 py-1 font-mono text-sm font-bold transition-colors duration-200",
                  isActive(l.id)
                    ? "border-ink bg-lime text-navy"
                    : "border-transparent text-ink hover:border-ink",
                )}
              >
                {l.label}
              </SectionLink>
            </li>
          ))}
          <li>
            <Link
              to="/blog"
              className="block border-2 border-transparent px-3 py-1 font-mono text-sm font-bold text-ink transition-colors hover:border-ink"
              activeProps={{ className: "!border-ink bg-lime !text-navy" }}
            >
              Blog
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild variant="px" size="px" className="hidden sm:inline-flex">
            <SectionLink id="contact">
              Let's Build <ArrowUpRight />
            </SectionLink>
          </Button>
          <button
            className="grid h-11 w-11 place-items-center border-2 border-ink text-ink lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
      {/* mobile section tabs */}
      <ul
        ref={tabs}
        aria-label="Sections"
        className="flex gap-1 overflow-x-auto overscroll-x-contain border-t-2 border-ink px-3 py-2 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
      >
        {navLinks.map((l) => (
          <li key={l.id} className="shrink-0">
            <SectionLink
              id={l.id}
              aria-current={isActive(l.id) ? "true" : undefined}
              className={cn(
                "block border-2 px-2.5 py-1 font-mono text-xs font-bold transition-colors duration-200",
                isActive(l.id)
                  ? "border-ink bg-lime text-navy"
                  : "border-transparent text-ink active:border-ink",
              )}
            >
              {l.label}
            </SectionLink>
          </li>
        ))}
        <li className="shrink-0">
          <Link
            to="/blog"
            className="block border-2 border-transparent px-2.5 py-1 font-mono text-xs font-bold text-ink"
            activeProps={{ className: "!border-ink bg-lime !text-navy", "aria-current": "true" }}
          >
            Blog
          </Link>
        </li>
      </ul>
      <div aria-hidden="true" className="absolute inset-x-0 -bottom-[2px] h-[3px] overflow-hidden">
        <div ref={bar} className="h-full origin-left scale-x-0 bg-lime" />
      </div>

      {/* mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-navy p-6 text-navy-foreground transition-[opacity,visibility] duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between">
          <Logo inverted />
          <button
            className="grid h-11 w-11 place-items-center border-2 border-lime"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
        </div>
        <ul className="mt-10 space-y-3">
          {[...navLinks, { id: "blog", label: "Blog" }].map((l, i) => (
            <li
              key={l.id}
              className={cn(
                "transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
              style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
            >
              {l.id === "blog" ? (
                <Link
                  to="/blog"
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 font-display text-3xl font-bold hover:text-lime"
                >
                  <span className="font-mono text-sm text-lime">0{i + 1}</span>
                  {l.label}
                </Link>
              ) : (
                <SectionLink
                  id={l.id}
                  onNavigate={() => setOpen(false)}
                  className="flex items-baseline gap-3 font-display text-3xl font-bold hover:text-lime"
                >
                  <span className="font-mono text-sm text-lime">0{i + 1}</span>
                  {l.label}
                </SectionLink>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center border-2 border-lime text-lime"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

/* ---------- footer ---------- */
export function Footer() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const onSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "");
    setState("sending");
    const ok = await submitForm({ email, _subject: "New newsletter signup — Webro Studios" });
    setState(ok ? "done" : "error");
  };
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <Logo inverted />
          <p className="mt-4 text-sm text-slate-light">{site.tagline}</p>
          <div className="mt-5 flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center border-2 border-slate-px transition-colors hover:border-lime hover:bg-lime hover:text-navy"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-lime">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            {pageLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-lime">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-lime">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services" hash={s.slug} className="transition-colors hover:text-lime">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-lime">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-slate-light">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-lime">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="hover:text-lime">
                {site.phone} (WhatsApp)
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
          {state === "done" ? (
            <p className="mt-5 border-2 border-lime p-3 font-mono text-sm text-lime" role="status">
              You're on the list ✓
            </p>
          ) : (
            <form className="mt-5" onSubmit={onSubscribe}>
              <label htmlFor="newsletter" className="mb-2 block font-mono text-xs text-slate-light">
                Get studio updates
              </label>
              <div className="flex">
                <input
                  id="newsletter"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="min-w-0 flex-1 border-2 border-lime bg-navy-soft px-3 py-2 text-sm text-navy-foreground placeholder:text-slate-px"
                />
                <button
                  disabled={state === "sending"}
                  className="border-2 border-lime bg-lime px-3 font-mono text-sm font-bold text-navy disabled:opacity-60"
                >
                  {state === "sending" ? "…" : "Join"}
                </button>
              </div>
              {state === "error" && (
                <p className="mt-2 text-xs text-lime" role="alert">
                  Couldn't subscribe right now — please email us instead.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
      <div className="border-t-2 border-navy-soft">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-5 py-5 font-mono text-xs text-slate-light md:flex-row md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} Webro Studios — a THEPOSTERZZ brand. Made with ♥ in Assam.
          </p>
          <p>
            Founded by{" "}
            <a
              href={site.founderSite}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:text-lime hover:underline"
            >
              Gaurav Deori
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- floating buttons ---------- */
export function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col gap-2 md:bottom-5 md:right-5 md:gap-3">
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        tabIndex={show ? 0 : -1}
        className={cn(
          "grid h-11 w-11 place-items-center border-2 border-ink bg-surface md:h-12 md:w-12 text-ink shadow-[var(--shadow-px)] transition-all duration-300 hover:-translate-y-0.5",
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-11 w-11 place-items-center border-2 border-navy bg-lime md:h-12 md:w-12 text-navy shadow-[var(--shadow-px)] transition-transform duration-200 hover:-translate-y-0.5"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}

/* ---------- section rail (desktop) ---------- */
export function SectionRail() {
  const { sections, active } = useSections();
  if (sections.length < 3) return null;
  return (
    <nav
      aria-label="Page sections"
      className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-1.5 2xl:flex"
    >
      {sections.map((s, i) => {
        const on = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(e) => {
              if (scrollToSection(s.id)) e.preventDefault();
            }}
            aria-label={`Go to ${s.label}`}
            aria-current={on ? "true" : undefined}
            className="group flex items-center gap-2"
          >
            <span
              className={cn(
                "h-3 border-2 border-ink transition-all duration-300",
                on ? "w-6 bg-lime" : "w-3 bg-surface group-hover:bg-lime",
              )}
            />
            <span
              className={cn(
                "whitespace-nowrap border-2 border-ink bg-surface px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-ink transition-all duration-300",
                on
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
              )}
            >
              {String(i).padStart(2, "0")} {s.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
