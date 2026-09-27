// Credits: https://github.com/BryanSchuetz/astro-breakpoints
import type { AstroIntegration } from "astro";

import path from "path";
import url from "url";

const PKG_NAME = "astro-devtool-breakpoints";

const createPlugin = (): AstroIntegration => {
  return {
    name: PKG_NAME,

    hooks: {
      "astro:config:setup": async ({ command, addDevToolbarApp, logger }) => {
        if (command === "dev") {
          logger.info("[astro-devtool-breakpoints] Setting up");

          const importPath = path.dirname(url.fileURLToPath(import.meta.url));
          const pluginPath = path.join(importPath, "toolbar.ts");

          // @ts-ignore
          addDevToolbarApp(pluginPath);
        }
      },
    },
  };
};

export default createPlugin;
