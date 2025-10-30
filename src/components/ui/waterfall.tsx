import * as React from "react";
import { cn } from "@/lib/utils";

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
   * 外層容器的 className。可自定 columns-* 響應式欄數與 column-gap。
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
};

/**
 * WaterFall（瀑布流）
 * - 以 CSS Columns 實作，需搭配 .break-inside-avoid 避免項目被分割。
 * - 預設欄數：1 / 2 / 3 / 4（對應 sm/lg/xl 斷點）。
 * - 預設欄間距：1rem。
 */
export function WaterFall<T = unknown>({
  items,
  renderItem,
  children,
  className,
  itemClassName,
  columnGap,
}: WaterFallProps<T>) {
  const style =
    columnGap !== undefined
      ? ({
          columnGap:
            typeof columnGap === "number" ? `${columnGap}px` : columnGap,
        } as React.CSSProperties)
      : undefined;

  return (
    <div
      className={cn(
        // 預設 1/2/3/4 欄與 1rem 欄間距
        "columns-1 sm:columns-2 lg:columns-3 [column-gap:1rem]",
        className
      )}
      style={style}
    >
      {items && renderItem
        ? items.map((it, idx) => (
            <div
              key={idx}
              className={cn("mb-4 break-inside-avoid", itemClassName)}
            >
              {renderItem(it, idx)}
            </div>
          ))
        : React.Children.map(children, (child, idx) => (
            <div
              key={idx}
              className={cn("mb-4 break-inside-avoid", itemClassName)}
            >
              {child}
            </div>
          ))}
    </div>
  );
}

export default WaterFall;
