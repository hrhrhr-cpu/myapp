export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  image: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "hello-nextjs",
    title: "初识 Next.js：全栈 React 框架",
    date: "2026-07-01",
    summary:
      "Next.js 是构建现代 Web 应用的强大框架。本文介绍它的核心特性，以及为什么它成为 React 开发者的首选。",
    tags: ["Next.js", "React", "前端"],
    image: "https://picsum.photos/seed/nextjs/800/400",
    content: `Next.js 是一个基于 React 的全栈框架，由 Vercel 维护。它让开发者能够用统一的代码库构建高性能、SEO 友好的 Web 应用。

## 为什么使用 Next.js？

- 服务端渲染：页面可以在服务器上渲染，提升首屏加载速度和搜索引擎可索引性。
- 静态生成：构建时生成页面，适合内容驱动的网站。
- 文件系统路由：通过 app/ 目录组织路由，直观且易于维护。
- 全栈能力：支持 API 路由、服务端动作、数据库访问等。

## App Router

Next.js 13+ 引入了 App Router，使用 app/ 目录替代传统的 pages/ 目录。每个文件夹对应一个路由段，配合 page.tsx、layout.tsx 等文件约定，构建清晰的页面结构。

## 总结

Next.js 不仅是一个 React 框架，更是一个完整的全栈解决方案。无论你是构建个人博客、企业官网还是复杂的 SaaS 应用，Next.js 都能提供合适的工具与约定。`,
  },
  {
    slug: "weather-science",
    title: "天气背后的科学：云为什么会飘在空中？",
    date: "2026-07-02",
    summary:
      "一朵云可能重达百万公斤，但它却不会掉下来。本文用简单的原理解释云、雨和风是如何形成的。",
    tags: ["天气", "科学", "自然"],
    image: "https://picsum.photos/seed/weather/800/400",
    content: `抬头看天，我们常常能看到形态各异的云。你有没有想过，这些看似轻飘飘的云，其实可能重达数百万公斤？

## 云为什么会飘在空中？

云是由无数微小的水滴或冰晶组成的。虽然整体重量很大，但这些水滴非常细小，分散在巨大的空间中。同时，地面受热产生的上升气流不断托住它们，使它们能够悬浮在空中。

## 雨是如何形成的？

当云中的小水滴不断碰撞、合并，逐渐变大到空气无法托住时，就会以降水的形式落向地面。温度较低时，水蒸气会直接凝华成雪花；温度较高时，则形成雨滴。

## 风从哪里来？

风是空气从高气压区流向低气压区形成的。气压差越大，风速越快。台风、龙卷风都是大气中强烈气压差异的产物。

## 结语

天气是自然界最壮观的表演之一。了解它背后的科学，不仅能帮助我们更好地生活，也让我们对这个世界充满敬畏。`,
  },
];

export async function getPosts(): Promise<Post[]> {
  // 模拟服务端异步获取 mock 数据
  return new Promise((resolve) => {
    setTimeout(() => resolve(posts), 100);
  });
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
