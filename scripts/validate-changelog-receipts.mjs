#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function sh(cmd) {
  return execSync(cmd, { cwd: root, encoding: 'utf8' }).trim();
}

function listChangedFiles() {
  const range = process.env.GITHUB_BASE_REF
    ? `origin/${process.env.GITHUB_BASE_REF}...HEAD`
    : 'HEAD~1..HEAD';

  try {
    const out = sh(`git diff --name-only --diff-filter=AM ${range}`);
    return out ? out.split('\n').filter(Boolean) : [];
  } catch {
    const out = sh('git diff-tree --no-commit-id --name-only -r HEAD');
    return out ? out.split('\n').filter(Boolean) : [];
  }
}

const changed = listChangedFiles();
const changelogFiles = changed.filter((f) => /^content\/changelog\/.*\.md$/.test(f));

if (!changelogFiles.length) {
  console.log('No changed changelog entries in this revision.');
  process.exit(0);
}

let failed = false;

for (const rel of changelogFiles) {
  const full = path.join(root, rel);
  if (!existsSync(full)) continue;

  const body = readFileSync(full, 'utf8');

  const hasReceiptsSection = /^##\s+Receipts\b/im.test(body);
  const hasBefore = /\b(before)\b[^\n]*\//i.test(body);
  const hasAfter = /\b(after)\b[^\n]*\//i.test(body);
  const hasPageReceiptHint = /(pages touched|page-level receipts|surface receipts|affected pages)/i.test(body);

  const missing = [];
  if (!hasReceiptsSection) missing.push('## Receipts section');
  if (!hasBefore) missing.push('Before artifact link');
  if (!hasAfter) missing.push('After artifact link');
  if (!hasPageReceiptHint) missing.push('page-level receipts/affected pages line');

  if (missing.length) {
    failed = true;
    console.error(`✖ ${rel} is missing: ${missing.join(', ')}`);
  } else {
    console.log(`✔ ${rel} has receipts + page-level context.`);
  }
}

if (failed) {
  console.error('\nChangelog receipt guardrail failed. Add linked before/after artifacts and page-level receipt context.');
  process.exit(1);
}

console.log('\nChangelog receipt guardrail passed.');
