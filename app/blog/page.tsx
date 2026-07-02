import type { Metadata } from "next";
import Link from "next/link";
import BlogList from "@/components/blog-list";

export const metadata: Metadata = {
  title: "博客",
  description: "探索 Next.js 与天气科学相关的文章",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col py-16 px-6 bg-white dark:bg-black sm:px-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50 mb-4">
            博客
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            分享关于 Next.js 开发、天气科学与生活观察的文章。
          </p>
        </div>

        {/* Blog Cards - Server Component */}
        <section className="mb-12">
          <BlogList />
        </section>

        {/* Footer */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            文章列表由服务端组件渲染
          </p>
          <Link
            href="/"
            className="text-sm font-medium text-zinc-950 dark:text-zinc-50 hover:underline"
          >
            ← 返回首页
          </Link>
        </div>
      </main>
    </div>
  );
}
