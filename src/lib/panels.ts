import { useSyncExternalStore } from "react";
import { useRouterState } from "@tanstack/react-router";
import { navLinks } from "@/data/content";

/**
 * The homepage shows one panel at a time (Home, Services, Work…), chosen by the URL hash:
 * "/" → Home, "/#pricing" → Pricing. Sub-section hashes such as "/#faq" open the panel that
 * contains them.
 */
export type PanelId = (typeof navLinks)[number]["id"];

const sectionPanel: Record<string, PanelId> = {
  why: "home",
  testimonials: "home",
  process: "services",
  stack: "services",
  industries: "services",
  "case-study": "work",
  milestones: "work",
  faq: "pricing",
  team: "about",
  insights: "about",
};

export function panelFor(hash: string): PanelId {
  const h = hash.replace(/^#/, "");
  const top = navLinks.find((l) => l.id === h);
  return top ? top.id : (sectionPanel[h] ?? "home");
}

const subscribe = () => () => {};
/** false during SSR and hydration, true afterwards (the server never sees the URL hash). */
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

export function useActivePanel(): PanelId {
  const hash = useRouterState({ select: (s) => s.location.hash });
  return useHydrated() ? panelFor(hash) : "home";
}
