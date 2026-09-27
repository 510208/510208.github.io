import fs from "node:fs";
import fsPromises from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";
import opentype from "opentype.js";
import wawoff2 from "wawoff2";

// 遞迴取得目錄下所有 HTML 檔案
async function getHtmlFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const res = path.resolve(dir, entry.name);
      return entry.isDirectory() ? getHtmlFiles(res) : res;
    }),
  );
  return files.flat().filter((file) => file.endsWith(".html"));
}

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * 遞迴取得目錄下所有指定副檔名的檔案路徑
 */
async function getFilesByExtension(dir, extension) {
  let results = [];
  try {
    const entries = await fsPromises.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.resolve(dir, entry.name);
      if (entry.isDirectory()) {
        const subFiles = await getFilesByExtension(fullPath, extension);
        results = results.concat(subFiles);
      } else if (entry.name.endsWith(extension)) {
        results.push(fullPath);
      }
    }
  } catch (error) {
    // 忽略目錄不存在之情況
  }
  return results;
}

async function getFontFileNameByPrefix(distPath, targetFontPrefix) {
  const htmlFiles = await getFilesByExtension(distPath, ".html");
  const astroDir = path.join(distPath, "_astro");
  const cssFiles = await getFilesByExtension(astroDir, ".css");
  const targetFiles = [...htmlFiles, ...cssFiles];

  const safePrefix = escapeRegExp(targetFontPrefix);
  const familyRegex = new RegExp(`font-family\\s*:\\s*['"]?${safePrefix}`, "i");
  const urlRegex = /url\((?:['"]?)(.*?)(?:['"]?)\)/i;

  for (const filePath of targetFiles) {
    const content = await fsPromises.readFile(filePath, "utf-8");
    const fontFaceBlocks = content.match(/@font-face\s*\{[^}]*\}/g) || [];

    for (const block of fontFaceBlocks) {
      if (familyRegex.test(block)) {
        const urlMatch = block.match(urlRegex);
        if (urlMatch && urlMatch[1]) {
          const rawUrl = urlMatch[1].split("?")[0];
          const fileName = path.basename(rawUrl);
          if (fileName && !fileName.startsWith("local(")) {
            return fileName;
          }
        }
      }
    }
  }

  return null;
}

async function generateFontSubset(text, distPath, targetFontPrefix) {
  console.log(
    `[Font Subsetter] 開始處理字體子集化，提取文字共 ${text.length} 個字元。`,
  );

  const fontFileName = await getFontFileNameByPrefix(
    distPath,
    targetFontPrefix,
  );

  if (!fontFileName) {
    console.error(
      `[Font Subsetter] 錯誤：找不到名稱前綴為 ${targetFontPrefix} 的 CSS/字體設定。`,
    );
    return;
  }

  const originalFontPath = await findFontPath(distPath, fontFileName);
  console.log(`[Font Subsetter] 載入字體檔案：${originalFontPath}`);

  let font;
  let originalSizeBytes = 0;

  try {
    const stats = await fsPromises.stat(originalFontPath);
    originalSizeBytes = stats.size;

    let fontBuffer = fs.readFileSync(originalFontPath);

    if (fontFileName.endsWith(".woff2")) {
      fontBuffer = Buffer.from(await wawoff2.decompress(fontBuffer));
    }

    const arrayBuffer = fontBuffer.buffer.slice(
      fontBuffer.byteOffset,
      fontBuffer.byteOffset + fontBuffer.byteLength,
    );
    font = opentype.parse(arrayBuffer);

    if (!font || !font.glyphs) {
      throw new Error("opentype.parse 無法解析字體資料結構。");
    }
  } catch (error) {
    console.error(
      `[Font Subsetter] 解析字體檔案失敗：${originalFontPath}`,
      error,
    );
    return;
  }

  const glyphs = [...new Set(text.split(""))].join("");
  const notdefGlyph = font.glyphs.get(0);
  if (notdefGlyph) {
    notdefGlyph.name = ".notdef";
  }

  const subGlyphs = notdefGlyph
    ? [notdefGlyph].concat(font.stringToGlyphs(glyphs))
    : font.stringToGlyphs(glyphs);

  const postScriptName =
    font.getEnglishName("postScriptName") || targetFontPrefix;
  const nameParts = postScriptName.split("-");
  const familyName = nameParts[0] || targetFontPrefix;
  const styleName = nameParts[1] || "Regular";

  const subsetFont = new opentype.Font({
    familyName: familyName,
    styleName: styleName,
    unitsPerEm: font.unitsPerEm,
    ascender: font.ascender,
    descender: font.descender,
    designer: font.getEnglishName("designer"),
    designerURL: font.getEnglishName("designerURL"),
    manufacturer: font.getEnglishName("manufacturer"),
    manufacturerURL: font.getEnglishName("manufacturerURL"),
    license: font.getEnglishName("license"),
    licenseURL: font.getEnglishName("licenseURL"),
    version: font.getEnglishName("version"),
    description: font.getEnglishName("description"),
    copyright:
      `This is a subset font of ${postScriptName}. ` +
      (font.getEnglishName("copyright") || ""),
    trademark: font.getEnglishName("trademark"),
    glyphs: subGlyphs,
  });

  try {
    const subsetArrayBuffer = subsetFont.toArrayBuffer();
    let subsetBuffer = Buffer.from(subsetArrayBuffer);

    if (fontFileName.endsWith(".woff2")) {
      subsetBuffer = Buffer.from(await wawoff2.compress(subsetBuffer));
    }

    const subsetSizeBytes = subsetBuffer.length;
    await fsPromises.writeFile(originalFontPath, subsetBuffer);

    const reductionPercent = (
      ((originalSizeBytes - subsetSizeBytes) / originalSizeBytes) *
      100
    ).toFixed(2);

    console.log(`[Font Subsetter] 字體子集化完成！`);
    console.log(` - 原始檔案大小：${formatBytes(originalSizeBytes)}`);
    console.log(` - 子集化後大小：${formatBytes(subsetSizeBytes)}`);
    console.log(` - 成功減少容量：${reductionPercent}%`);
  } catch (error) {
    console.error(`[Font Subsetter] 寫入子集字體檔案時發生錯誤：`, error);
  }
}

/**
 * 輔助函式：自動尋找字體檔案實體路徑
 */
async function findFontPath(distPath, fontFileName) {
  const fontInFontsDir = path.join(distPath, "_astro", "fonts", fontFileName);
  try {
    await fsPromises.access(fontInFontsDir);
    return fontInFontsDir;
  } catch {
    return path.join(distPath, "_astro", fontFileName);
  }
}

/**
 * Astro Font Subsetter Plugin
 * @param {Object} options - 設定選項
 * @param {string} [options.targetClass="font-funny"] - HTML 中套用目標字體的 CSS 類別名稱
 * @param {string} [options.targetFontPrefix="ChenYuluoyan"] - 目標字體名稱前綴
 */
export default function fontSubsetPlugin(options = {}) {
  const targetClass = options.targetClass || "font-funny";
  const targetFontPrefix = options.targetFontPrefix || "ChenYuluoyan";

  return {
    name: "astro-font-subsetter",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const distPath = fileURLToPath(dir);
        const htmlFiles = await getFilesByExtension(distPath, ".html");
        const textSet = new Set();

        for (const filePath of htmlFiles) {
          const htmlContent = await fsPromises.readFile(filePath, "utf-8");
          const $ = cheerio.load(htmlContent);

          $(`.${targetClass}`).each((_, element) => {
            const text = $(element).text();
            for (const char of text) {
              if (char.trim()) {
                textSet.add(char);
              }
            }
          });
        }

        const extractedText = Array.from(textSet).join("");
        console.log(`[Font Subsetter] 成功提取 ${textSet.size} 個獨特字元。`);

        if (textSet.size === 0) {
          console.warn(
            `[Font Subsetter] 未尋得含有 .${targetClass} 的文字，跳過子集化。`,
          );
          return;
        }

        await generateFontSubset(extractedText, distPath, targetFontPrefix);
      },
    },
  };
}
