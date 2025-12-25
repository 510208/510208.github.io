import { SiYoutube } from "@icons-pack/react-simple-icons";
import { type DashboardFeature } from "./types";
import React from "react";

async function getYtFeature(): Promise<DashboardFeature> {
  return {
    title: "YouTube 頻道",
    description: "訂閱我的 YouTube 頻道，獲取最新的教學影片和技術分享！",
    link: "https://www.youtube.com/c/SamHacker",
    image: React.createElement(SiYoutube, { size: 24, color: "#FF0000" }),
    source: "YouTube",
    color: { primary: "#FF0000" },
  };
}
export { getYtFeature };
