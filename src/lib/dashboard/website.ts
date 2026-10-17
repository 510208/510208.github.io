import { Globe } from "lucide-react";
import { type DashboardFeature } from "./types";

export interface CachedWebsiteData {
  timestamp: number;
  data: WebsiteData;
}

export interface WebsiteData {
  success: boolean;
  data: Data;
}

export interface Data {
  totalViews: number;
}

const CACHE_KEY = "website_data_510208";
const CACHE_DURATION = 5 * 60 * 1000; // 5 分鐘

export async function fetchWebsiteData(): Promise<WebsiteData | null> {
  try {
    // 檢查 localStorage 中的快取資料
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      try {
        const parsed: CachedWebsiteData = JSON.parse(cachedData);
        const now = Date.now();

        // 檢查快取是否過期
        if (now - parsed.timestamp < CACHE_DURATION) {
          console.log("Using cached Website data");
          return parsed.data;
        }
      } catch (parseError) {
        console.warn("Failed to parse cached Website data:", parseError);
        localStorage.removeItem(CACHE_KEY);
      }
    }

    const response = await fetch("https://api.samhacker.xyz/ga/views", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      console.error("Failed to fetch Website data:", response.statusText);
      return null;
    }

    const websiteData = (await response.json()) as WebsiteData;

    const cacheData: CachedWebsiteData = {
      data: websiteData,
      timestamp: Date.now(),
    };

    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (storageError) {
      console.warn("Failed to cache Website data:", storageError);
    }

    return websiteData;
  } catch (error) {
    console.error("Error fetching Website data:", error);
    return null;
  }
}

function buildWebsiteFollowerCard(data: WebsiteData | null): DashboardFeature {
  if (!data) {
    return {
      title: "瀏覽次數",
      description: "N/A",
      link: "https://www.website.com/@samhacker.xyz",
      image: Globe,
      source: "Google Analytics API",
      color: { primary: "#69e9b7" },
    };
  }

  return {
    title: "瀏覽次數",
    description: `${data.data.totalViews} 人`,
    link: `https://www.website.com/@samhacker.xyz`,
    image: Globe,
    source: "Google Analytics API",
    color: { primary: "#69e9b7" },
  };
}

async function getWebsiteFeature(): Promise<DashboardFeature[]> {
  const data = await fetchWebsiteData();
  return [buildWebsiteFollowerCard(data)];
}

export { getWebsiteFeature };
