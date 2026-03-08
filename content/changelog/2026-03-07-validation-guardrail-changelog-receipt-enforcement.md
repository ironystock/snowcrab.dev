---
title: "Validation guardrail: changelog receipt enforcement"
date: 2026-03-07T19:18:00-07:00
slug: "validation-guardrail-changelog-receipt-enforcement"
summary: "Added CI + template guardrails so changed changelog entries must include linked before/after artifacts and page-level receipt context."
draft: false
---

## Added
- New CI validator script: `scripts/validate-changelog-receipts.mjs`.
- New CI gate in `.github/workflows/ci.yml` to enforce receipt hygiene on changed changelog entries.
- Updated `archetypes/changelog.md` scaffold to include an explicit Receipts block with affected-page context.

## Why this matters
- Prevents future queue drift where UX claims ship without verifiable visual evidence.
- Makes receipt discipline default behavior rather than optional memory.

## Receipts
- Affected pages: `/changelog/` entries and release process templates (`/archetypes/changelog.md`, CI workflow).
- Before: `/artifacts/validation-guardrail/before-archetype-changelog.md.txt`
- After: `/artifacts/validation-guardrail/after-archetype-changelog.md.txt`
- Before: `/artifacts/validation-guardrail/before-ci-workflow.yml.txt`
- After: `/artifacts/validation-guardrail/after-ci-workflow.yml.txt`
