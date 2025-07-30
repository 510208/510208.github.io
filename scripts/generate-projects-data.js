import { Octokit } from "@octokit/rest";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { graphql } from "@octokit/graphql";
import dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GH_TOKEN}`,
  },
});

// function getOpenGraphImageUrl(owner, repo) {
//   return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
// }

async function fetchOpenGraphImage(owner, repo) {
  try {
    const query = `
      query($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          openGraphImageUrl
        }
      }
    `;

    const variables = { owner, name: repo };
    const result = await graphqlWithAuth(query, variables);

    return result.repository.openGraphImageUrl;
  } catch (error) {
    console.error(
      `❌ 無法取得 ${owner}/${repo} 的 OpenGraphImage:`,
      error.message
    );
    return `https://opengraph.githubassets.com/1/${owner}/${repo}`; // 🛡️ fallback 保底
  }
}

async function fetchGitHubRepos(username = "510208") {
  const token = process.env.GH_TOKEN;
  if (!token) {
    throw new Error("請在 .env 文件中設置 GH_TOKEN");
  }
  console.log(`使用的 GitHub Token: ${token.slice(0, 5)}...`); // 🛡️ 安全起見只顯示前5位
  const octokit = new Octokit({
    auth: token,
  });

  try {
    const response = await octokit.rest.repos.listForUser({
      username,
      type: "owner",
      sort: "updated",
      direction: "desc",
      per_page: 50, // 獲取更多專案
    });

    return Promise.all(
      response.data.map(async (repo) => {
        const opengraphImageUrl = await fetchOpenGraphImage(
          repo.owner.login,
          repo.name,
          octokit
        );
        return {
          ...repo,
          opengraphImageUrl,
          slug: repo.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        };
      })
    );
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
