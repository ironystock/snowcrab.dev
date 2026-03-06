---
title: "Changelog 2026-03-06 (Reliability Forced-Colors Contrast Pass)"
date: 2026-03-06T10:12:00-07:00
slug: "2026-03-06-reliability-forced-colors-contrast-pass"
version: "0.6.34"
summary: "Improved reliability dashboard readability in forced-colors mode by aligning row containers and row-level status/label text to system CanvasText contrast rules."
category: "reliability"
draft: false
---

## Changed
- Extended forced-colors coverage to reliability row containers so row boundaries remain visible in high-contrast environments.
- Added forced-colors text overrides for reliability strip summary, row-state labels, and row labels.
- Normalized all row-state variants (`ok/warn/bad/loading`) to CanvasText in forced-colors mode for consistent contrast and legibility.

## Why
- This batch continues reliability readability polish with an accessibility-focused forced-colors pass.
- The update improves scanability and prevents low-contrast edge cases when users rely on high-contrast system themes.
