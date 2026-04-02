// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import devtoolBreakpoints from "astro-devtool-breakpoints";

import lenis from "astro-lenis";

import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://510208.github.io",

  fonts: [
    {
      name: 'Noto Sans TC',
      cssVariable: '--font-noto',
      provider: fontProviders.fontsource(),
      weights: ['100', '200', '400', '500', '700'],
      subsets: ['chinese-traditional', 'latin'], 
      fallbacks: [],
    },
    {
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.fontsource(),
      weights: ['100', '200', '400', '500', '700'],
      subsets: ['latin'],
      fallbacks: [],
    },
    {
      provider: fontProviders.local(),
      name: "ChenYuluoyan 2.0",
      cssVariable: "--font-chenyuluoyan",
      options: {
        variants: [{
          src: ['./src/assets/fonts/ChenYuluoyan-2.0-Thin.woff2'],
          weight: 'normal',
          style: 'normal'
        }]
      },
    },
    {
      provider: fontProviders.local(),
      name: "Maple Font",
      cssVariable: "--font-maple",
      options: {
        variants: [{
          src: ['./src/assets/fonts/SamhackerMapleFontMono-Regular.woff2'],
          weight: 'normal',
          style: 'normal'
        }]
      }
    }
  ],

  integrations: [react(), devtoolBreakpoints(), lenis(), partytown({
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
  }), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});