"use client";

import { Card, CardContent, CardHeader } from "@ui/card.tsx";
import { CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";

interface BlogCardProps {
  title: string;
  description?: string;
  pubDate: string; // ISO string from server
  heroImage?: string;
  href: string;
  isLoading?: boolean;
  category: string | string[] | null;
  tags: string[] | null;
}

export default function BlogCard({
  title,
  description,
  pubDate,
  heroImage,
  href,
  category,
  tags,
  isLoading = false,
}: BlogCardProps) {
  const [formattedDate, setFormattedDate] = useState<string>("");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const date = new Date(pubDate);
    setFormattedDate(
      date.toLocaleDateString("zh-Hant", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    );
    setIsHydrated(true);
  }, [pubDate]);

  const handleCardClick = () => {
    window.location.href = href;
  };

  const handleCategoryClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div onClick={handleCardClick} className="block cursor-pointer">
      <Card
        className={`backdrop-blur-[10px] min-h-110 border border-white/10 rounded-[14px] transition-all hover:border-white/20 p-0 gap-3 overflow-hidden ${
          isLoading ? "bg-neutral-800" : "bg-neutral-900"
        } flex flex-col h-full relative group`}
      >
        {/* 背景圖層 */}
        {!isLoading && heroImage && (
          <div className="absolute inset-0 z-0 overflow-hidden rounded-[14px]">
            <img
              src={heroImage}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover opacity-10 group-hover:opacity-15 blur-[20px] group-hover:blur-[3px] scale-110 transition-all duration-300"
            />
          </div>
        )}

        <CardHeader className="p-0 pb-0 relative z-10">
          {/* Image */}
          <div className="h-50 overflow-hidden bg-neutral-700">
            {!isLoading && heroImage && (
              <img
                src={heroImage}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-2.5 p-6 pt-0 flex-1 relative z-10">
          {/* 主要內容區塊（flex-1 撐開空間） */}
          <div className="flex-1">
            {/* Title */}
            <h3
              className={`text-xl font-bold leading-normal ${
                isLoading
                  ? "h-8 bg-neutral-700 rounded-md animate-pulse"
                  : "text-white"
              }`}
            >
              {!isLoading && title}
            </h3>
            {/* Description */}
            {!isLoading && description && (
              <p className="text-neutral-400 text-sm line-clamp-2 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Metadata - 固定放在底部 */}
          <div className="flex items-center gap-3 text-sm text-neutral-500 flex-wrap">
            {!isLoading && isHydrated ? (
              <>
                {/* 文章發表日期 */}
                <div className="flex items-center gap-1.5">
                  <CalendarDays size={16} />
                  <time dateTime={pubDate}>{formattedDate}</time>
                </div>
              </>
            ) : isLoading ? (
              <div className="h-5 w-32 bg-neutral-700 rounded-md animate-pulse" />
            ) : null}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
