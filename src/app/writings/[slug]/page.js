import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Container from "@/components/Container";
import PageTop from "@/components/PageTop";
import { getAllWritings, getWriting, formatDate } from "@/lib/writings";

export function generateStaticParams() {
  return getAllWritings({ includeDrafts: true }).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getWriting(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary || undefined,
  };
}

export default async function WritingPost({ params }) {
  const { slug } = await params;
  const post = getWriting(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen pt-20 pb-28">
      <Container>
        <PageTop label="Rahul's Blog" />

        <article className="mt-14">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            {formatDate(post.date)}
          </p>
          <h1 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] text-foreground">
            {post.title}
          </h1>

          <div className="prose mt-9">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: { remarkPlugins: [[remarkGfm, { singleTilde: false }]] },
              }}
            />
          </div>
        </article>

        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/writings"
            className="text-[15px] text-muted transition-colors hover:text-foreground"
          >
            back
          </Link>
        </div>
      </Container>
    </main>
  );
}
