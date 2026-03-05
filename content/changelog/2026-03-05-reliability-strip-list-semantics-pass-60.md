---
title: "Changelog 2026-03-05 (Reliability Strip List Semantics Pass 60)"
date: 2026-03-05T15:55:00-07:00
slug: "2026-03-05-reliability-strip-list-semantics-pass-60"
version: "0.9.45"
summary: "Improved reliability strip semantics by converting status chips from a generic container into a heading-linked list structure for clearer assistive-tech navigation."
draft: false
---

## Changed
- Converted the reliability summary strip from a generic `div` with sibling spans to a semantic list (`ul` + `li`).
- Added a dedicated SR-only heading and linked the strip via `aria-labelledby`.
- Updated strip CSS for list reset behavior while preserving compact visual layout.

## Why
- Improves structural meaning for grouped status chips.
- Makes reliability scanability cues more consistent for both visual and assistive-tech navigation.
