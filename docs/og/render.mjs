// Renders SVG hero source(s) to:
//   public/og/hero.png         1200x630  (Netlify og:image / Twitter card)
//   docs/og/hero-github.png    1280x640  (GitHub Social preview, max 1MB)
//
// Reuses Playwright already installed in ../draw/node_modules to avoid
// adding a dev dep to this starter repo. One-off helper, not wired into
// scripts.
import { createRequire } from "node:module";
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const drawNm = resolve(here, "../../../draw/node_modules");
const ogOutDir = resolve(here, "../../public/og");
const require = createRequire(join(drawNm, "noop.js"));
const { chromium } = require("playwright");

mkdirSync(ogOutDir, { recursive: true });

const svgs = readdirSync(here).filter((f) => f.endsWith(".svg"));

const browser = await chromium.launch();

async function renderTo({ svg, outPath, width, height, viewportHeight }) {
  // viewportHeight allows letterboxing the SVG (which is authored at
  // 1200x630, ratio 1.905:1) into a different output ratio without
  // distortion. We render at the source ratio scaled to the target
  // width, then center-crop vertically to the target height.
  const vh = viewportHeight ?? height;
  const page = await browser.newPage({ viewport: { width, height: vh } });
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>
    html,body{margin:0;padding:0;background:transparent}
    svg{display:block;width:${width}px;height:${vh}px}
  </style></head><body>${svg}</body></html>`;
  await page.setContent(html, { waitUntil: "load" });
  const yOffset = Math.round((vh - height) / 2);
  const buf = await page.screenshot({
    type: "png",
    omitBackground: false,
    clip: { x: 0, y: yOffset, width, height },
  });
  await page.close();
  writeFileSync(outPath, buf);
  console.log(`[og] ${outPath} (${buf.length} bytes, ${width}x${height})`);
}

for (const svgName of svgs) {
  const pngName = svgName.replace(/\.svg$/, ".png");
  const svg = readFileSync(join(here, svgName), "utf8");

  // Netlify / OG / Twitter — 1.91:1, native ratio of the source SVG.
  await renderTo({
    svg,
    outPath: join(ogOutDir, pngName),
    width: 1200,
    height: 630,
  });

  // GitHub Social preview — 2:1, render the 1.91:1 source at full width
  // then center-crop top/bottom. Source has ample vertical padding so
  // nothing meaningful is clipped.
  if (svgName === "hero.svg") {
    await renderTo({
      svg,
      outPath: join(here, "hero-github.png"),
      width: 1280,
      height: 640,
      viewportHeight: 672,
    });
  }
}

await browser.close();
