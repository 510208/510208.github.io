import { getWakatimeFeatures } from "./wakatime";
import { getYouTubeFeatures } from "./yt-feature";
import { getGitHubFeature } from "./github";
import { getThreadsFeature } from "./threads";
import { getWebsiteFeature } from "./website";

import { type DashboardFeature } from "./types";

export default async function getDashboardFeatures(): Promise<
  DashboardFeature[]
> {
  const all_data = [];
  all_data.push(...(await getWakatimeFeatures()));
  all_data.push(...(await getYouTubeFeatures()));
  all_data.push(...(await getGitHubFeature()));
  all_data.push(...(await getThreadsFeature()));
  all_data.push(...(await getWebsiteFeature()));
  console.log("Dashboard Features:", all_data);
  return all_data.flat();
}
