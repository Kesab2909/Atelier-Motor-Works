import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "src/content/journal");
  let files: string[] = [];
  try {
    files = fs.readdirSync(contentDir);
  } catch (e) {
    return [];
  }

  return files.map((filename) => ({
    slug: filename.replace(/\.mdx?$/, ""),
  }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  
  const contentDir = path.join(process.cwd(), "src/content/journal");
  const filePathMdx = path.join(contentDir, `${slug}.mdx`);
  const filePathMd = path.join(contentDir, `${slug}.md`);

  let fileContent = "";
  if (fs.existsSync(filePathMdx)) {
    fileContent = fs.readFileSync(filePathMdx, "utf8");
  } else if (fs.existsSync(filePathMd)) {
    fileContent = fs.readFileSync(filePathMd, "utf8");
  } else {
    notFound();
  }

  const { data, content } = matter(fileContent);

  return (
    <article className="min-h-screen pb-24 bg-brand-bg text-brand-text">
      <header className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={data.image || "/images/og-image.jpg"}
            alt={data.title}
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <div className="flex items-center justify-center space-x-3 text-sm uppercase tracking-widest mb-6 text-amber-500">
            <time dateTime={data.date}>{data.date}</time>
            <span>•</span>
            <span>{data.author}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight leading-tight mb-6">
            {data.title}
          </h1>
          <p className="text-lg md:text-xl font-light text-stone-300 max-w-2xl mx-auto italic">
            {data.summary}
          </p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 mt-16 md:mt-24">
        <div className="prose prose-lg prose-invert prose-stone mx-auto
          prose-headings:font-serif prose-headings:font-normal prose-h2:text-3xl
          prose-p:leading-relaxed prose-p:text-stone-300 prose-p:font-light
          prose-a:text-amber-500 prose-a:underline-offset-4 hover:prose-a:text-amber-400
          prose-blockquote:border-l-amber-500 prose-blockquote:font-serif prose-blockquote:text-xl
          prose-blockquote:italic prose-blockquote:text-stone-400
          prose-img:border prose-img:border-stone-800">
          <MDXRemote source={content} />
        </div>
        
        <hr className="my-16 border-stone-800" />
        
        <div className="text-center">
          <Link 
            href="/journal" 
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest hover:text-amber-500 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Journal</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
