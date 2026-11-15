import type Lenis from "lenis";

let lenis: Lenis | null = null;
export const setLenis = (l: Lenis | null) => {
  lenis = l;
};
export const getLenis = () => lenis;

/** Height of the sticky header (taller on mobile, where it includes the section tabs). */
const headerOffset = () => (document.querySelector("header")?.offsetHeight ?? 64) + 8;

/** Smoothly scroll to a section by id (falls back to native scrolling). Returns false if not found. */
export function scrollToSection(id: string): boolean {
  const el = document.getElementById(id);
  if (!el) return false;
  // Resume first: Lenis.start() resets any in-flight animation, so it must not run after scrollTo.
  if (lenis?.isStopped) lenis.start();
  // The page height may have just changed (a panel opened), so re-measure before scrolling.
  lenis?.resize();
  if (id === "home") {
    if (lenis) lenis.scrollTo(0, { duration: 1.2, force: true });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (lenis) {
    lenis.scrollTo(el, { offset: -headerOffset(), duration: 1.2, force: true });
  } else {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - headerOffset(),
      behavior: "smooth",
    });
  }
  return true;
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { duration: 1.2, force: true });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

/** Instantly jump to the top (used when switching homepage panels). */
export function jumpToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  window.scrollTo(0, 0);
}
