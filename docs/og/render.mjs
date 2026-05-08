// Renders SVG hero source(s) to PNG at 1200x630 into public/og/.
// Reuses Playwright already installed in ../draw/node_modules to avoid
// adding a dev dep to this starter repo. One-off helper, not wired into
// scripts.
import { createRequire } from "node:module";
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const drawNm = resolve(here, "../../../draw/node_modules");
const outDir = resolve(here, "../../public/og");
const require = createRequire(join(drawNm, "noop.js"));
const { chromium } = require("playwright");

mkdirSync(outDir, { recursive: true });

const svgs = readdirSync(here).filter((f) => f.endsWith(".svg"));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

for (const svgName of svgs) {
  const pngName = svgName.replace(/\.svg$/, ".png");
  const svg = readFileSync(join(here, svgName), "utf8");
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>
    html,body{margin:0;padding:0;background:transparent}
    svg{display:block;width:1200px;height:630px}
  </style></head><body>${svg}</body></html>`;
  await page.setContent(html, { waitUntil: "load" });
  const buf = await page.screenshot({
    type: "png",
    omitBackground: false,
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  });
  writeFileSync(join(outDir, pngName), buf);
  console.log(`[og] ${svgName} -> public/og/${pngName} (${buf.length} bytes)`);
}

await browser.close();
