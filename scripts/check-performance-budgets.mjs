#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const configPath = path.join(root, 'config', 'performance-budgets.json');
const baselinePath = path.join(root, 'config', 'performance-baseline.json');

const bytes = (n) => `${n.toLocaleString()} B`;

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function listFiles(dir, filter = () => true) {
  if (!(await exists(dir))) return [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const out = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await listFiles(full, filter)));
    else if (filter(full)) out.push(full);
  }
  return out;
}

async function fileSize(p) {
  const s = await fs.stat(p);
  return s.size;
}

function assertNum(value, fallback = 0) {
  return Number.isFinite(Number(value)) ? Number(value) : fallback;
}

async function readJson(p, fallback) {
  if (!(await exists(p))) return fallback;
  return JSON.parse(await fs.readFile(p, 'utf8'));
}

async function main() {
  const cfg = await readJson(configPath, {});
  const baseline = await readJson(baselinePath, {});
  const maxRegressionPct = assertNum(cfg.maxRegressionPct, 12);

  const cssFiles = await listFiles(path.join(publicDir, 'css'), (p) => p.endsWith('.css'));
  const mainCssCandidates = cssFiles.filter((p) => path.basename(p).startsWith('main.min'));
  const mainCssSize = mainCssCandidates.length
    ? Math.max(...(await Promise.all(mainCssCandidates.map(fileSize))))
    : 0;

  const jsFiles = await listFiles(path.join(publicDir, 'js'), (p) => p.endsWith('.js'));
  const jsSizes = await Promise.all(jsFiles.map(fileSize));
  const totalJs = jsSizes.reduce((a, b) => a + b, 0);

  const homeHtmlPath = path.join(publicDir, 'index.html');
  const homeHtmlSize = (await exists(homeHtmlPath)) ? await fileSize(homeHtmlPath) : 0;

  const metrics = {
    maxMainCssBytes: mainCssSize,
    maxTotalJsBytes: totalJs,
    maxHomeHtmlBytes: homeHtmlSize,
  };

  console.log('Performance budget report');
  let failed = false;

  for (const [key, actual] of Object.entries(metrics)) {
    const budget = assertNum(cfg[key], Number.MAX_SAFE_INTEGER);
    const baselineValue = assertNum(baseline[key], 0);

    let regressionFail = false;
    if (baselineValue > 0) {
      const allowed = Math.floor(baselineValue * (1 + maxRegressionPct / 100));
      regressionFail = actual > allowed;
      if (regressionFail) {
        console.log(`- FAIL ${key} regression: ${bytes(actual)} > ${bytes(allowed)} (baseline ${bytes(baselineValue)})`);
        failed = true;
      }
    }

    const budgetFail = actual > budget;
    const status = budgetFail ? 'FAIL' : (regressionFail ? 'FAIL' : 'PASS');
    console.log(`- ${status} ${key}: ${bytes(actual)} / budget ${bytes(budget)}${baselineValue > 0 ? ` / baseline ${bytes(baselineValue)}` : ''}`);

    if (budgetFail) failed = true;
  }

  if (failed) {
    console.error('Performance budget check failed.');
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('Performance budget check crashed:', error);
  process.exit(1);
});
