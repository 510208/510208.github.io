import React, { useEffect, useState } from "react";
import { Skeleton } from "@ui/skeleton";
import { type DashboardFeature } from "@/lib/dashboard/types";
import getDashboardFeatures from "@/lib/dashboard/dashboard-card";
import { cn } from "@/lib/utils";

function DashboardCard({
  children,
  className,
  link,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  link: string;
  style?: React.CSSProperties;
}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={cn(
          "rounded-lg border border-stone-700 bg-stone-800/50 p-4 shadow-lg backdrop-blur-md transition-all duration-300 py-10 px-2 hover:bg-stone-700/50",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </a>
  );
}

function DashboardCardSkeleton() {
  return (
    <DashboardCard>
      <div className="flex gap-1 justify-center tracking-widest mb-4">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-6 w-32" />
      </div>
      <Skeleton className="h-10 w-48 mx-auto" />
    </DashboardCard>
  );
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
      <div className="columns-1 sm:columns-2 lg:columns-3 [column-gap:1rem]">
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
          style={{
            background: `radial-gradient(at bottom center, ${hexToRgba(item.color.primary, 0.3)} 0%, rgba(255,255,255,0.1) 30%)`,
          }}
          link={item.link}
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
          <p className="text-3xl text-center font-mono font-bold text-white">
            {item.description}
          </p>
        </DashboardCard>
      ))}
    </div>
  );
}
