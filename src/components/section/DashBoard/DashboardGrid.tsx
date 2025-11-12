import React, { useEffect, useState } from "react";
import WaterFall from "@/components/ui/waterfall";
import {
  getDashboardFeatures,
  type DashboardFeature,
} from "@/lib/dashboard-feat";

function DashboardCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="break-inside-avoid mb-4 rounded-lg bg-white/10 p-4 shadow-lg backdrop-blur-md transition hover:bg-white/20">
      {children}
    </div>
  );
}

export function DashboardGrid() {
  const [dashboardItems, setDashboardItems] = useState<DashboardFeature[]>([]);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const data = await getDashboardFeatures();
        if (mounted && Array.isArray(data)) setDashboardItems(data);
        console.debug("Fetched dashboard features:", data);
      } catch (error) {
        console.error("Error fetching dashboard features:", error);
      }
    };
    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <WaterFall
      items={dashboardItems}
      className="columns-1 sm:columns-2 lg:columns-3 [column-gap:1rem]"
      renderItem={(item) => (
        <DashboardCard key={item.link}>
          {item.image}
          <h2 className="text-xl font-bold mb-2">{item.title}</h2>
          <p className="text-sm mb-4">{item.description}</p>
        </DashboardCard>
      )}
    />
  );
}
