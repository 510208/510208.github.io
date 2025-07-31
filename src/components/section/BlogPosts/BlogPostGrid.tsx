import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { UserPen, Calendar } from "lucide-react";

interface BlogPost {
  featuredImage: string;
  id: string;
  title: string;
  excerpt: string;
  date: string;
  uri: string;
  author: {
    name: string;
    avatar: string;
  };
}

export const BlogPostGrid = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/posts-data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch posts data");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center p-4">載入中...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">錯誤: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {posts.map((post) => (
        <Card
          key={post.id}
          className="bg-white dark:bg-gray-800 transition-transform transform duration-300 hover:scale-101"
        >
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-auto object-cover rounded-t-lg"
          />
          <CardHeader>
            <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
            <CardDescription className="text-gray-500">
              <span dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <UserPen size={18} />
              &nbsp;作者: {post.author.name}
            </p>
            <p className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <Calendar size={18} />
              &nbsp;日期: {new Date(post.date).toLocaleDateString("zh-TW")}
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" asChild>
              <a
                href={`https://samhacker.xyz${post.uri}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                閱讀更多
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
      <Card className="bg-white dark:bg-gray-800 transition-transform transform duration-300 hover:scale-101">
        <img
          src="/assets/blog-thumbnail.webp"
          alt="網站OG圖片"
          className="w-full h-auto object-cover rounded-t-lg"
        />
        <CardHeader>
          <CardTitle className="text-xl font-bold">更多文章</CardTitle>
          <CardDescription className="text-gray-500">
            <span>你想探索更多精彩內容嗎？來我的部落格逛逛吧！</span>
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="outline" size="sm" asChild>
            <a href="https://samhacker.xyz" target="_blank">
              立即前往
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
