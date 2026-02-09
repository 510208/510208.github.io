import { useEffect, useState } from "react";
import { type DashboardFeature } from "@/lib/dashboard/types";
import getDashboardFeatures from "@/lib/dashboard/dashboard-card";

import { DashboardCard, DashboardCardSkeleton } from "./DashboardCard";

// 動態導入 GSAP 以避免服務端渲染問題
let gsap: any = null;

if (typeof window !== "undefined") {
  import("gsap").then((module) => {
    gsap = module.gsap;
  });
}

export function DashboardGrid() {
  const [dashboardItems, setDashboardItems] = useState<DashboardFeature[]>([]);
  const [loading, setLoading] = useState(true);

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getDashboardFeatures();
        if (mounted && Array.isArray(data)) {
          setDashboardItems(data);
          console.debug("Fetched dashboard features:", data);
        }
      } catch (error) {
        console.error("Error fetching dashboard features:", error);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  // 顯示 Skeleton 載入狀態
  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <DashboardCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {dashboardItems.map((item, index) => (
        <DashboardCard
          key={`${item.link}-${index}`}
          item={item}
          index={index}
          hexToRgba={hexToRgba}
        />
      ))}
    </div>
  );
}
