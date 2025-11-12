import React, { useEffect, useState } from "react";
import WaterFall from "@/components/ui/waterfall";
import { Skeleton } from "@/components/ui/skeleton";
import {
  getDashboardFeatures,
  type DashboardFeature,
} from "@/lib/dashboard-feat";

function DashboardCard({
  children,
  ...props
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`mb-4 rounded-lg border bg-white/10 p-4 shadow-lg backdrop-blur-md transition py-10 px-2 hover:bg-white/20     }]`}
      {...props}
    >
      {children}
    </div>
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
    <WaterFall
      items={dashboardItems}
      className="columns-1 sm:columns-2 lg:columns-3 [column-gap:1rem]"
      renderItem={(item) => (
        <DashboardCard key={item.link}>
          <div className="flex gap-1 justify-center tracking-widest mb-4">
            {item.image}
            <h2 className="text-xl font">{item.title}</h2>
          </div>
          <p
            className="text-3xl text-center font-mono font-bold"
            style={{ color: item.color.primary }}
          >
            {item.description}
          </p>
        </DashboardCard>
      )}
    />
  );
}
