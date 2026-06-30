import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

/* ---------------- Theme ---------------- */
type Theme = "light" | "dark";
type ThemeCtx = { theme: Theme; toggle: () => void; setTheme: (t: Theme) => void };
const ThemeContext = createContext<ThemeCtx | null>(null);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("dcp-theme") as Theme | null;
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const initial: Theme = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("dcp-theme", theme);
  }, [theme]);

  const value = useMemo<ThemeCtx>(() => ({
    theme,
    setTheme,
    toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
  }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme outside ThemeProvider");
  return ctx;
}

/* ---------------- Language ---------------- */
export type Lang = "en" | "bn";
type LangCtx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void };
const LangContext = createContext<LangCtx | null>(null);

function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("dcp-lang") as Lang | null;
    if (stored === "en" || stored === "bn") setLang(stored);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang === "bn" ? "bn" : "en";
    document.documentElement.classList.toggle("lang-bn", lang === "bn");
    window.localStorage.setItem("dcp-lang", lang);
  }, [lang]);

  const value = useMemo<LangCtx>(() => ({
    lang,
    setLang,
    toggle: () => setLang((l) => (l === "en" ? "bn" : "en")),
  }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang outside LangProvider");
  return ctx;
}

export function t<T>(lang: Lang, en: T, bn: T): T {
  return lang === "bn" ? bn : en;
}

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LangProvider>{children}</LangProvider>
    </ThemeProvider>
  );
}