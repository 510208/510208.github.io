// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import devtoolBreakpoints from "astro-devtool-breakpoints";

// https://astro.build/config
export default defineConfig({
  site: "https://510208.github.io",
  integrations: [react(), devtoolBreakpoints()],
  vite: {
    plugins: [tailwindcss()],
  },
});
