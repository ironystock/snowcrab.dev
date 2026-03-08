#!/usr/bin/env node
import { execSync } from 'node:child_process';

const trio = [
  'content/pages/now.md',
  'content/pages/projects.md',
  'content/pages/roadmap.md',
];

function sh(cmd) {
  return execSync(cmd, { encoding: 'utf8' }).trim();
}

function changedFiles() {
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

const changed = changedFiles();
const touched = trio.filter((f) => changed.includes(f));

if (touched.length === 0) {
  console.log('Surface-sync guardrail: none of now/projects/roadmap changed in this revision.');
  process.exit(0);
}

if (touched.length !== trio.length) {
  const missing = trio.filter((f) => !touched.includes(f));
  console.error('Surface-sync guardrail failed.');
  console.error(`Touched: ${touched.join(', ')}`);
  console.error(`Missing companion updates: ${missing.join(', ')}`);
  process.exit(1);
}

console.log('Surface-sync guardrail passed: now/projects/roadmap were updated together.');
