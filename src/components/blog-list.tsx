import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPosts } from "@/lib/posts";

export default async function BlogList() {
  const posts = await getPosts();

  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <Card key={post.slug}>
          <img
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <div className="flex flex-wrap gap-2 mb-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link href={`/blog/${post.slug}`}>
              <CardTitle className="text-xl hover:text-primary/80 transition-colors">
                {post.title}
              </CardTitle>
            </Link>
            <CardDescription>{post.date}</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-sm leading-6 text-muted-foreground">
              {post.summary}
            </p>
          </CardContent>

          <CardFooter className="justify-start">
            <Button asChild variant="outline" size="sm">
              <Link href={`/blog/${post.slug}`}>阅读全文 →</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
