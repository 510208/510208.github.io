import { SiInstagram } from "@icons-pack/react-simple-icons";
import { type DashboardFeature } from "./types";

interface CachedInstagramData {
  data: InstagramData;
  timestamp: number;
}

export interface InstagramData {
  profilePic: string;
  userName: string;
  followersCount: number;
  followsCount: number;
  timestamp: string;
  userUrl: string;
  userFullName: string;
  userId: string;
}

const CACHE_KEY = "ig_data_510208";
const CACHE_DURATION = 5 * 60 * 1000; // 5 分鐘

export async function fetchInstagramData(): Promise<InstagramData | null> {
  try {
    // 檢查 localStorage 中的快取資料
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      try {
        const parsed: CachedInstagramData = JSON.parse(cachedData);
        const now = Date.now();

        // 檢查快取是否過期
        if (now - parsed.timestamp < CACHE_DURATION) {
          console.log("Using cached Instagram data");
          return parsed.data;
        }
      } catch (parseError) {
        console.warn("Failed to parse cached Instagram data:", parseError);
        localStorage.removeItem(CACHE_KEY);
      }
    }

    const response = await fetch(
      "https://api.samhacker.xyz/instagram/account",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    );
    if (!response.ok) {
      console.error("Failed to fetch Instagram data:", response.statusText);
      return null;
    }

    const InstagramData = (await response.json()) as InstagramData;

    const cacheData: CachedInstagramData = {
      data: InstagramData,
      timestamp: Date.now(),
    };

    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (storageError) {
      console.warn("Failed to cache Instagram data:", storageError);
    }

    return InstagramData;
  } catch (error) {
    console.error("Error fetching Instagram data:", error);
    return null;
  }
}

function buildInstagramFollowerCard(
  data: InstagramData | null,
): DashboardFeature {
  if (!data) {
    return {
      title: "粉絲人數",
      description: "N/A",
      link: "https://www.Instagram.com/@samhacker.xyz",
      image: SiInstagram,
      source: "Meta Graph API",
      color: { primary: "#E56969" },
    };
  }

  return {
    title: "粉絲人數",
    description: `${data.followersCount} 位`,
    link: `https://www.Instagram.com/@samhacker.xyz`,
    image: SiInstagram,
    source: "Meta Graph API",
    color: { primary: "#E56969" },
  };
}

async function getInstagramFeature(): Promise<DashboardFeature[]> {
  const data = await fetchInstagramData();
  return [buildInstagramFollowerCard(data)];
}

export { getInstagramFeature };
