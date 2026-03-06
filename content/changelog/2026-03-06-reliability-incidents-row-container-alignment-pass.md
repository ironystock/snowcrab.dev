---
title: "Changelog 2026-03-06 (Reliability Incidents Row Container Alignment Pass)"
date: 2026-03-06T09:27:00-07:00
slug: "2026-03-06-reliability-incidents-row-container-alignment-pass"
version: "0.6.31"
summary: "Completed reliability row alignment by moving incidents content into the same compact row container pattern used by Deploy/CI metrics for more consistent scan flow."
category: "reliability"
draft: false
---

## Changed
- Moved incidents heading/body into a dedicated `.reliability-row` container with the existing focus target id.
- Kept incidents state badge + body content intact while aligning structure with Deploy/CI rows.
- Added small incidents row spacing/typography refinements to match metric row density.

## Why
- This batch completes the reliability compactness/readability polish by unifying row structure across all three reliability surfaces.
- The update improves visual rhythm and makes row-by-row scanning more consistent.
