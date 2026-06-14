// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import devtoolBreakpoints from "astro-devtool-breakpoints";
import lenis from "astro-lenis";
import sitemap from "@astrojs/sitemap";
import critters from 'astro-critters';

// https://astro.build/config
export default defineConfig({
  site: "https://samhacker.xyz",

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
      subsets: ['chinese-traditional', 'latin'], 
      fallbacks: ["sans-serif"],
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
      subsets: ['latin'],
      options: {
        variants: [{
          src: ['./src/assets/fonts/SamhackerMapleFontMono-Regular.woff2'],
          weight: 'normal',
          style: 'normal'
        }]
      }
    }
  ],

  integrations: [react(), devtoolBreakpoints(), lenis(), sitemap(), critters()],

  experimental: {
    rustCompiler: true
  },

  vite: {
    plugins: [tailwindcss()],
  },
});