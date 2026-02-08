// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import devtoolBreakpoints from "astro-devtool-breakpoints";

import lenis from "astro-lenis";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://510208.github.io",
  integrations: [
    react(),
    devtoolBreakpoints(),
    lenis(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
        resolveUrl: function (url, location, type) {
          if (type === "script") {
            const proxyUrl = new URL(url.href);
            // 如果請求是 Google 相關，確保正確解析
            if (
              proxyUrl.hostname.includes("google-analytics.com") ||
              proxyUrl.hostname.includes("googletagmanager.com")
            ) {
              return proxyUrl;
            }
          }
          return url;
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
