import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - 页面未找到",
  description: "您访问的页面不存在",
};

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-[60vh]">
      <div className="flex flex-col items-center text-center px-6">
        {/* 404 数字 */}
        <h1 className="text-9xl font-bold tracking-tighter text-zinc-200 dark:text-zinc-800 select-none">
          404
        </h1>

        {/* 错误信息 */}
        <div className="-mt-12 mb-8">
          <h2 className="text-3xl font-semibold text-black dark:text-zinc-50 mb-3">
            页面未找到
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 max-w-sm">
            抱歉，您访问的页面不存在或已被移除。
            <br />
            请检查 URL 是否正确，或返回首页浏览其他内容。
          </p>
        </div>

        {/* 返回按钮 */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            返回首页
          </Link>
          <Link
            href="/about"
            className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-8 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          >
            关于 Next.js
          </Link>
        </div>

        {/* 装饰性提示 */}
        <div className="mt-12 text-sm text-zinc-400 dark:text-zinc-600">
          <p>
            提示：Next.js 的{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs font-mono dark:bg-zinc-800">
              not-found.tsx
            </code>{" "}
            文件会自动处理不存在的路由
          </p>
        </div>
      </div>
    </div>
  );
}
