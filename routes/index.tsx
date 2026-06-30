import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Sparkles, Globe } from "lucide-react";
import { DocShell } from "@/components/doc/DocShell";
import { useLang, t as tr } from "@/lib/providers";
import { topics, grouped } from "@/content/topics";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DCP Ecosystem — End User Documentation" },
      { name: "description", content: "Step-by-step training guide for Cash Custodian, Reporting Incharge, AGM, CFO and Super Admin roles." },
      { property: "og:title", content: "DCP Ecosystem — End User Documentation" },
      { property: "og:description", content: "Bilingual (English / বাংলা) training & onboarding guide for the DCP Ecosystem." },
    ],
  }),
  component: Index,
});

function Index() {
  const { lang } = useLang();
  return (
    <DocShell>
      <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-[var(--brand-soft)] via-background to-background p-8 sm:p-12">
        <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-[var(--brand)]/10 blur-3xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-[11px] font-semibold text-[var(--brand)]">
            <Sparkles size={12} /> {tr(lang, "Internal training · v1.0", "অভ্যন্তরীণ প্রশিক্ষণ · v1.0")}
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight leading-[1.05] max-w-3xl">
            {tr(lang, "Learn the DCP Ecosystem, step by step.", "ডিসিপি ইকোসিস্টেম, ধাপে ধাপে শিখুন।")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {tr(
              lang,
              "A complete, non-technical guide for Cash Custodians, Reporting Incharges, AGM, CFO and Super Admins. Every screen, every workflow, in English and বাংলা.",
              "ক্যাশ কাস্টোডিয়ান, রিপোর্টিং ইনচার্জ, এজিএম, সিএফও ও সুপার অ্যাডমিনদের জন্য সম্পূর্ণ, অ-প্রযুক্তিগত গাইড। প্রতিটি স্ক্রিন, প্রতিটি কর্মপ্রবাহ — English ও বাংলায়।",
            )}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/docs/$slug" params={{ slug: "introduction" }} className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition">
              {tr(lang, "Start reading", "পড়া শুরু করুন")} <ArrowRight size={16} />
            </Link>
            <Link to="/docs/$slug" params={{ slug: "daily-cash-position" }} className="inline-flex items-center gap-2 rounded-lg border bg-card px-5 py-3 text-sm font-semibold hover:bg-muted transition">
              <BookOpen size={16} /> {tr(lang, "Daily Cash Position", "ডেইলি ক্যাশ পজিশন")}
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
            {[
              [Globe, tr(lang, "Bilingual", "দ্বিভাষিক"), tr(lang, "Every page in English & বাংলা.", "প্রতিটি পৃষ্ঠা English ও বাংলায়।")],
              [Sparkles, tr(lang, "Light & Dark", "লাইট ও ডার্ক"), tr(lang, "Comfortable reading any time.", "যেকোনো সময় আরামে পড়ুন।")],
              [BookOpen, `${topics.length} ${tr(lang, "topics", "বিষয়")}`, tr(lang, "From login to admin tools.", "লগইন থেকে অ্যাডমিন টুল পর্যন্ত।")],
            ].map(([Icon, t1, t2], k) => {
              const I = Icon as typeof Sparkles;
              return (
                <div key={k} className="rounded-xl border bg-card p-4">
                  <I size={18} className="text-[var(--brand)]" />
                  <div className="font-bold mt-2">{t1 as string}</div>
                  <div className="text-[12px] text-muted-foreground mt-1">{t2 as string}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight">{tr(lang, "Browse the documentation", "ডকুমেন্টেশন ব্রাউজ করুন")}</h2>
        <p className="text-muted-foreground mt-1">{tr(lang, "Organised by chapter. Pick any topic to begin.", "অধ্যায় অনুসারে সাজানো। যেকোনো বিষয় বেছে শুরু করুন।")}</p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {grouped.map((g) => (
            <div key={g.group.en} className="rounded-xl border bg-card p-5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand)]">
                {tr(lang, g.group.en, g.group.bn)}
              </div>
              <ul className="mt-3 space-y-1.5">
                {g.items.map((it) => (
                  <li key={it.slug}>
                    <Link to="/docs/$slug" params={{ slug: it.slug }} className="group flex items-center justify-between text-sm hover:text-[var(--brand)]">
                      <span>{tr(lang, it.title.en, it.title.bn)}</span>
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </DocShell>
  );
}
