// Generates the cross-browser favicon set into public/ from public/vite.svg.
// Uses Playwright (from ../draw/node_modules) for SVG -> PNG and a
// hand-rolled ICO encoder for favicon.ico. No new dev deps.
import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const drawNm = resolve(here, "../../../draw/node_modules");
const publicDir = resolve(here, "../../public");
const require = createRequire(join(drawNm, "noop.js"));
const { chromium } = require("playwright");

const svgPath = join(publicDir, "vite.svg");
const svg = readFileSync(svgPath, "utf8");

const targets = [
  { name: "favicon-16.png", size: 16, ico: true },
  { name: "favicon-32.png", size: 32, ico: true },
  { name: "favicon-48.png", size: 48, ico: true },
  { name: "favicon-96x96.png", size: 96, write: true },
  { name: "apple-touch-icon.png", size: 180, write: true },
  { name: "web-app-manifest-192x192.png", size: 192, write: true },
  { name: "web-app-manifest-512x512.png", size: 512, write: true },
];

const browser = await chromium.launch();
const renderAt = async (size) => {
  const page = await browser.newPage({ viewport: { width: size, height: size } });
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>
    html,body{margin:0;padding:0;background:transparent}
    svg{display:block;width:${size}px;height:${size}px}
  </style></head><body>${svg}</body></html>`;
  await page.setContent(html, { waitUntil: "load" });
  const buf = await page.screenshot({
    type: "png",
    omitBackground: true,
    clip: { x: 0, y: 0, width: size, height: size },
  });
  await page.close();
  return buf;
};

const icoBuffers = [];
for (const t of targets) {
  const buf = await renderAt(t.size);
  if (t.write) {
    writeFileSync(join(publicDir, t.name), buf);
    console.log(`[favicons] ${t.name} (${buf.length} bytes)`);
  }
  if (t.ico) icoBuffers.push(buf);
}

const buildIco = (pngs) => {
  const N = pngs.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = N * dirEntrySize;
  const totalPng = pngs.reduce((s, b) => s + b.length, 0);
  const out = Buffer.alloc(headerSize + dirSize + totalPng);
  let p = 0;
  out.writeUInt16LE(0, p); p += 2;
  out.writeUInt16LE(1, p); p += 2;
  out.writeUInt16LE(N, p); p += 2;
  let imageOffset = headerSize + dirSize;
  for (const png of pngs) {
    const w = png.readUInt32BE(16);
    const h = png.readUInt32BE(20);
    out.writeUInt8(w >= 256 ? 0 : w, p); p += 1;
    out.writeUInt8(h >= 256 ? 0 : h, p); p += 1;
    out.writeUInt8(0, p); p += 1;
    out.writeUInt8(0, p); p += 1;
    out.writeUInt16LE(1, p); p += 2;
    out.writeUInt16LE(32, p); p += 2;
    out.writeUInt32LE(png.length, p); p += 4;
    out.writeUInt32LE(imageOffset, p); p += 4;
    imageOffset += png.length;
  }
  for (const png of pngs) {
    png.copy(out, p);
    p += png.length;
  }
  return out;
};

const ico = buildIco(icoBuffers);
writeFileSync(join(publicDir, "favicon.ico"), ico);
console.log(`[favicons] favicon.ico (${ico.length} bytes, 16+32+48 multi-res)`);

const manifest = {
  name: "vite-react-tailwind-lint",
  short_name: "vrt-lint",
  description:
    "A modern, fast starter using Vite, React, and Tailwind CSS. Linted, tested, dual-theme.",
  icons: [
    {
      src: "/web-app-manifest-192x192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "/web-app-manifest-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any",
    },
  ],
  theme_color: "#f1f5f9",
  background_color: "#f1f5f9",
  display: "standalone",
};
writeFileSync(
  join(publicDir, "site.webmanifest"),
  JSON.stringify(manifest, null, 2) + "\n",
);
console.log(`[favicons] site.webmanifest`);

await browser.close();
