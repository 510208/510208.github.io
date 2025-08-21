import { promises as fs } from "fs";
import path from "path";

export default function AutoBuildStaticPagesPlugin() {
  const pages = ["/", "/friends", "/posts", "/projects"];

  return {
    name: "auto-build-static-pages",
    apply: "build",
    async closeBundle() {
      const distDir = path.resolve(process.cwd(), "dist");
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
        if (page === "/") {
          filePath = path.join(distDir, "index.html");
        } else {
          const dir = path.join(distDir, page);
          await fs.mkdir(dir, { recursive: true });
          filePath = path.join(dir, "index.html");
        }
        await fs.writeFile(filePath, indexHtml, "utf-8");
      }
      console.log(
        "Static pages generated:",
        pages
          .map((p) => (p === "/" ? "/index.html" : `${p}/index.html`))
          .join(", ")
      );
    },
  };
}
