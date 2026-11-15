import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";
const KEY = "webro-theme";

/** Inline script for <head>: applies the saved/system theme before first paint (no flash). */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}var d=document.documentElement;if(t==="dark")d.classList.add("dark");d.style.colorScheme=t}catch(e){}})();`;

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("light");
  useEffect(() => {
    setThemeState(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);
  const setTheme = useCallback((t: Theme) => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) root.classList.add("theme-anim");
    root.classList.toggle("dark", t === "dark");
    root.style.colorScheme = t;
    try {
      localStorage.setItem(KEY, t);
    } catch {
      /* storage unavailable */
    }
    setThemeState(t);
    if (!reduce) window.setTimeout(() => root.classList.remove("theme-anim"), 500);
  }, []);
  return { theme, setTheme, toggle: () => setTheme(theme === "dark" ? "light" : "dark") };
}
