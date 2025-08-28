import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pages = [
  {
    route: "/",
    meta: {
      title: "SamHacker的個人網站",
      description:
        "這裡是SamHacker的個人網站，歡迎來小站坐坐~~也歡迎交流技術、分享生活、互相認識認識。",
      image: "https://510208.github.io/assets/opengraph_images/home_og.png",
    },
  },
  {
    route: "/friends",
    meta: {
      title: "朋友列表 | SamHacker的個人網站",
      description:
        "這個頁面列出了我的所有朋友們，順便幫他們宣傳一下下。可以來逛逛喔~",
      image: "https://510208.github.io/assets/opengraph_images/friends_og.png",
    },
  },
  {
    route: "/blog-posts",
    meta: {
      title: "部落格文章 | SamHacker的個人網站",
      description:
        "我的部落格SamHacker Blog的文章列表，找時間應該會把它做成Headless WP，在這之前就先在這邊用著啦。",
      image:
        "https://510208.github.io/assets/opengraph_images/blog-posts_og.png",
    },
  },
  {
    route: "/projects",
    meta: {
      title: "專案列表 | SamHacker的個人網站",
      description:
        "這是我做的一些開源專案，雖然還是不大成熟，但歡迎研究一下，可以提PR或Issue更好！",
      image: "https://510208.github.io/assets/opengraph_images/projects_og.png",
    },
  },
  {
    route: "/equipments",
    meta: {
      title: "裝備清單 | SamHacker的個人網站",
      description: "我平常使用的設備與工具。如果你有興趣的話，可以參考看看。",
      image:
        "https://510208.github.io/assets/opengraph_images/equipments_og.png",
    },
  },
  {
    route: "/about",
    meta: {
      title: "關於我 | SamHacker的個人網站",
      description:
        "我的自我介紹、聯絡方式與社群媒體，也不知道會有誰想來找我，反正放著總沒錯。",
      image: "https://510208.github.io/assets/opengraph_images/about_og.png",
    },
  },
];

async function closeBundle() {
  const distDir = path.resolve(__dirname, "../dist");
  const indexHtmlPath = path.join(distDir, "index.html");
  let indexHtml;
  try {
    indexHtml = await fs.readFile(indexHtmlPath, "utf-8");
  } catch (err) {
    console.error("Cannot read index.html:", err);
    return;
  }

  for (const page of pages) {
    // Convert route to file path
    let filePath;
    if (page.route === "/") {
      filePath = path.join(distDir, "index.html");
    } else {
      const dir = path.join(distDir, page.route);
      await fs.mkdir(dir, { recursive: true });
      filePath = path.join(dir, "index.html");
    }

    // 插入 meta 標記
    let htmlWithMeta = indexHtml.replace(
      /<head>([\s\S]*?)<\/head>/i,
      (match) => {
        const metaTags = `\n    <title>${page.meta.title}</title>\n    <meta property="og:title" content="${page.meta.title}" />\n    <meta property="og:description" content="${page.meta.description}" />\n    <meta property="og:image" content="${page.meta.image}" />\n    <meta property="og:site_name" content="${page.meta.site_name}" />\n    <meta property="og:type" content="website" />\n    <meta name="description" content="${page.meta.description}" />\n  `;
        return `<head>${metaTags}${match.slice(6)}`;
      }
    );

    await fs.writeFile(filePath, htmlWithMeta, "utf-8");
  }
  console.log(
    "Static pages generated:",
    pages.map((p) => (p === "/" ? "/index.html" : `${p}/index.html`)).join(", ")
  );
}

closeBundle();
