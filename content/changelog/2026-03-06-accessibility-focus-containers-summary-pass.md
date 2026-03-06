---
title: "Changelog 2026-03-06 (Accessibility: Focus Container + Summary Ring Pass)"
date: 2026-03-06T02:58:00-07:00
slug: "2026-03-06-accessibility-focus-containers-summary-pass"
version: "0.6.9"
summary: "Improved keyboard wayfinding by extending focus-within treatment to dashboard cards and adding explicit focus-visible outlines for capability summaries."
category: "design"
draft: false
---

## Changed
- Upgraded the skip-link wrapper landmark from a generic container to a semantic `nav` with an explicit label.
- Extended `:focus-within` card highlighting beyond `.card` to include project-health cards, integration cards, and capability details blocks.
- Added a dedicated `:focus-visible` ring for capability `summary` controls so keyboard users can track expansion targets more reliably.
- Added forced-colors coverage for capability summary focus states to preserve keyboard visibility in high-contrast environments.

## Why
- This accessibility sweep batch focused on keyboard flow and focus discoverability in composite dashboard surfaces.
- The update reduces focus-loss moments when tabbing through nested links/details controls, especially on dense status pages.
