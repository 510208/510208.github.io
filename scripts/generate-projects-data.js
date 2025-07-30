import { Octokit } from "@octokit/rest";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getOpenGraphImageUrl(owner, repo) {
  return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
}

async function fetchGitHubRepos(username = "510208") {
  const token = process.env.GITHUB_TOKEN;
  const octokit = new Octokit({
    auth: token,
  });

  try {
    const response = await octokit.rest.repos.listForUser({
      username,
      type: "owner",
      sort: "updated",
      direction: "desc",
      per_page: 100, // 獲取更多專案
    });

    return response.data.map((repo) => ({
      ...repo,
      opengraphImageUrl: getOpenGraphImageUrl(repo.owner.login, repo.name),
      slug: repo.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    }));
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    throw error;
  }
}

async function generateProjectsData() {
  try {
    console.log("開始獲取 GitHub 專案數據...");

    const repos = await fetchGitHubRepos();

    const projectsData = repos.map((repo) => ({
      name: repo.name,
      opengraphImageUrl: repo.opengraphImageUrl,
      description: repo.description,
      html_url: repo.html_url,
      language: repo.language,
      updated_at: repo.updated_at,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      topics: repo.topics,
      license: repo.license ? repo.license.name : null,
      fork: repo.fork,
      slug: repo.slug,
    }));

    // 過濾掉 Fork 的專案
    const filteredData = projectsData.filter((repo) => !repo.fork);

    console.log(`找到 ${filteredData.length} 個非 Fork 專案`);

    // 確保 public 目錄存在
    const publicDir = path.join(__dirname, "..", "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // 寫入 JSON 文件
    const outputPath = path.join(publicDir, "projects-data.json");
    fs.writeFileSync(outputPath, JSON.stringify(filteredData, null, 2), "utf8");

    console.log(`專案數據已成功寫入: ${outputPath}`);
    console.log(`包含 ${filteredData.length} 個專案`);
  } catch (error) {
    console.error("生成專案數據時發生錯誤:", error);
    process.exit(1);
  }
}

// 直接執行腳本
generateProjectsData();
