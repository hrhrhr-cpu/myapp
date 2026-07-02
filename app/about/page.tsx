import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于 Next.js",
  description: "了解 Next.js 的核心概念、特性与工作原理",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col py-16 px-6 bg-white dark:bg-black sm:px-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50 mb-4">
            关于 Next.js
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Next.js 是一个基于 React 的全栈 Web 框架，由 Vercel 维护。它提供了构建现代 Web
            应用所需的工具与约定，让开发者能够轻松实现高性能、可扩展、SEO 友好的应用。
          </p>
        </div>

        {/* Why Next.js */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-6">
            为什么选择 Next.js？
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <HighlightCard
              title="全栈能力"
              description="前端渲染、后端 API、数据库访问、缓存策略一体化，无需拼凑多个工具。"
            />
            <HighlightCard
              title="性能优先"
              description="内置代码分割、图片优化、字体优化、流式传输，让页面加载更快。"
            />
            <HighlightCard
              title="SEO 友好"
              description="支持服务端渲染与静态生成，搜索引擎更容易抓取页面内容。"
            />
            <HighlightCard
              title="开发者体验"
              description="快速刷新、TypeScript 支持、清晰的路由约定，减少配置负担。"
            />
          </div>
        </section>

        {/* Core Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-6">
            核心概念
          </h2>
          <div className="grid gap-6">
            <ConceptCard
              title="App Router"
              description="Next.js 推荐的路由方式，使用 app/ 目录组织页面。文件夹即路由，特殊文件约定决定 UI 结构。"
              code={`app/
├── page.tsx        // 首页 /
├── layout.tsx      // 根布局
├── about/
│   └── page.tsx    // /about
└── blog/
    ├── page.tsx    // /blog
    └── [slug]/
        └── page.tsx // /blog/:slug`}
            />

            <ConceptCard
              title="服务端组件 Server Components"
              description="Next.js 默认在服务器端渲染组件，可以直接访问数据库、文件系统或调用私有 API，减少发送到客户端的 JavaScript。"
              code={`// 默认即为 Server Component
export default async function Page() {
  const data = await fetch('https://api.example.com/data')
  const items = await data.json()
  return (
    <ul>
      {items.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  )
}`}
            />

            <ConceptCard
              title="客户端组件 Client Components"
              description="当需要交互、浏览器 API 或 React 状态时，在文件顶部添加 'use client'，让组件在浏览器中运行。"
              code={`'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(c => c + 1)}>
      点击了 {count} 次
    </button>
  )
}`}
            />

            <ConceptCard
              title="布局 Layouts"
              description="layout.tsx 定义共享 UI，在页面切换时保持状态。根布局必须包含 <html> 和 <body>。"
              code={`export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>
        <nav>导航栏</nav>
        <main>{children}</main>
        <footer>页脚</footer>
      </body>
    </html>
  )
}`}
            />

            <ConceptCard
              title="数据获取 Data Fetching"
              description="服务端组件支持直接 await 数据请求，可复用 fetch、ORM 或原生数据库驱动。"
              code={`// 使用 fetch API
export default async function Page() {
  const res = await fetch('https://api.example.com/posts')
  const posts = await res.json()
  return <PostList posts={posts} />
}

// 使用数据库
import { db } from '@/lib/db'
export default async function Page() {
  const users = await db.select().from(usersTable)
  return <UserList users={users} />
}`}
            />

            <ConceptCard
              title="流式传输 Streaming"
              description="通过 Suspense 与 loading.tsx，让静态内容先渲染，动态内容加载完成后逐步替换。"
              code={`// app/blog/loading.tsx
export default function Loading() {
  return <div className="animate-pulse">加载中...</div>
}

// app/blog/page.tsx
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <PostList />
    </Suspense>
  )
}`}
            />

            <ConceptCard
              title="服务端动作 Server Actions"
              description="使用 'use server' 定义在服务器执行的函数，可直接处理表单提交、数据库写入等操作。"
              code={`'use server'

import { revalidatePath } from 'next/cache'

export async function createPost(formData: FormData) {
  const title = formData.get('title')
  await db.post.create({ data: { title } })
  revalidatePath('/posts')
}`}
            />

            <ConceptCard
              title="缓存 Caching"
              description="Next.js 提供多层缓存机制，包括路由缓存、数据缓存、请求记忆化等，提升性能与稳定性。"
              code={`import { cacheLife } from 'next/cache'

export async function getUsers() {
  'use cache'
  cacheLife('hours')
  return db.query('SELECT * FROM users')
}`}
            />

            <ConceptCard
              title="路由处理器 Route Handlers"
              description="使用 route.ts 创建自定义 API 端点，支持 GET、POST、PUT、DELETE 等所有 HTTP 方法。"
              code={`// app/api/users/route.ts
export async function GET() {
  const users = await db.select().from(usersTable)
  return Response.json(users)
}

export async function POST(request: Request) {
  const body = await request.json()
  const user = await db.insert(usersTable).values(body)
  return Response.json(user, { status: 201 })
}`}
            />

            <ConceptCard
              title="元数据 Metadata"
              description="通过导出 metadata 对象管理页面标题、描述、Open Graph 等头部信息，提升 SEO 与分享效果。"
              code={`import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '页面标题',
  description: '页面描述',
  openGraph: {
    title: 'OG 标题',
    images: ['/og-image.png'],
  },
}`}
            />

            <ConceptCard
              title="图片优化 Image Optimization"
              description="使用 next/image 自动优化图片尺寸、格式与加载策略，支持响应式与懒加载。"
              code={`import Image from 'next/image'

export default function Page() {
  return (
    <Image
      src="/photo.jpg"
      alt="描述"
      width={800}
      height={600}
      priority
    />
  )
}`}
            />

            <ConceptCard
              title="动态路由 Dynamic Routes"
              description="使用方括号创建动态路由段，可结合 generateStaticParams 在构建时生成静态页面。"
              code={`// app/blog/[slug]/page.tsx
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)
  return <article>{post.content}</article>
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map(post => ({ slug: post.slug }))
}`}
            />
          </div>
        </section>

        {/* Rendering Strategies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-6">
            渲染策略
          </h2>
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 p-4">
                <h3 className="font-semibold text-black dark:text-zinc-50 mb-2">静态生成</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">构建时生成页面，适合内容变化不频繁的博客、文档等。</p>
              </div>
              <div className="rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 p-4">
                <h3 className="font-semibold text-black dark:text-zinc-50 mb-2">服务端渲染</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">请求时服务器渲染，适合需要实时数据或个性化内容的页面。</p>
              </div>
              <div className="rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 p-4">
                <h3 className="font-semibold text-black dark:text-zinc-50 mb-2">客户端渲染</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">在浏览器中渲染，适合强交互、仪表盘或需要浏览器 API 的场景。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Next.js 16.2.10 · React 19 · TypeScript
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

function HighlightCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-5">
      <h3 className="font-semibold text-black dark:text-zinc-50 mb-2">{title}</h3>
      <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
}

function ConceptCard({
  title,
  description,
  code,
}: {
  title: string;
  description: string;
  code: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6">
      <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">
        {title}
      </h3>
      <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400 mb-4">
        {description}
      </p>
      <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-zinc-100 dark:bg-black dark:border dark:border-zinc-800">
        <code>{code}</code>
      </pre>
    </div>
  );
}
