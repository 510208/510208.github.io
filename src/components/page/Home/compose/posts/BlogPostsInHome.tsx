"use client";

import BlogCard from "@components/page/Home/compose/posts/BlogCard";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface BlogPost {
  title: string;
  description?: string;
  pubDate: string;
  link: string;
  heroImage?: string;
  category?: string | string[];
  tags?: string[];
}

export const BlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        setIsLoading(true);

        // 使用 CORS 代理抓取 RSS
        const response = await fetch(
          `https://api.allorigins.win/raw?url=${encodeURIComponent("https://samhacker.xyz/rss.xml")}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch RSS");
        }

        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");

        // 檢查解析錯誤
        const parseError = xmlDoc.querySelector("parsererror");
        if (parseError) {
          throw new Error("Error parsing RSS XML");
        }

        // 提取 RSS items
        const items = Array.from(xmlDoc.querySelectorAll("item"));

        // 解析並排序文章
        const parsedPosts = items.map((item) => {
          const title = item.querySelector("title")?.textContent || "無標題";
          const link = item.querySelector("link")?.textContent || "";
          const description =
            item.querySelector("description")?.textContent ||
            item.querySelector("content\\:encoded, encoded")?.textContent ||
            "";
          const pubDate =
            item.querySelector("pubDate")?.textContent ||
            new Date().toISOString();

          // 提取圖片
          const enclosure = item.querySelector("enclosure");
          const heroImage = enclosure?.getAttribute("url") || undefined;

          // 提取分類/標籤
          const categories = Array.from(item.querySelectorAll("category"))
            .map((cat) => cat.textContent)
            .filter(Boolean) as string[];

          return {
            title,
            description,
            pubDate,
            link,
            heroImage,
            category: categories.length > 0 ? categories : undefined,
            tags: categories.length > 0 ? categories : undefined,
          };
        });

        // 依照 pubDate 排序（從新到舊）並取前 3 篇
        const latestPosts = parsedPosts
          .sort((a, b) => {
            const dateA = new Date(a.pubDate).getTime();
            const dateB = new Date(b.pubDate).getTime();
            return dateB - dateA; // 降序排列（新到舊）
          })
          .slice(0, 3);

        setPosts(latestPosts);
        setError(null);
      } catch (err) {
        console.error("Error fetching RSS:", err);
        setError("無法載入文章");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRSS();
  }, []);

  useEffect(() => {
    if (!isLoading && posts.length > 0 && cardsRef.current) {
      gsap.registerPlugin(ScrollTrigger);

      const cards = cardsRef.current.querySelectorAll(".blog-card-item");

      gsap.from(cards, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, [isLoading, posts]);

  if (error) {
    return <div className="text-center text-red-400 p-4">{error}</div>;
  }

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      ref={cardsRef}
    >
      {isLoading
        ? Array.from({ length: 3 }).map((_, index) => (
            <BlogCard
              key={index}
              title=""
              description=""
              pubDate=""
              href=""
              category={null}
              tags={null}
              isLoading={true}
            />
          ))
        : posts.map((post, index) => (
            <div key={index} className="blog-card-item">
              <BlogCard
                title={post.title}
                description={post.description}
                pubDate={post.pubDate}
                href={post.link}
                heroImage={post.heroImage}
                category={post.category || null}
                tags={post.tags || null}
              />
            </div>
          ))}
    </div>
  );
};

export default BlogPosts;
