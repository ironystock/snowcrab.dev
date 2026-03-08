#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const PLACEHOLDER = 'No meaningful batch currently queued';

function normalize(s) {
  return s.replace(/\s+/g, ' ').trim();
}

const state = readFileSync('docs/STATE.md', 'utf8');
const roadmap = readFileSync('content/pages/roadmap.md', 'utf8');

const nextActionMatch = state.match(/## Next queued action\n-\s+(.+)/);
if (!nextActionMatch) {
  console.error('Queue-state guardrail failed: could not find "Next queued action" in docs/STATE.md');
  process.exit(1);
}

const nextAction = normalize(nextActionMatch[1]);
const openItems = [...roadmap.matchAll(/^- \[ \] (.+)$/gm)]
  .map((m) => normalize(m[1]))
  .filter((line) => !/^=/.test(line));

if (openItems.length === 0) {
  console.log('Queue-state guardrail: roadmap has no open items.');
  process.exit(0);
}

const topRoadmapItem = openItems[0];

if (nextAction.includes(PLACEHOLDER)) {
  console.error('Queue-state guardrail failed: STATE uses placeholder while roadmap still has open items.');
  console.error(`Top roadmap open item: ${topRoadmapItem}`);
  process.exit(1);
}

if (nextAction !== topRoadmapItem) {
  console.error('Queue-state guardrail failed: STATE next action is out of sync with top roadmap open item.');
  console.error(`STATE next queued action: ${nextAction}`);
  console.error(`Top roadmap open item: ${topRoadmapItem}`);
  process.exit(1);
}

console.log('Queue-state guardrail passed: STATE next action matches top roadmap open item.');
