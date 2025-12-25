import { getWakatimeFeatures } from "./wakatime";
import { type DashboardFeature } from "./types";

export default async function getDashboardFeatures(): Promise<
  DashboardFeature[]
> {
  const all_data = [];
  all_data.push(await getWakatimeFeatures());
  return all_data.flat();
}
