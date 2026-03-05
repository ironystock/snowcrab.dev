---
title: "Changelog 2026-03-05 (Reliability Strip ARIA Label Clarity Pass 63)"
date: 2026-03-05T16:40:00-07:00
slug: "2026-03-05-reliability-strip-aria-label-clarity-pass-63"
version: "0.9.48"
summary: "Improved compact reliability-strip accessibility text by generating explicit per-chip ARIA labels in a consistent 'status: value' format."
draft: false
---

## Changed
- Updated reliability strip label generation to parse chip text and emit explicit ARIA labels in this format:
  - `Deploy status: Healthy`
  - `CI status: Degraded`
  - `Incidents status: Clear`
- Kept fallback behavior for unexpected chip text formats.

## Why
- Improves spoken clarity for assistive-tech users compared with the prior simple symbol replacement approach.
- Makes strip semantics more predictable and easier to understand across state changes.
