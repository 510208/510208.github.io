// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import devtoolBreakpoints from "astro-devtool-breakpoints";

import lenis from "astro-lenis";

// https://astro.build/config
export default defineConfig({
  site: "https://510208.github.io",
  integrations: [react(), devtoolBreakpoints(), lenis()],
  vite: {
    plugins: [tailwindcss()],
  },
});