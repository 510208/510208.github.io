import { SiGithub } from "@icons-pack/react-simple-icons";
import { type DashboardFeature } from "./types";

import { Octokit } from "octokit";

type GitHubData = {
  login: string;
  followers: number;
  public_repos: number;
  avatar_url: string;
  html_url: string;
};

type CachedGitHubData = {
  data: GitHubData;
  timestamp: number;
};

const CACHE_KEY = "github_data_510208";
const CACHE_DURATION = 5 * 60 * 1000; // 5 分鐘

export async function fetchGitHubData(): Promise<GitHubData | null> {
  try {
    // 檢查 localStorage 中的快取資料
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      try {
        const parsed: CachedGitHubData = JSON.parse(cachedData);
        const now = Date.now();

        // 檢查快取是否過期
        if (now - parsed.timestamp < CACHE_DURATION) {
          console.log("Using cached GitHub data");
          return parsed.data;
        }
      } catch (parseError) {
        console.warn("Failed to parse cached GitHub data:", parseError);
        localStorage.removeItem(CACHE_KEY);
      }
    }

    // 快取過期或不存在，重新取得資料
    const octokit = new Octokit();
    const response = await octokit.rest.users.getByUsername({
      username: "510208",
    });
    console.log("Fetched fresh GitHub data:", response.data);

    const githubData = response.data as GitHubData;

    // 將新資料儲存至 localStorage
    const cacheData: CachedGitHubData = {
      data: githubData,
      timestamp: Date.now(),
    };

    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (storageError) {
      console.warn("Failed to cache GitHub data:", storageError);
    }

    return githubData;
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return null;
  }
}

function buildGitHubFollowerCard(data: GitHubData | null): DashboardFeature {
  if (!data) {
    return {
      title: "GitHub 關注者",
      description: "Unable to fetch GitHub user data.",
      link: "https://github.com/510208",
      image: SiGithub,
      source: "GitHub API",
      color: { primary: "#ffffff" },
    };
  }

  return {
    title: "GitHub 關注者",
    description: `${data.followers} 位`,
    link: `https://github.com/${data.login}`,
    image: SiGithub,
    source: "GitHub API",
    color: { primary: "#ffffff" },
  };
}

function buildGitHubRepoCard(data: GitHubData | null): DashboardFeature {
  if (!data) {
    return {
      title: "GitHub 公開儲存庫",
      description: "無法取得 GitHub 使用者資料。",
      link: "https://github.com/510208",
      image: SiGithub,
      source: "GitHub API",
      color: { primary: "#ffffff" },
    };
  }

  return {
    title: "GitHub 公開儲存庫",
    description: `${data.public_repos} 個儲存庫`,
    link: `https://github.com/${data.login}`,
    image: SiGithub,
    source: "GitHub API",
    color: { primary: "#ffffff" },
  };
}

async function getGitHubFeature(): Promise<DashboardFeature[]> {
  const data = await fetchGitHubData();
  return [buildGitHubFollowerCard(data), buildGitHubRepoCard(data)];
}

export { getGitHubFeature };
