/* MorphCSS Community cross-browser audit | Copyright (c) 2026 Jacek Kukulski
 * Test tooling only, not part of CSS distribution. Version 1.0.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium, firefox, webkit } from 'playwright';
const base = process.env.MORPH_AUDIT_BASE || 'http://127.0.0.1:18765';
const widths = [320, 390, 768, 1280, 1920];
const out = 'audit-results';
await fs.mkdir(out, { recursive: true });
const results = [];
const engines = { chromium, firefox, webkit };
for (const [engine, type] of Object.entries(engines)) {
  const browser = await type.launch({ headless: true });
  try {
    for (const width of widths) {
      const page = await browser.newPage({ viewport: {width, height: 900}, javaScriptEnabled: true });
      try {
        const response = await page.goto(base + '/index.html', {waitUntil:'load', timeout:30000});
        if (response?.status() !== 200) throw Error('HTML HTTP ' + response?.status());
        const metrics = await page.evaluate(() => {
          const css = document.querySelector('link[rel=stylesheet]');
          const grid = document.querySelector('.m-grid');
          const button = document.querySelector('.m-button');
          const badge = document.querySelector('.m-badge');
          return {
            cssLoaded: !!css && [...document.styleSheets].some(s => s.href?.includes('morph.community.css')),
            documentWidth: document.documentElement.scrollWidth,
            viewportWidth: innerWidth,
            gridDisplay: getComputedStyle(grid).display,
            buttonDisplay: getComputedStyle(button).display,
            badgeDisplay: getComputedStyle(badge).display,
            buttonVisible: button.getBoundingClientRect().width > 0,
          };
        });
        if (!metrics.cssLoaded) throw Error('CSS not loaded');
        if (metrics.documentWidth > metrics.viewportWidth + 1) throw Error('Horizontal overflow ' + JSON.stringify(metrics));
        if (metrics.gridDisplay !== 'grid') throw Error('Grid missing: ' + metrics.gridDisplay);
        if (!metrics.buttonVisible) throw Error('Button invisible');
        await page.keyboard.press('Tab');
        const focus = await page.evaluate(() => {
          const el = document.activeElement;
          const s = getComputedStyle(el);
          return { tag: el?.tagName, outline: s.outlineStyle, width: s.outlineWidth };
        });
        if (focus.outline === 'none' || focus.width === '0px') throw Error('Focus outline missing: ' + JSON.stringify(focus));
        if (width === 390 || width === 1280) {
          await page.screenshot({ path: path.join(out, engine + '-' + width + '.png'), fullPage: true });
        }
        results.push({ engine, width, status:'PASS', ...metrics });
        console.log('PASS', engine, width);
      } catch (e) {
        results.push({engine,width,status:'FAIL',error:String(e)});
        console.error('FAIL',engine,width,e);
      } finally {
        await page.close();
      }
    }
  } finally { await browser.close(); }
}
await fs.writeFile(path.join(out, 'cross-browser.json'), JSON.stringify(results,null,2)+'\n');
if (results.some(x=>x.status==='FAIL')) process.exitCode=1;
