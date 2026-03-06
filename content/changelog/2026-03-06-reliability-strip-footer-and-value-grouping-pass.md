---
title: "Changelog 2026-03-06 (Reliability Strip Footer + Value Grouping Pass)"
date: 2026-03-06T09:57:00-07:00
slug: "2026-03-06-reliability-strip-footer-and-value-grouping-pass"
version: "0.6.33"
summary: "Improved reliability dashboard scan flow by grouping strip summary + legend into a compact footer row and grouping row value/state text as a single primary status cluster."
category: "reliability"
draft: false
---

## Changed
- Wrapped reliability strip summary and legend into a shared compact footer container.
- Updated legend label copy from `Legend` to `Key` for tighter visual rhythm.
- Grouped deploy/CI value + row-state labels into a dedicated primary status cluster for clearer left-to-right scanning before action links.

## Why
- This batch continues reliability dashboard readability polish by improving alignment and grouping semantics.
- The update reduces eye-jump friction between primary status values and secondary row actions.
