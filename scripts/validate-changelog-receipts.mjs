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

function toPermalink(relPath) {
  if (!relPath.endsWith('.md')) return null;

  if (relPath.startsWith('content/pages/')) {
    const slug = relPath.replace('content/pages/', '').replace(/\.md$/, '');
    if (slug === '_index') return '/pages/';
    return `/pages/${slug}/`;
  }

  if (relPath.startsWith('content/projects/')) {
    const slug = relPath.replace('content/projects/', '').replace(/\.md$/, '');
    return `/projects/${slug}/`;
  }

  if (relPath.startsWith('content/notes/')) {
    const slug = relPath.replace('content/notes/', '').replace(/\.md$/, '');
    if (slug === '_index') return '/notes/';
    return `/notes/${slug}/`;
  }

  return null;
}

const changed = listChangedFiles();
const changelogFiles = changed.filter((f) => /^content\/changelog\/.*\.md$/.test(f));
const pageLikeChanges = changed
  .filter((f) => /^content\/(pages|projects|notes)\/.*\.md$/.test(f))
  .map((f) => ({ rel: f, permalink: toPermalink(f) }))
  .filter((x) => x.permalink);

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
  const hasBefore = /\bbefore\b[^\n]*\//i.test(body);
  const hasAfter = /\bafter\b[^\n]*\//i.test(body);
  const hasAffectedPages = /^##\s+Affected pages\b/im.test(body) || /(affected pages|page-level receipts|surface receipts)/i.test(body);

  const missing = [];
  if (!hasReceiptsSection) missing.push('## Receipts section');
  if (!hasBefore) missing.push('Before receipt link');
  if (!hasAfter) missing.push('After receipt link');

  if (pageLikeChanges.length && !hasAffectedPages) {
    missing.push('## Affected pages section (required when page/project/note files changed)');
  }

  const missingPermalinks = pageLikeChanges
    .map((p) => p.permalink)
    .filter((p) => !body.includes(p));

  if (pageLikeChanges.length && missingPermalinks.length) {
    missing.push(`linked changed page receipts: ${missingPermalinks.join(', ')}`);
  }

  if (missing.length) {
    failed = true;
    console.error(`✖ ${rel} is missing: ${missing.join('; ')}`);
  } else {
    console.log(`✔ ${rel} has receipts + affected page links.`);
  }
}

if (failed) {
  console.error('\nChangelog receipt guardrail failed. Add linked before/after receipts and affected page links.');
  process.exit(1);
}

console.log('\nChangelog receipt guardrail passed.');
