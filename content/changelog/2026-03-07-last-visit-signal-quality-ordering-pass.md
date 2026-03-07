---
title: "Changelog 2026-03-07 (Last-Visit Signal Quality + Ordering Pass)"
date: 2026-03-07T14:52:00-07:00
slug: "2026-03-07-last-visit-signal-quality-ordering-pass"
version: "0.8.5"
summary: "Refined homepage 'What changed since last visit' signal quality by prioritizing reliability/ops entries and improving top-update ordering with category-aware ranking."
draft: false
---

## Changed
- Enriched the homepage last-visit data feed with inferred category metadata per changelog item.
- Updated module ranking logic to prioritize higher-signal categories (`reliability`, then `ops`, then `content`, then `design`) before recency.
- Improved copy so the module explains that top signals are prioritized.
- Added category labels inside the top updates list for quicker scan quality.
- Captured visual artifacts for this UX pass:
  - `/artifacts/phase2/before-last-visit-signal-ordering.jpg`
  - `/artifacts/phase2/after-last-visit-signal-ordering.jpg`

## Why
- Improves signal quality when multiple updates land between visits.
- Reduces low-priority noise by pulling operational/reliability updates to the top.
- Keeps the module trustworthy as a “what matters first” recap surface.
