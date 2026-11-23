// Full-page screenshots of every page at 360 / 768 / 1280 px in light + dark.
// Usage: npm run build && npm run preview  (in another terminal)  then  npm run screenshots
// Output: ./screenshots/<page>-<width>-<theme>.png
import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const BASE = process.env.BASE_URL ?? "http://localhost:4321";
const pages = (process.env.PAGES ?? "/,/research,/notes,/404").split(",");
const widths = (process.env.WIDTHS ?? "360,768,1280").split(",").map(Number);
const themes = ["light", "dark"];

await mkdir("screenshots", { recursive: true });
const browser = await chromium.launch();

for (const theme of themes) {
  for (const width of widths) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      colorScheme: theme,
      reducedMotion: "reduce", // render reveal-on-scroll content immediately
    });
    const page = await context.newPage();
    for (const path of pages) {
      await page.goto(BASE + path, { waitUntil: "networkidle" });
      const name = path === "/" ? "home" : path.replace(/\//g, "-").replace(/^-/, "");
      // SELECTORS="header,#experience" captures individual elements instead of the full page.
      const selectors = process.env.SELECTORS?.split(",") ?? [];
      if (selectors.length === 0) {
        const file = `screenshots/${name}-${width}-${theme}.png`;
        await page.screenshot({ path: file, fullPage: true });
        console.log(file);
      }
      for (const sel of selectors) {
        const file = `screenshots/${name}-${sel.replace(/\W/g, "")}-${width}-${theme}.png`;
        await page.locator(sel).first().screenshot({ path: file });
        console.log(file);
      }
    }
    await context.close();
  }
}

await browser.close();
