// 向API端點https://api.lanyard.rest/v1/users/{user_id}

interface DiscordStats {
  discord_user: {
    // 使用者資料
    id: string; // 使用者ID
    username: string; // 使用者名稱
  };
  discord_status:
    | "online" // 線上
    | "idle" // 閒置
    | "dnd" // 勿擾模式
    | "offline"; // 離線
  activities: Array<{
    id: string; // 活動ID
    name: string; // 活動名稱
    type: string; // 活動類型
    url?: string; // 活動連結（如果有的話）
  }>;
  active_on: {
    desktop: boolean; // 是否在桌面上活躍
    web: boolean; // 是否在網頁上活躍
    mobile: boolean; // 是否在行動裝置上活躍
    embedded: boolean; // 是否在嵌入式裝置上活躍
  };
}

// 活動類型的對應：
const ACTIVITY_TYPE_MAP: Record<string, string> = {
  0: "正在玩遊戲",
  1: "正在直播",
  2: "正在聆聽",
  3: "正在觀看",
  4: "自訂狀態",
  5: "正在競賽",
};

// 打包成靜態仍會使用fetch
async function getDiscordStats(userId: string) {
  const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch Discord stats");
  }
  const data = await response.json();
  return data;
}

export default async function formatDiscordStats(
  userId: string = "959977374471028779",
): Promise<DiscordStats> {
  const data = await getDiscordStats(userId);
  // 將API傳回的資料中data/activities的type欄位進行格式化
  const stats: DiscordStats = data.data;
  stats.activities = stats.activities.map((activity) => ({
    ...activity,
    type: ACTIVITY_TYPE_MAP[activity.type] || activity.type,
  }));
  return stats;
}

export { formatDiscordStats, ACTIVITY_TYPE_MAP, type DiscordStats };
