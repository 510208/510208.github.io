import * as React from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// 如果你在 SSR 環境（如 Next.js），需要在使用之前註冊
// 在這個組件內部註冊通常也是安全的
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export type WaterFallProps<T = unknown> = {
  /**
   * 資料陣列（可選）。若提供，需同時提供 renderItem。
   */
  items?: T[];
  /**
   * 針對 items 的渲染函式（可選）。
   */
  renderItem?: (item: T, index: number) => React.ReactNode;
  /**
   * 若不使用 items/renderItem，可直接傳 children。
   */
  children?: React.ReactNode;
  /**
   * 外層容器的 className。可自定 columns-* 韺應式欄數與 column-gap。
   */
  className?: string;
  /**
   * 每個項目外包一層容器的 className。
   */
  itemClassName?: string;
  /**
   * 自定義 column-gap。若提供，會以 style 設定（優先於 className 內的 [column-gap:*]）。
   */
  columnGap?: number | string;
  /**
   * 產生每個項目 key 的函式（建議）。若未提供，component 會嘗試使用 item.id / item.key,
   * 若仍取得不到，會在開發環境下 warn 並以 index 作為 fallback（不建議用於會動態增刪的列表）。
   */
  keyExtractor?: (item: T, index: number) => React.Key;
  /**
   * GSAP 動畫的交錯時間（以秒為單位）。預設為 0.1。
   */
  stagger?: number;
  /**
   * GSAP 動畫的持續時間（以秒為單位）。預設為 0.5。
   */
  duration?: number;
  /**
   * GSAP 動畫的垂直位移（以像素為單位）。預設為 50。
   */
  yOffset?: number;
};

/**
 * WaterFall（瀑布流）
 * - 以 CSS Columns 實作，需搭配 .break-inside-avoid 避免項目被分割。
 * - 預設欄數：1 / 2 / 3 / 4（對應 sm/lg/xl 斷點）。
 * - 預設欄間距：1rem。
 * - 使用 GSAP 加入各欄依序由下往上淡入的效果。
 */
export function WaterFall<T = unknown>({
  items,
  renderItem,
  children,
  className,
  itemClassName,
  columnGap,
  keyExtractor,
  stagger = 0.1,
  duration = 0.5,
  yOffset = 50,
}: WaterFallProps<T>) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const itemsRef = React.useRef<HTMLDivElement[]>([]);

  // 輔助函式：收集項目引用
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  // 在組件掛載時執行 GSAP 動畫
  useGSAP(() => {
    // 確保只在容器和項目都存在時執行
    if (containerRef.current && itemsRef.current.length > 0) {
      // 設置項目的初始狀態（淡出和向下位移）
      gsap.set(itemsRef.current, {
        opacity: 0,
        y: yOffset,
      });

      // 執行從初始狀態到目標狀態的動畫
      gsap.to(itemsRef.current, {
        opacity: 1,
        y: 0,
        stagger: stagger,
        duration: duration,
        ease: "power2.out", // 使用更平滑的緩動函數
        overwrite: true, // 防止動畫疊加
      });
    }

    // 清理函數：組件卸載時清除 refs 和動畫
    return () => {
      itemsRef.current = [];
      gsap.killTweensOf(itemsRef.current);
    };
  }, [items, children, stagger, duration, yOffset, containerRef]); // 依賴項

  const style =
    columnGap !== undefined
      ? ({
          columnGap:
            typeof columnGap === "number" ? `${columnGap}px` : columnGap,
        } as React.CSSProperties)
      : undefined;

  // helper: 嘗試從 item 取得自然 key（id/key），否則使用 keyExtractor，最後 fallback 為 index
  const resolveKey = (item: T, idx: number): React.Key => {
    if (keyExtractor) return keyExtractor(item, idx);

    if (item && typeof item === "object") {
      const obj = item as Record<string, unknown>;
      const maybe = obj.id ?? obj.key;
      if (
        maybe !== undefined &&
        maybe !== null &&
        (typeof maybe === "string" ||
          typeof maybe === "number" ||
          typeof maybe === "bigint")
      )
        return maybe;
    }
    return idx;
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        // 預設 1/2/3/4 欄與 1rem 欄間距
        "columns-1 sm:columns-2 lg:columns-3 [column-gap:1rem]",
        className,
      )}
      style={style}
    >
      {items && renderItem
        ? items.map((it, idx) => (
            <div
              key={resolveKey(it, idx)}
              className={cn("mb-4 break-inside-avoid", itemClassName)}
              ref={addToRefs}
            >
              {renderItem(it, idx)}
            </div>
          ))
        : React.Children.map(children, (child, idx) => {
            // 若 child 本身帶有 key (例如 React element)，則保留；否則以 index 作為 key（children 常為靜態）
            const childKey =
              React.isValidElement(child) && child.key != null
                ? child.key
                : idx;
            return (
              <div
                key={childKey}
                className={cn("mb-4 break-inside-avoid", itemClassName)}
                ref={addToRefs}
              >
                {child}
              </div>
            );
          })}
    </div>
  );
}

export default WaterFall;