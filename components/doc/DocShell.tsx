import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Moon, Sun, Languages, Search, Menu, X, ChevronRight } from "lucide-react";
import { useTheme, useLang, t as tr } from "@/lib/providers";
import { grouped, topics } from "@/content/topics";
import type { ReactNode } from "react";
import logoAsset from "@/assets/omicon-logo.png.asset.json";

export function DocShell({ children }: { children: ReactNode }) {
  const { theme, toggle: toggleTheme } = useTheme();
  const { lang, toggle: toggleLang } = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [openMobile, setOpenMobile] = useState(false);
  const [query, setQuery] = useState("");
  const [scrollPct, setScrollPct] = useState(0);
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop || document.body.scrollTop) / Math.max(1, h.scrollHeight - h.clientHeight);
      setScrollPct(Math.min(1, Math.max(0, pct)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => { setOpenMobile(false); window.scrollTo(0, 0); }, [pathname]);

  const flatIndex = useMemo(
    () => topics.flatMap((tp) => [
      { slug: tp.slug, label: tp.title.en + " · " + tp.title.bn, summary: tp.summary.en + " " + tp.summary.bn },
    ]),
    [],
  );

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return flatIndex
      .filter((i) => i.label.toLowerCase().includes(q) || i.summary.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query, flatIndex]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Progress indicator */}
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
        <div className="h-full bg-[var(--brand)] transition-[width] duration-150" style={{ width: `${scrollPct * 100}%` }} />
      </div>

      {/* Topbar */}
      <header className="sticky top-1 z-40 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-3 px-4">
          <button className="lg:hidden rounded-md p-2 hover:bg-muted" onClick={() => setOpenMobile((v) => !v)} aria-label="Toggle menu">
            {openMobile ? <X size={18} /> : <Menu size={18} />}
          </button>
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[#2f6dab] to-[#0c2440] p-1 ring-1 ring-white/10">
              <img src={logoAsset.url} alt="Omicon Group" className="h-full w-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold leading-none">Omicon · DCP Ecosystem</div>
              <div className="text-[10px] text-muted-foreground leading-tight mt-0.5">{tr(lang, "End-User Documentation", "ব্যবহারকারী ডকুমেন্টেশন")}</div>
            </div>
          </Link>

          <div className="relative ml-auto flex-1 max-w-md">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={tr(lang, "Search topics…", "বিষয় খুঁজুন…")}
              className="w-full rounded-lg border bg-card pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--brand)]"
            />
            {searchResults.length > 0 && (
              <div className="absolute inset-x-0 top-full mt-1 rounded-lg border bg-popover shadow-xl overflow-hidden z-50">
                {searchResults.map((r) => (
                  <Link
                    key={r.slug}
                    to="/docs/$slug"
                    params={{ slug: r.slug }}
                    onClick={() => setQuery("")}
                    className="block px-3 py-2 text-sm hover:bg-muted border-b last:border-b-0"
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button onClick={toggleLang} className="hidden sm:flex items-center gap-1.5 rounded-lg border bg-card px-3 py-2 text-xs font-semibold hover:bg-muted" aria-label="Toggle language">
            <Languages size={14} />
            <span className={lang === "bn" ? "lang-bn" : ""}>{lang === "en" ? "EN" : "বাং"}</span>
          </button>
          <button onClick={toggleTheme} className="rounded-lg border bg-card p-2 hover:bg-muted" aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px] gap-6 px-4 py-6">
        {/* Sidebar */}
        <aside className={`${openMobile ? "fixed inset-0 z-50 block bg-background p-4 pt-20 overflow-y-auto" : "hidden"} lg:sticky lg:top-[72px] lg:z-30 lg:block lg:h-[calc(100vh-90px)] lg:w-64 lg:shrink-0 lg:overflow-y-auto lg:p-0`}>
          <nav className="space-y-5">
            {grouped.map((g) => (
              <div key={g.group.en}>
                <div className="px-2 mb-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {tr(lang, g.group.en, g.group.bn)}
                </div>
                <div className="space-y-0.5">
                  {g.items.map((it) => {
                    const href = `/docs/${it.slug}`;
                    const active = pathname === href;
                    return (
                      <Link
                        key={it.slug}
                        to="/docs/$slug"
                        params={{ slug: it.slug }}
                        className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${active ? "bg-[var(--brand)] text-white font-semibold" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
                      >
                        <span className={lang === "bn" ? "lang-bn" : ""}>{tr(lang, it.title.en, it.title.bn)}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
            <div className="px-2 pt-2 text-[10px] text-muted-foreground border-t pt-3">
              {tr(lang, "© Omicon Group · Internal training", "© ওমিকন গ্রুপ · অভ্যন্তরীণ প্রশিক্ষণ")}
            </div>
          </nav>
        </aside>

        <main ref={mainRef} className={`flex-1 min-w-0 ${lang === "bn" ? "lang-bn" : ""}`}>{children}</main>
      </div>
    </div>
  );
}

export function PrevNext({ slug }: { slug: string }) {
  const { lang } = useLang();
  const idx = topics.findIndex((t) => t.slug === slug);
  const prev = idx > 0 ? topics[idx - 1] : null;
  const next = idx >= 0 && idx < topics.length - 1 ? topics[idx + 1] : null;
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t pt-6">
      {prev ? (
        <Link to="/docs/$slug" params={{ slug: prev.slug }} className="group rounded-xl border bg-card p-4 hover:border-[var(--brand)] transition-colors">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">← {tr(lang, "Previous", "আগের")}</div>
          <div className="font-semibold mt-1 group-hover:text-[var(--brand)]">{tr(lang, prev.title.en, prev.title.bn)}</div>
        </Link>
      ) : <div />}
      {next ? (
        <Link to="/docs/$slug" params={{ slug: next.slug }} className="group rounded-xl border bg-card p-4 text-right hover:border-[var(--brand)] transition-colors">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{tr(lang, "Next", "পরের")} →</div>
          <div className="font-semibold mt-1 group-hover:text-[var(--brand)] flex items-center justify-end gap-1">{tr(lang, next.title.en, next.title.bn)} <ChevronRight size={16} /></div>
        </Link>
      ) : <div />}
    </div>
  );
}