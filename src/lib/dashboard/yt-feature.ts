import { SiYoutube } from "@icons-pack/react-simple-icons";
import { type DashboardFeature } from "./types";

type YouTubeData = {
  id: string;
  statistics: {
    viewCount: number;
    subscriberCount: number;
    hiddenSubscriberCount: boolean;
    videoCount: number;
  };
};

async function fetchYTData(): Promise<YouTubeData | null> {
  try {
    const apiUrl =
      "https://api.samhacker.xyz/youtube/v3/channels?id=UC6orwHdQNVzwHsA6M7HYD9g&part=statistics,id";

    console.debug("Fetching WakaTime data from:", apiUrl);

    const res = await fetch(apiUrl);

    if (!res.ok) {
      console.error(
        `Failed to fetch YouTube data: ${res.status} ${res.statusText}`,
      );
      return null;
    }

    const data = await res.json();
    if (
      !data ||
      !data.items ||
      !Array.isArray(data.items) ||
      data.items.length === 0
    ) {
      console.error(
        "Invalid API response: missing or empty 'items' array: ",
        data,
      );
      return null;
    }

    const ytData = data.items[0] as YouTubeData;
    console.debug("YouTube data received:", ytData);

    return ytData;
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    return null;
  }
}

function buildYouTubeCard(data: YouTubeData | null): DashboardFeature {
  return {
    title: "YouTube 訂閱人數",
    description:
      `${data?.statistics.subscriberCount.toString()} 人` || "載入中...",
    link: "https://www.youtube.com/channel/UC6orwHdQNVzwHsA6M7HYD9g",
    image: SiYoutube,
    source: "YouTube API",
    color: { primary: "#FF0000" },
  };
}

async function getYouTubeFeatures(): Promise<DashboardFeature[]> {
  const ytData = await fetchYTData();
  return [buildYouTubeCard(ytData)];
}

export { getYouTubeFeatures };
