import { SiThreads } from "@icons-pack/react-simple-icons";
import { type DashboardFeature } from "./types";

export interface CachedThreadsData {
  timestamp: number;
  data: ThreadsData;
}

export interface ThreadsData {
  success: boolean;
  data: Data[];
  cached: boolean;
}

export interface Data {
  name: string;
  period: string;
  title: string;
  description: string;
  total_value: TotalValue;
  id: string;
}

export interface TotalValue {
  value: number;
}

const CACHE_KEY = "threads_data_510208";
const CACHE_DURATION = 5 * 60 * 1000; // 5 分鐘

export async function fetchThreadsData(): Promise<ThreadsData | null> {
  try {
    // 檢查 localStorage 中的快取資料
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      try {
        const parsed: CachedThreadsData = JSON.parse(cachedData);
        const now = Date.now();

        // 檢查快取是否過期
        if (now - parsed.timestamp < CACHE_DURATION) {
          console.log("Using cached Threads data");
          return parsed.data;
        }
      } catch (parseError) {
        console.warn("Failed to parse cached Threads data:", parseError);
        localStorage.removeItem(CACHE_KEY);
      }
    }

    const response = await fetch("https://api.samhacker.xyz/threads/account", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      console.error("Failed to fetch Threads data:", response.statusText);
      return null;
    }

    const threadsData = (await response.json()) as ThreadsData;

    const cacheData: CachedThreadsData = {
      data: threadsData,
      timestamp: Date.now(),
    };

    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (storageError) {
      console.warn("Failed to cache Threads data:", storageError);
    }

    return threadsData;
  } catch (error) {
    console.error("Error fetching Threads data:", error);
    return null;
  }
}

function buildThreadsFollowerCard(data: ThreadsData | null): DashboardFeature {
  if (!data) {
    return {
      title: "粉絲人數",
      description: "Unable to fetch Threads user data.",
      link: "https://www.threads.com/@samhacker.xyz",
      image: SiThreads,
      source: "Meta Graph API",
      color: { primary: "#ffffff" },
    };
  }

  return {
    title: "粉絲人數",
    description: `${data.data[0].total_value.value} 位`,
    link: `https://www.threads.com/@samhacker.xyz`,
    image: SiThreads,
    source: "Meta Graph API",
    color: { primary: "#ffffff" },
  };
}

async function getThreadsFeature(): Promise<DashboardFeature[]> {
  const data = await fetchThreadsData();
  return [buildThreadsFollowerCard(data)];
}

export { getThreadsFeature };
