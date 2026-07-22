import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { type DashboardFeature } from "@/lib/dashboard/types";
import { Skeleton } from "@ui/skeleton";

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
  const containerRef = useRef<HTMLAnchorElement>(null);
  const [animatedValue, setAnimatedValue] = useState(0);

  // 使用 useGSAP 處理動畫，自動處理組件生命週期與記憶體回收
  useGSAP(
    () => {
      if (item.description === undefined) return;

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
    },
    { scope: containerRef, dependencies: [item.description, index] },
  );

  const displayValue =
    item.description !== undefined
      ? preserveOriginalFormat(animatedValue, item.description)
      : item.description;

  // 建立符合 HM1240404E 無障礙規範的連結提示字串
  const linkAccessibleText = `查看${item.title}數據統計（另開新視窗）`;

  return (
    <a
      ref={containerRef}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      title={linkAccessibleText}
      aria-label={linkAccessibleText}
    >
      <div
        className="group overflow-hidden rounded-lg border border-stone-700 bg-stone-800/50 px-2 py-8 shadow-lg backdrop-blur-md transition-all duration-200 hover:-translate-y-2 hover:bg-stone-700"
        style={{
          background: `radial-gradient(at bottom center, ${hexToRgba(item.color.primary, 0.3)} 0%, rgba(255,255,255,0.1) 30%)`,
        }}
      >
        <div className="mb-4 flex items-center justify-center gap-1 tracking-widest">
          <div className="mr-2 flex items-center justify-center rounded-lg border-none bg-transparent p-2">
            <item.image className="h-6 w-6" color={item.color.primary} />
          </div>
          <h2
            className="font text-xl text-white"
            style={{
              color: item.color.primary,
            }}
          >
            {item.title}
          </h2>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-0 bg-stone-500/50 transition-all duration-200 group-hover:w-full"></div>

        <p className="text-center font-mono text-3xl font-bold text-white">
          {displayValue}
        </p>
      </div>
    </a>
  );
}

function DashboardCardSkeleton() {
  return (
    <div className="rounded-lg border border-stone-700 bg-stone-800/50 p-4 px-2 py-10 shadow-lg backdrop-blur-md">
      <div className="mb-4 flex justify-center gap-1 tracking-widest">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-6 w-32" />
      </div>
      <Skeleton className="mx-auto h-10 w-48" />
    </div>
  );
}

export { DashboardCard, DashboardCardSkeleton };
