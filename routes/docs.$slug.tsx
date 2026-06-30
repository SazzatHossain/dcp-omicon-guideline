import { createFileRoute, notFound } from "@tanstack/react-router";
import { DocShell, PrevNext } from "@/components/doc/DocShell";
import { TopicView } from "@/components/doc/TopicView";
import { topicsBySlug } from "@/content/topics";

export const Route = createFileRoute("/docs/$slug")({
  loader: ({ params }) => {
    const topic = topicsBySlug.get(params.slug);
    if (!topic) throw notFound();
    return { topic };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.topic.title.en} — DCP Documentation` },
          { name: "description", content: loaderData.topic.summary.en },
          { property: "og:title", content: `${loaderData.topic.title.en} — DCP Documentation` },
          { property: "og:description", content: loaderData.topic.summary.en },
        ]
      : [],
  }),
  component: TopicPage,
});

function TopicPage() {
  const { topic } = Route.useLoaderData();
  return (
    <DocShell>
      <TopicView topic={topic} />
      <PrevNext slug={topic.slug} />
    </DocShell>
  );
}