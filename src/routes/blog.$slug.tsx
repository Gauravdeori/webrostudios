import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/data/content";
import { Chip, Section } from "@/components/site/primitives";
import { Cta } from "@/components/sections/Cta";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const t = loaderData
      ? `${loaderData.post.title} | Webro Studios`
      : "Article not found | Webro Studios";
    const d = loaderData?.post.excerpt ?? "This article could not be found.";
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: loaderData
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: loaderData.post.title,
                author: { "@type": "Organization", name: "Webro Studios" },
              }),
            },
          ]
        : [],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <>
      <Section tone="light">
        <article className="mx-auto max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-ink">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <Chip>{post.category}</Chip>
            <span className="text-xs text-muted-foreground">{post.read} read</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-ink md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 border-l-4 border-lime pl-4 text-lg text-muted-foreground">
            {post.excerpt}
          </p>
          <div className="mt-8 space-y-5 leading-relaxed">
            {post.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>
      </Section>
      <Cta />
    </>
  );
}
