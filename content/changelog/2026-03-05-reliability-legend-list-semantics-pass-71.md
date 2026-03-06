---
title: "Changelog 2026-03-05 (Reliability Legend List Semantics Pass 71)"
date: 2026-03-05T18:40:00-07:00
slug: "2026-03-05-reliability-legend-list-semantics-pass-71"
version: "0.9.56"
summary: "Improved reliability legend semantics by replacing inline text spans with a labeled list structure for clearer grouping and assistive-tech interpretation."
draft: false
---

## Changed
- Converted reliability legend chips from inline spans inside a paragraph to a labeled list (`ul`/`li`) within a grouped legend container.
- Added explicit legend labeling linkages (`role="group"`, `aria-labelledby`) and a dedicated legend list class.
- Updated legend CSS for list reset and stable inline wrapping.

## Why
- Improves structural clarity for grouped status meanings.
- Keeps visual compactness while making legend semantics more explicit and robust for assistive technologies.
