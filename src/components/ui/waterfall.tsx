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
  keyExtractor,
}: WaterFallProps<T>) {
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
              >
                {child}
              </div>
            );
          })}
    </div>
  );
}

export default WaterFall;
