import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

interface ArticleMeta {
  title: string;
  date: string;
  image: string;
  author: string;
  summary: string;
  slug: string;
}

export default async function JournalPage() {
  const contentDir = path.join(process.cwd(), "src/content/journal");
  let files: string[] = [];
  try {
    files = fs.readdirSync(contentDir);
  } catch (e) {
    // Directory might not exist yet
  }

  const articles: ArticleMeta[] = files
    .filter((filename) => filename.endsWith(".mdx") || filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug: filename.replace(/\.mdx?$/, ""),
        title: data.title || "Untitled",
        date: data.date || "",
        image: data.image || "/images/og-image.jpg",
        author: data.author || "Unknown",
        summary: data.summary || "",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-brand-text tracking-tight mb-4">
          The Journal
        </h1>
        <p className="text-xl text-brand-muted max-w-2xl font-light">
          Editorial perspectives on preservation, mechanical artistry, and automotive culture.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/journal/${article.slug}`}
            className="group block"
          >
            <article className="space-y-6">
              <div className="aspect-[4/3] relative overflow-hidden bg-brand-surface border border-brand-border/50">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-brand-muted uppercase tracking-widest">
                  <time dateTime={article.date}>{article.date}</time>
                  <span>•</span>
                  <span>{article.author}</span>
                </div>
                <h2 className="text-2xl font-serif leading-snug group-hover:text-amber-500 transition-colors">
                  {article.title}
                </h2>
                <p className="text-brand-muted line-clamp-2 leading-relaxed font-light">
                  {article.summary}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
