import type { Project } from "@/types/shsite.projects";

// status: "on-going" - 仍在開發中
// status: "completed" - 已完成開發
// status: "paused" - 暫停開發
// status: "eol" - 已終止開發，有更佳的替代專案 (End of Life)
// status: "archived" - 已封存，終止開發但沒有更佳的替代專案

export const PROJECTS: Project[] = [
  // SHBlog Next
  {
    name: "SHBlog Next",
    opengraphImageUrl:
      "https://repository-images.githubusercontent.com/1107038747/b86c96ae-1a58-4df1-ac7a-3466150f338b",
    description:
      "一款簡潔輕巧、專為亞洲語系內容打造的Astro個人部落格模板，高度可客製化，適合個人部落格使用。",
    html_url: "https://github.com/510208/sh-blog-next",
    language: ["Astro", "React", "NodeJS", "TypeScript"],
    topics: [
      "astro",
      "astro-theme",
      "lucide-react",
      "nodejs",
      "open-source",
      "react",
      "samhacker",
      "theme",
    ],
    license: "MIT License",
  },
  // CFBot
  {
    name: "CFBot",
    opengraphImageUrl:
      "https://repository-images.githubusercontent.com/821410004/21471c43-2afd-46f2-81cf-0f806047dfa0",
    description:
      "這是一個高度可客製化、功能強大且完整的Discord機器人，專為Minecraft社群設計，提供多種實用功能和指令。",
    html_url: "https://github.com/510208/cfbot",
    language: "Python",
    topics: ["discord-bot", "discord.py", "minecraft", "python", "open-source"],
    license: "GNU General Public License v3.0",
  },
  // Browser Homepage
  {
    name: "SamHacker 的瀏覽器首頁",
    opengraphImageUrl:
      "https://github.com/510208/browser-homepage/raw/main/docs/image/image.png",
    description:
      "一個簡單且高度可自訂的瀏覽器首頁，提供快速存取常用網站和搜尋引擎的功能。",
    html_url: "https://github.com/510208/browser-homepage",
    language: ["JavaScript", "HTML5", "CSS3", "ViteJS"],
    topics: ["homepage", "customizable", "javascript", "vite", "vitejs"],
  },
  // MD5Hashing
  {
    name: "MD5Hashing (重製版)",
    opengraphImageUrl:
      "https://opengraph.githubassets.com/b676db6baf586e2c3cdee86d071b1f0c641d532001434097a766ebf0f8f4fffb/510208/MD5Hashing-NEW",
    description: "MD5Hashing的最新版介面，用簡單的UI擄獲許多使用者愛用的心",
    html_url: "https://github.com/510208/MD5Hashing-NEW",
    language: "VisualBasic",
    topics: [
      "binary",
      "done",
      "free",
      "github-pages",
      "lite",
      "md5",
      "md5-checksum",
      "md5-hash",
      "md5hashing",
      "open-source",
      "vb-net",
    ],
    license: "GNU General Public License v3.0",
    status: "completed",
  },
  // Personal Website Route
  {
    name: "Personal Website Route",
    opengraphImageUrl:
      "https://opengraph.githubassets.com/0892a5b7ab69393d94ced284a9e6dc7a8aec9d27b60033113ba1adc793708d3d/510208/personal-website-route",
    description:
      "本專案以 Cloudflare Workers 實作 API 路由，支援個人資訊查詢與 WakaTime API 代理。",
    html_url: "https://github.com/510208/personal-website-route",
    language: "JavaScript",
    topics: [
      "api",
      "cloudflare-workers",
      "personal-website",
      "proxy",
      "route",
      "waka-time",
    ],
  },
  // Personal Website
  {
    name: "個人網站",
    opengraphImageUrl:
      "https://opengraph.githubassets.com/c2f62548e4882a751ad58198d404733856c7c00b30fdd3da94f664cba48b3263/510208/510208.github.io",
    description: "我的個人網站，展示我的專案作品集、技能和友好連結。",
    html_url: "https://github.com/510208/510208.github.io",
    language: "React",
    topics: ["personal-website", "react", "samhacker", "vite", "vitejs"],
    license: "GNU General Public License v3.0",
  },
  // 諾瓦雷克斯帝國 身分證產生器
  {
    name: "諾瓦雷克斯帝國 身分證產生器",
    opengraphImageUrl:
      "https://github.com/510208/id_generator/raw/main/docs/assets/example_id.png",
    description:
      "一個用於生成微國家諾瓦雷克斯帝國虛構身分證的工具，支援多種格式和自訂選項。",
    html_url: "https://github.com/510208/id_generator",
    language: "Python",
    topics: ["id-generator", "微國", "yaml"],
    license: "GNU General Public License v3.0",
    status: "archived",
  },
  // MSICAO MRZ Generator
  {
    name: "MSICAO MRZ Generator",
    opengraphImageUrl:
      "https://github.com/510208/msicao-mrz-gen/raw/main/images/screenshot.png",
    description:
      "一個非常簡單土炮的 MRZ 產生器，用來產生符合「微國國際民航組織（MSICAO）」Doc 01 規定的微國護照可機讀區（MRZ）格式。並獲得MSICAO官方認可。",
    html_url: "https://github.com/510208/msicao-mrz-gen",
    language: ["HTML5", "CSS3", "JavaScript"],
    topics: ["mrz", "微國", "微國護照", "護照"],
    license: "GNU General Public License v3.0",
    status: "completed",
  },
  // CAPTool
  {
    name: "CAPTool",
    opengraphImageUrl:
      "https://opengraph.githubassets.com/c7b6c01fb747e6086940b9d425f373caab57803769c569c6869ab25874280802/510208/cap-tool",
    description:
      "一個用於計算國中教育會考的計算機，幫助學生快速計算分數和成績。",
    html_url: "https://github.com/510208/cap-tool",
    language: ["NextJS", "TypeScript", "React", "TailwindCSS"],
    topics: [
      "education",
      "exam-calculator",
      "score-calculator",
      "taiwan-cap-exam",
      "education-assessment",
    ],
    status: "completed",
  },
  // MinePlayer
  {
    name: "MinePlayer",
    opengraphImageUrl:
      "https://private-user-images.githubusercontent.com/107909497/381825407-505aa5a8-f301-4a03-8dd3-1f086dd769fe.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Njk0MTQwOTAsIm5iZiI6MTc2OTQxMzc5MCwicGF0aCI6Ii8xMDc5MDk0OTcvMzgxODI1NDA3LTUwNWFhNWE4LWYzMDEtNGEwMy04ZGQzLTFmMDg2ZGQ3NjlmZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMTI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDEyNlQwNzQ5NTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01MTM4YTQwYzJhYjE4OWI0ZTk3ODY1OGUzZTY4YjRjMTE3Y2ViMDkzYTMwYTdjYjBmYzUzODM0NWVkODFiZTE0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.aq0TmAzLQwIofYE6uWP51rzKOQWAlVx7w_byeIryAmw",
    description:
      "MinePlayer 是一款簡單的模組，可以提供使用者解析Minecraft玩家的資訊，例如UUID、名稱歷史等。",
    html_url: "https://github.com/510208/minePlayer",
    language: "Python",
    topics: [
      "minecraft",
      "minecraft-player",
      "minecraft-uuid",
      "uuid",
      "python-package",
    ],
    status: "completed",
    license: "GNU General Public License v3.0",
  },
  // Nether
  {
    name: "Nether",
    opengraphImageUrl:
      "https://opengraph.githubassets.com/11e1e62e396b2fa0b3cb5f006e1fda57584df261f7779515823eee1b088a2ceb/510208/nether",
    description:
      "Nether（原名 ObsidianCraftCoreBot）是一個提供給Minecraft社群使用的Discord機器人。目前已經由CFBot取代並終止開發",
    html_url: "https://github.com/510208/nether",
    language: "Python",
    topics: [
      "minecraft",
      "minecraft-player",
      "minecraft-uuid",
      "uuid",
      "python-package",
    ],
    status: "eol",
    license: "GNU General Public License v3.0",
  },
  // mpTranslate
  {
    name: "mpTranslate",
    opengraphImageUrl:
      "https://opengraph.githubassets.com/45f28e8fbe0ad3e6181a84f3313e0ba3c9402ed2980cdc30d48f948f0453af7e/510208/mpTranslate",
    description:
      "mpTranslate 是一個用於翻譯 Minecraft 語言檔案的工具，支援多種語言和格式。",
    html_url: "https://github.com/510208/mpTranslate",
    language: "Python",
    topics: [
      "minecraft",
      "minecraft-translation",
      "minecraft-language-file",
      "script",
    ],
    status: "paused",
  },
  // SamHacker's Command GUI
  {
    name: "SamHacker's Command GUI",
    opengraphImageUrl:
      "https://cdn-alt.modrinth.com/data/EiO1CcZN/images/2d154226fe25c33ab0556035cffc280c1a8c5869.png",
    description:
      "這是一款參考Forge平台的WorldHandler模組設計的Minecraft指令GUI版的輔助模組。它為有權限的玩家提供了一個方便的GUI介面來快速執行各種指令。",
    html_url: "https://github.com/510208/SamHacker-s-Command-GUI",
    language: "Java",
    topics: [
      "minecraft",
      "minecraft-mod",
      "mod",
      "forge",
      "command-gui",
      "mcreator",
    ],
    status: "paused",
  },
  // SafeCheck
  {
    name: "SafeCheck",
    opengraphImageUrl: "/assets/projects_og/safecheck.webp",
    description:
      "這是一款外連網址通知工具，它會自動將網站中的外部連結標記並在使用者點擊時發出通知，以提高網站的安全性和用戶體驗。",
    html_url: "https://github.com/510208/SafeCheck",
    language: ["HTML5", "CSS3", "JavaScript", "jQuery"],
    topics: ["external-link", "notification"],
    status: "archived",
    license: "GNU General Public License v3.0",
  },
  // SafeCheck WP
  {
    name: "SafeCheck WP",
    opengraphImageUrl:
      "https://ps.w.org/external-link-modifier-easy/assets/banner-1544x500.png?rev=2989080",
    description:
      "這是SafeCheck的WordPress外掛版本，但使用者需要額外部署SafeCheck來實現完整功能。目前已封存並終止開發。",
    html_url: "https://github.com/510208/SafeCheck-WP",
    language: "PHP",
    topics: ["wordpress", "plugin", "external-link", "notification"],
    status: "archived",
    license: "GNU General Public License v3.0",
  },
  // Custom New Tab
  {
    name: "custom new tab",
    opengraphImageUrl:
      "https://samhacker.xyz/_astro/samhacker_custom-browser-homepage_1.CNqCZQbq_ZTo6pg.webp",
    description:
      "一個使用純HTML、CSS和JavaScript製作的自訂瀏覽器新分頁，目前已由「SamHacker 的瀏覽器首頁」取代並終止開發。",
    html_url: "https://github.com/510208/custom-new-tab",
    language: ["HTML5", "CSS3", "JavaScript"],
    topics: ["browser", "new-tab", "extension", "customization"],
    status: "archived",
    license: "GNU General Public License v3.0",
  },
  // sRickroll
  {
    name: "sRickroll",
    opengraphImageUrl: "/assets/projects_og/srickroll.webp",
    description: "訪客只要到了你的網站，就會直接被瑞克搖！",
    html_url: "https://github.com/510208/sRickroll",
    language: ["JavaScript", "jQuery"],
    topics: ["rickroll", "prank", "javascript", "jquery"],
    status: "archived",
    license: "GNU General Public License v3.0",
  },
  // Ooen Col Select
  {
    name: "Ooen Col Select",
    opengraphImageUrl:
      "https://github.com/510208/OoenColSelect/raw/master/OoenColSelect-logo/default.png",
    description:
      "一個用於選擇顏色的簡單工具，支援多種顏色格式和自訂選項，目前已封存並終止開發。",
    html_url: "https://github.com/510208/OoenColSelect",
    language: "VisualBasic",
    topics: ["color-picker", "visual-basic", "vb6", "vb.net"],
    status: "archived",
  },
  // Random Num Selector
  {
    name: "隨機選號器",
    opengraphImageUrl: "/assets/projects_og/pgbnumselector.webp",
    description:
      "這是一個簡單的工具，可以幫助使用者從指定範圍內隨機選取數字，適用於各種場合，如抽獎、遊戲等。",
    html_url: "https://github.com/510208/random-num",
    language: ["HTML5", "CSS3", "JavaScript", "jQuery"],
    topics: ["random-number-selector", "javascript", "jquery"],
    status: "completed",
    license: "GNU General Public License v3.0",
  },
  // Random Password Generator
  {
    name: "隨機密碼產生器",
    opengraphImageUrl: "/assets/projects_og/pgbpasswordgen.webp",
    description:
      "這是一個簡單的工具，可以幫助使用者生成隨機密碼，支援多種選項和自訂設定，以提高密碼的安全性。",
    html_url: "https://github.com/510208/pwd-generator",
    language: ["HTML5", "CSS3", "JavaScript", "jQuery"],
    topics: ["random-password-generator", "javascript", "jquery"],
    status: "completed",
  },
  // 2048
  {
    name: "2048",
    opengraphImageUrl:
      "https://opengraph.githubassets.com/1cf95a6c3b020af119c7f5e5aa41ec0e5a806261ec567ff51adb1125609ee402/510208/2048-python",
    description:
      "這是一個使用pygame編寫的2048遊戲，讓玩家可以在終端機或視窗中體驗這款經典遊戲。",
    html_url: "https://github.com/510208/2048-python",
    language: "Python",
    topics: ["2048", "game", "pygame", "python"],
    status: "completed",
    license: "GNU Affero General Public License v3.0",
  },
];
