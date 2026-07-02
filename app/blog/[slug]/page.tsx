import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/lib/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "文章未找到",
    };
  }

  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col py-16 px-6 bg-white dark:bg-black sm:px-16">
        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black dark:text-zinc-50 mb-4">
            {post.title}
          </h1>

          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            发布于 {post.date}
          </p>
        </div>

        {/* Cover Image */}
        <div className="mb-10 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-64 sm:h-80 object-cover"
            priority
          />
        </div>

        {/* Content */}
        <article className="mb-12">
          {post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="text-2xl font-semibold text-black dark:text-zinc-50 mt-10 mb-4"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }

            if (paragraph.startsWith("- ")) {
              return (
                <ul
                  key={index}
                  className="list-disc list-inside space-y-2 my-4 text-zinc-600 dark:text-zinc-400"
                >
                  {paragraph.split("\n").map((item, i) => (
                    <li key={i}>{item.replace("- ", "")}</li>
                  ))}
                </ul>
              );
            }

            return (
              <p
                key={index}
                className="text-base leading-7 text-zinc-600 dark:text-zinc-400 mb-5"
              >
                {paragraph}
              </p>
            );
          })}
        </article>

        {/* Footer */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <Link
            href="/blog"
            className="text-sm font-medium text-zinc-950 dark:text-zinc-50 hover:underline"
          >
            ← 返回博客列表
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-zinc-950 dark:text-zinc-50 hover:underline"
          >
            返回首页
          </Link>
        </div>
      </main>
    </div>
  );
}
