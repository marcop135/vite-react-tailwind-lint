// Capture light/dark screenshots at desktop/tablet/mobile breakpoints.
// Usage: node scripts/audit-screenshots.mjs <baseUrl> <outDir>
// Resolves Playwright from the project, a global install, or the npx cache,
// and prefers the system Chrome so it does not depend on a bundled browser build.
import { existsSync, readdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { join } from 'node:path';
import os from 'node:os';

async function loadChromium() {
  try {
    const pw = await import('playwright');
    return pw.chromium ?? pw.default?.chromium;
  } catch {
    const npxBase = join(os.homedir(), 'AppData', 'Local', 'npm-cache', '_npx');
    if (existsSync(npxBase)) {
      for (const dir of readdirSync(npxBase)) {
        const candidate = join(
          npxBase,
          dir,
          'node_modules',
          'playwright',
          'index.js'
        );
        if (existsSync(candidate)) {
          const pw = await import(pathToFileURL(candidate).href);
          return pw.chromium ?? pw.default?.chromium;
        }
      }
    }
    throw new Error(
      'Could not resolve Playwright. Run: npm i -D playwright && npx playwright install chromium'
    );
  }
}

const baseUrl = process.argv[2] || 'http://localhost:4173/';
const outDir = process.argv[3] || '.audit/baseline';

const breakpoints = [
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 812 },
];
const themes = ['light', 'dark'];

const chromium = await loadChromium();
const systemChrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const launchOpts = existsSync(systemChrome)
  ? { executablePath: systemChrome }
  : {};
const browser = await chromium.launch(launchOpts);

for (const theme of themes) {
  for (const bp of breakpoints) {
    const context = await browser.newContext({
      viewport: { width: bp.width, height: bp.height },
      colorScheme: theme,
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    // Allow lazy Suspense components to resolve before capturing.
    await page.waitForTimeout(500);
    const file = join(outDir, `${bp.name}-${theme}.png`);
    await page.screenshot({ path: file, fullPage: true });
    console.log(`saved ${file}`);
    await context.close();
  }
}

await browser.close();
