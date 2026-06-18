import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const WRITINGS_DIR = path.join(process.cwd(), "src/content/writings");

function readPostFile(filename) {
  const slug = filename.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(WRITINGS_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? null,
    summary: data.summary ?? "",
    draft: Boolean(data.draft),
    content,
  };
}

export function getAllWritings({ includeDrafts = false } = {}) {
  if (!fs.existsSync(WRITINGS_DIR)) return [];

  return fs
    .readdirSync(WRITINGS_DIR)
    .filter((file) => /\.mdx?$/.test(file))
    .map(readPostFile)
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getWriting(slug) {
  const mdx = path.join(WRITINGS_DIR, `${slug}.mdx`);
  const md = path.join(WRITINGS_DIR, `${slug}.md`);
  const filename = fs.existsSync(mdx)
    ? `${slug}.mdx`
    : fs.existsSync(md)
      ? `${slug}.md`
      : null;
  if (!filename) return null;
  return readPostFile(filename);
}

export function formatDate(date) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
