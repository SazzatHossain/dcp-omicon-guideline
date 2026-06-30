import { Mockups } from "@/components/mockups/AppMockups";
import type { Section, Topic } from "@/content/topics";
import { useLang, t as tr } from "@/lib/providers";
import { AlertTriangle, CheckCircle2, Info, Lightbulb, Target, Clock, AlertOctagon, BookOpen } from "lucide-react";
import type { ReactNode } from "react";

function Block({ icon, tone, title, children }: { icon: ReactNode; tone: string; title: string; children: ReactNode }) {
  return (
    <div className={`my-5 rounded-xl border-l-4 bg-card p-4 shadow-sm ${tone}`}>
      <div className="flex items-center gap-2 font-semibold mb-2">{icon}<span>{title}</span></div>
      <div className="text-[14px] text-muted-foreground space-y-1">{children}</div>
    </div>
  );
}

function List({ items, ordered }: { items: string[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={ordered ? "list-decimal pl-5 space-y-1.5" : "list-disc pl-5 space-y-1.5"}>
      {items.map((i, k) => <li key={k}>{i}</li>)}
    </Tag>
  );
}

function renderSection(s: Section, i: number, lang: "en" | "bn") {
  switch (s.kind) {
    case "heading":
      return <h2 key={i} className="text-2xl font-bold tracking-tight mt-10 mb-3">{tr(lang, s.text.en, s.text.bn)}</h2>;
    case "para":
      return <p key={i} className="leading-relaxed text-muted-foreground my-3">{tr(lang, s.text.en, s.text.bn)}</p>;
    case "purpose":
      return (
        <Block key={i} icon={<Target size={16} className="text-[var(--brand)]" />} tone="border-[var(--brand)]" title={tr(lang, "Purpose", "উদ্দেশ্য")}>
          {tr(lang, s.text.en, s.text.bn)}
        </Block>
      );
    case "when":
      return (
        <Block key={i} icon={<Clock size={16} className="text-[var(--warn)]" />} tone="border-[var(--warn)]" title={tr(lang, "When to use it", "কখন ব্যবহার করবেন")}>
          {tr(lang, s.text.en, s.text.bn)}
        </Block>
      );
    case "steps":
      return (
        <Block key={i} icon={<BookOpen size={16} className="text-[var(--brand)]" />} tone="border-[var(--brand)]" title={tr(lang, "Step-by-step", "ধাপে ধাপে")}>
          <List ordered items={tr(lang, s.items.en, s.items.bn)} />
        </Block>
      );
    case "tips":
      return (
        <Block key={i} icon={<Lightbulb size={16} className="text-[var(--ok)]" />} tone="border-[var(--ok)]" title={tr(lang, "Tips", "টিপস")}>
          <List items={tr(lang, s.items.en, s.items.bn)} />
        </Block>
      );
    case "mistakes":
      return (
        <Block key={i} icon={<AlertOctagon size={16} className="text-[var(--danger)]" />} tone="border-[var(--danger)]" title={tr(lang, "Common mistakes", "সাধারণ ভুল")}>
          <List items={tr(lang, s.items.en, s.items.bn)} />
        </Block>
      );
    case "notes":
      return (
        <Block key={i} icon={<Info size={16} className="text-muted-foreground" />} tone="border-muted-foreground" title={tr(lang, "Important notes", "গুরুত্বপূর্ণ নোট")}>
          <List items={tr(lang, s.items.en, s.items.bn)} />
        </Block>
      );
    case "callout": {
      const tone =
        s.tone === "ok" ? "border-[var(--ok)]" :
        s.tone === "warn" ? "border-[var(--warn)]" :
        s.tone === "danger" ? "border-[var(--danger)]" :
        "border-[var(--brand)]";
      const Icon =
        s.tone === "ok" ? CheckCircle2 :
        s.tone === "warn" ? AlertTriangle :
        s.tone === "danger" ? AlertOctagon : Info;
      return (
        <Block key={i} icon={<Icon size={16} />} tone={tone} title={tr(lang, s.title.en, s.title.bn)}>
          {tr(lang, s.text.en, s.text.bn)}
        </Block>
      );
    }
    case "mockup": {
      const Cmp = Mockups[s.key];
      return (
        <figure key={i} className="my-6">
          <Cmp />
          {s.caption && (
            <figcaption className="mt-2 text-center text-[12px] text-muted-foreground italic">
              {tr(lang, s.caption.en, s.caption.bn)}
            </figcaption>
          )}
        </figure>
      );
    }
  }
}

export function TopicView({ topic }: { topic: Topic }) {
  const { lang } = useLang();
  return (
    <article className="animate-fade-in">
      <div className="mb-1 text-[12px] font-semibold uppercase tracking-wider text-[var(--brand)]">
        {tr(lang, topic.group.en, topic.group.bn)}
      </div>
      <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
        {tr(lang, topic.title.en, topic.title.bn)}
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">{tr(lang, topic.summary.en, topic.summary.bn)}</p>
      {topic.audience && (
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border bg-[var(--brand-soft)] px-3 py-1 text-[11px] font-semibold text-[var(--brand)]">
          {tr(lang, "For: ", "জন্য: ")}{tr(lang, topic.audience.en, topic.audience.bn)}
        </div>
      )}
      <div className="mt-4 border-t pt-2">
        {topic.sections.map((s, i) => renderSection(s, i, lang))}
      </div>
    </article>
  );
}