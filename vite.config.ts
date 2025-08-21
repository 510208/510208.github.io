import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import legacy from "@vitejs/plugin-legacy";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

// 自定義插件：在構建前生成專案數據
function generateProjectsPlugin() {
  return {
    name: "generate-projects",
    buildStart: async () => {
      console.log("正在生成專案數據...");
      try {
        await execAsync(
          "node -r dotenv/config scripts/generate-projects-data.js"
        );
        console.log("專案數據生成完成");
      } catch (error) {
        console.error("生成專案數據時發生錯誤:", error);
        throw error;
      }
    },
  };
}

// 自訂義插件：在構建前生成部落格文章數據
function generateBlogPostsPlugin() {
  return {
    name: "generate-blog-posts",
    buildStart: async () => {
      console.log("正在生成部落格文章數據...");
      try {
        await execAsync(
          "node -r dotenv/config scripts/generate-blog-posts-data.js"
        );
        console.log("部落格文章數據生成完成");
      } catch (error) {
        console.error("生成部落格文章數據時發生錯誤:", error);
        throw error;
      }
    },
  };
}

function autoBuildStaticPagesPlugin() {
  return {
    name: "auto-build-static-pages",
    buildStart: async () => {
      console.log("正在自動構建靜態頁面...");
      try {
        await execAsync(
          "node -r dotenv/config scripts/auto-build-static-pages.js"
        );
        console.log("靜態頁面構建完成");
      } catch (error) {
        console.error("構建靜態頁面時發生錯誤:", error);
        throw error;
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    generateProjectsPlugin(),
    generateBlogPostsPlugin(),
    react(),
    tailwindcss(),
    legacy(),
    autoBuildStaticPagesPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
