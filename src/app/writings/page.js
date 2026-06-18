import Link from "next/link";
import Container from "@/components/Container";
import PageTop from "@/components/PageTop";
import Socials from "@/components/Socials";
import { getAllWritings, formatDate } from "@/lib/writings";

export const metadata = {
  title: "Writings",
};

export default function Writings() {
  const posts = getAllWritings();

  return (
    <main className="min-h-screen pt-20 pb-24">
      <Container>
        <PageTop label="Rahul's Blog" />

        {posts.length === 0 ? (
          <p className="mt-12 text-[16px] text-muted">
            Nothing published yet. Soon.
          </p>
        ) : (
          <ul className="mt-12 space-y-1">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/writings/${post.slug}`}
                  className="group flex items-baseline gap-5 py-2.5"
                >
                  <span className="w-[120px] shrink-0 text-right text-[14px] text-muted">
                    {formatDate(post.date)}
                  </span>
                  <span className="text-[17px] text-foreground transition-opacity group-hover:opacity-60">
                    {post.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
          <Link
            href="/"
            className="text-[15px] text-muted transition-colors hover:text-foreground"
          >
            back
          </Link>
          <Socials />
        </div>
      </Container>
    </main>
  );
}
