#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const budgetPath = path.join(root, 'data', 'performance-budget.json');
const baselinePath = path.join(root, 'data', 'performance-baseline.json');
const writeBaseline = process.argv.includes('--write-baseline');

const bytes = (n) => `${n.toLocaleString()} B`;

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function listFiles(dir, predicate = () => true) {
  if (!(await exists(dir))) return [];
  const out = [];
  for (const ent of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...(await listFiles(full, predicate)));
    else if (predicate(full)) out.push(full);
  }
  return out;
}

async function size(p) { return (await fs.stat(p)).size; }

function parseAssetRefs(html, ext) {
  const rx = new RegExp(`(?:href|src)=["']?(/[^"'\\s>]+\\.${ext}(?:\\?[^"'\\s>]*)?(?:#[^"'\\s>]*)?)["']?`, 'g');
  const refs = new Set();
  for (const m of html.matchAll(rx)) refs.add(m[1].split('?')[0].split('#')[0]);
  return [...refs];
}

async function metricSnapshot() {
  const indexPath = path.join(publicDir, 'index.html');
  const html = (await exists(indexPath)) ? await fs.readFile(indexPath, 'utf8') : '';

  const cssFiles = await listFiles(publicDir, (p) => p.endsWith('.css'));
  const jsFiles = await listFiles(publicDir, (p) => p.endsWith('.js'));
  const woff2Files = await listFiles(publicDir, (p) => p.endsWith('.woff2'));

  const cssSizes = await Promise.all(cssFiles.map(size));
  const jsSizes = await Promise.all(jsFiles.map(size));
  const woff2Sizes = await Promise.all(woff2Files.map(size));

  const cssRefs = parseAssetRefs(html, 'css');
  const jsRefs = parseAssetRefs(html, 'js');
  const criticalRefs = [...cssRefs, ...jsRefs];

  let homeCriticalAssetBytes = 0;
  for (const ref of criticalRefs) {
    const p = path.join(publicDir, ref.replace(/^\//, ''));
    if (await exists(p)) homeCriticalAssetBytes += await size(p);
  }

  return {
    homeHtmlBytes: (await exists(indexPath)) ? await size(indexPath) : 0,
    largestCssBytes: cssSizes.length ? Math.max(...cssSizes) : 0,
    largestJsBytes: jsSizes.length ? Math.max(...jsSizes) : 0,
    totalCssJsBytes: cssSizes.reduce((a, b) => a + b, 0) + jsSizes.reduce((a, b) => a + b, 0),
    totalWoff2Bytes: woff2Sizes.reduce((a, b) => a + b, 0),
    homeCriticalAssetBytes,
  };
}

async function readJson(p, fallback) {
  if (!(await exists(p))) return fallback;
  return JSON.parse(await fs.readFile(p, 'utf8'));
}

const current = await metricSnapshot();
const budgetCfg = await readJson(budgetPath, { maxRegressionPct: 0, metrics: {} });
const baseline = await readJson(baselinePath, {});

if (writeBaseline) {
  await fs.writeFile(baselinePath, `${JSON.stringify(current, null, 2)}\n`);
  console.log(`Wrote baseline: ${path.relative(root, baselinePath)}`);
}

const maxRegressionPct = Number(budgetCfg.maxRegressionPct || 0);
const budgets = budgetCfg.metrics || {};
let failed = false;

console.log('Performance budget report:');
for (const [key, actual] of Object.entries(current)) {
  const budget = budgets[key];
  const base = baseline[key];
  let status = 'OK';

  if (typeof budget === 'number' && actual > budget) {
    failed = true;
    status = 'FAIL';
  }

  if (typeof base === 'number' && base > 0) {
    const allowed = Math.floor(base * (1 + maxRegressionPct / 100));
    if (actual > allowed) {
      failed = true;
      status = 'FAIL';
    }
  }

  console.log(`- ${key}: ${bytes(actual)}${typeof budget === 'number' ? ` | budget ${bytes(budget)}` : ''}${typeof base === 'number' ? ` | baseline ${bytes(base)}` : ''} | ${status}`);
}

if (failed) {
  console.error('Performance budget guardrails failed.');
  process.exit(1);
}
