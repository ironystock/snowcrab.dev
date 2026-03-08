import { readFile } from 'node:fs/promises';

const file = new URL('../layouts/partials/projects-health-dashboard.html', import.meta.url);
const source = await readFile(file, 'utf8');

const tagRegex = /<[^>]+data-metric-label="([^"]+)"[^>]*>/g;
const ownerRegex = /data-metric-owner="([^"]+)"/;

const entries = [];
let match;
while ((match = tagRegex.exec(source)) !== null) {
  const tag = match[0];
  const labelRaw = match[1];
  const ownerMatch = ownerRegex.exec(tag);
  const owner = ownerMatch ? ownerMatch[1].trim() : '';
  const label = labelRaw.trim();

  if (!owner) {
    console.error(`Metric label "${label}" is missing data-metric-owner metadata.`);
    process.exit(1);
  }

  entries.push({ label, owner });
}

if (entries.length === 0) {
  console.error('No data-metric-label entries found. Cannot validate ownership overlap guardrail.');
  process.exit(1);
}

const groups = new Map();
for (const entry of entries) {
  const key = entry.label.toLowerCase();
  if (!groups.has(key)) groups.set(key, { label: entry.label, owners: new Set(), count: 0 });
  const group = groups.get(key);
  group.owners.add(entry.owner);
  group.count += 1;
}

const overlapErrors = [];
for (const group of groups.values()) {
  if (group.count > 1 && group.owners.size < 2) {
    overlapErrors.push(`Overlapping metric label "${group.label}" must include distinct ownership metadata (found owners: ${[...group.owners].join(', ') || 'none'}).`);
  }
}

if (overlapErrors.length > 0) {
  for (const err of overlapErrors) console.error(err);
  process.exit(1);
}

console.log(`metric ownership guardrail ok (${entries.length} labeled metrics validated)`);
