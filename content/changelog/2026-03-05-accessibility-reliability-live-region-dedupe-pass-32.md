---
title: "Changelog 2026-03-05 (Accessibility Reliability Live-Region Dedupe Pass 32)"
date: 2026-03-05T08:33:00-07:00
slug: "2026-03-05-accessibility-reliability-live-region-dedupe-pass-32"
version: "0.9.17"
summary: "Reduced screen-reader announcement noise in the reliability module by removing overlapping per-field live regions and relying on a single consolidated status update."
draft: false
---

## Changed
- Removed `aria-live` from individual reliability sub-fields (`Last deploy`, `CI status`, and `Last refreshed`).
- Kept the consolidated screen-reader summary live region introduced previously as the single announcement source for refresh outcomes.

## Why
- Prevents duplicate/fragmented announcements when reliability data updates in multiple async steps.
- Improves clarity by delivering one concise module-level update instead of several overlapping messages.
