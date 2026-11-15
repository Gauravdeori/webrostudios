import type Lenis from "lenis";

let lenis: Lenis | null = null;
export const setLenis = (l: Lenis | null) => {
  lenis = l;
};
export const getLenis = () => lenis;

const HEADER_OFFSET = 72;

/** Smoothly scroll to a section by id (falls back to native scrolling). Returns false if not found. */
export function scrollToSection(id: string): boolean {
  const el = document.getElementById(id);
  if (!el) return false;
  // Resume first: Lenis.start() resets any in-flight animation, so it must not run after scrollTo.
  if (lenis?.isStopped) lenis.start();
  if (id === "home") {
    if (lenis) lenis.scrollTo(0, { duration: 1.2, force: true });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (lenis) {
    lenis.scrollTo(el, { offset: -HEADER_OFFSET + 2, duration: 1.2, force: true });
  } else {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET + 2,
      behavior: "smooth",
    });
  }
  return true;
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { duration: 1.2, force: true });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}
