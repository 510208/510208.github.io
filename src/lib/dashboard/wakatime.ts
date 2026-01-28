import { SiWakatime } from "@icons-pack/react-simple-icons";
import { type DashboardFeature } from "./types";

type WakaTimeData = {
  total_seconds: number;
  text: string;
  decimal: string;
  digital: string;
  daily_average: number;
  is_up_to_date: boolean;
  percent_calculated: boolean;
  range: {
    start: string;
    start_date: string;
    start_text: string;
    end: string;
    end_date: string;
    end_text: string;
    timezone: string;
  };
  timeout: number;
};

async function fetchWakaTimeData(): Promise<WakaTimeData | null> {
  try {
    // 開發環境使用 Vite proxy，生產環境直接呼叫 API
    const apiUrl =
      "https://api.samhacker.xyz/wakatime_sh?path=/api/v1/users/SamHacker/all_time_since_today";

    console.debug("Fetching WakaTime data from:", apiUrl);

    const res = await fetch(apiUrl);

    if (!res.ok) {
      console.error(
        `Failed to fetch WakaTime data: ${res.status} ${res.statusText}`,
      );
      return null;
    }

    const data = (await res.json()).data as WakaTimeData;
    console.debug("WakaTime data received:", data);

    return data;
  } catch (error) {
    console.error("Error fetching WakaTime data:", error);
    return null;
  }
}

function buildWakaTimeCard(data: WakaTimeData | null): DashboardFeature {
  if (!data) {
    return {
      title: "累計開發時間",
      description: "載入中...",
      link: "https://wakatime.com/@SamHacker",
      image: SiWakatime,
      source: "WakaTime API",
      color: { primary: "#FFFFFF" },
    };
  }

  // 透過total_seconds計算更精確的時間顯示
  const hours = Math.floor(data?.total_seconds / 3600);
  const minutes = Math.floor((data?.total_seconds % 3600) / 60);
  const formattedTime = data ? `${hours} 小時 ${minutes} 分鐘` : "載入中...";
  if (data) {
    data.text = formattedTime;
  }

  return {
    title: "累計開發時間",
    description: data?.text || "載入中...",
    link: "https://wakatime.com/@SamHacker",
    image: SiWakatime,
    source: "WakaTime API",
    color: { primary: "#FFFFFF" },
  };
}

async function getWakatimeFeatures(): Promise<DashboardFeature[]> {
  const wakaTimeData = await fetchWakaTimeData();
  return [buildWakaTimeCard(wakaTimeData)];
}

export { getWakatimeFeatures };
