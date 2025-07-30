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

// https://vite.dev/config/
export default defineConfig({
  plugins: [generateProjectsPlugin(), react(), tailwindcss(), legacy()],
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
