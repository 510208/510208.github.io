import { useEffect, useState, useRef } from "react";
import { type DashboardFeature } from "@/lib/dashboard/types";
import { Skeleton } from "@ui/skeleton";

// 動態導入 GSAP 以避免服務端渲染問題
let gsap: any = null;

if (typeof window !== "undefined") {
  import("gsap").then((module) => {
    gsap = module.gsap;
  });
}

// 提取數字部分用於動畫
const extractNumber = (val: string | number): number => {
  if (typeof val === "number") return val;
  const match = val.toString().match(/[\d,]+/);
  return match ? parseInt(match[0].replace(/,/g, ""), 10) : 0;
};

// 保留原始格式，只替換數字部分
const preserveOriginalFormat = (
  animatedNum: number,
  originalValue: string | number,
): string => {
  if (typeof originalValue === "number") return animatedNum.toString();

  const originalStr = originalValue.toString();
  const numberMatch = originalStr.match(/([\d,]+)/);

  if (!numberMatch) return originalStr;

  const originalNumber = numberMatch[0];
  const hasComma = originalNumber.includes(",");

  // 格式化動畫數字（保持千分位逗號格式）
  const formattedAnimatedNum =
    hasComma && animatedNum >= 1000
      ? animatedNum.toLocaleString()
      : animatedNum.toString();

  // 替換原始字串中的數字部分
  return originalStr.replace(/([\d,]+)/, formattedAnimatedNum);
};

function DashboardCard({
  item,
  index,
  hexToRgba,
}: {
  item: DashboardFeature;
  index: number;
  hexToRgba: (hex: string, alpha: number) => string;
}) {
  const numberRef = useRef<HTMLParagraphElement>(null);
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // 客戶端動畫效果
  useEffect(() => {
    if (
      isClient &&
      item.description !== undefined &&
      gsap &&
      numberRef.current
    ) {
      const targetValue = extractNumber(item.description);

      gsap.to(
        { value: 0 },
        {
          value: targetValue,
          duration: 2,
          ease: "power2.out",
          delay: 0.5 + index * 0.1, // 錯開動畫時間
          onUpdate: function () {
            setAnimatedValue(Math.floor(this.targets()[0].value));
          },
        },
      );
    }
  }, [isClient, item.description, index]);

  const displayValue =
    isClient && item.description !== undefined
      ? preserveOriginalFormat(animatedValue, item.description)
      : item.description;

  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      <div
        className="rounded-lg border border-stone-700 bg-stone-800/50 shadow-lg backdrop-blur-md transition-all duration-300 py-8 px-2 hover:bg-stone-700"
        style={{
          background: `radial-gradient(at bottom center, ${hexToRgba(item.color.primary, 0.3)} 0%, rgba(255,255,255,0.1) 30%)`,
        }}
      >
        <div className="flex gap-1 items-center justify-center tracking-widest mb-4">
          <div className="flex items-center justify-center p-2 bg-transparent border-none rounded-lg mr-2">
            <item.image className="h-6 w-6" color={item.color.primary} />
          </div>
          <h2
            className="text-xl font text-white"
            style={{
              color: item.color.primary,
            }}
          >
            {item.title}
          </h2>
        </div>
        <p
          ref={numberRef}
          className="text-3xl text-center font-mono font-bold text-white"
        >
          {displayValue}
        </p>
      </div>
    </a>
  );
}

function DashboardCardSkeleton() {
  return (
    <div className="rounded-lg border border-stone-700 bg-stone-800/50 p-4 shadow-lg backdrop-blur-md py-10 px-2">
      <div className="flex gap-1 justify-center tracking-widest mb-4">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-6 w-32" />
      </div>
      <Skeleton className="h-10 w-48 mx-auto" />
    </div>
  );
}

export { DashboardCard, DashboardCardSkeleton };
