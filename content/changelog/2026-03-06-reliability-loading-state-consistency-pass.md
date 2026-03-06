---
title: "Changelog 2026-03-06 (Reliability Loading-State Consistency Pass)"
date: 2026-03-06T08:12:00-07:00
slug: "2026-03-06-reliability-loading-state-consistency-pass"
version: "0.6.26"
summary: "Improved reliability dashboard loading-state consistency by synchronizing strip/overall/row loading semantics and visual treatment before live status data resolves."
category: "reliability"
draft: false
---

## Changed
- Added explicit loading styling hooks for reliability strip pills and row-state labels.
- Updated runtime tone logic so loading strip states mark loading class consistently.
- Updated overall reliability status behavior to show `Overall · Loading` while all strip states are still loading.
- Updated strip summary behavior to show `State mix · Loading` during initial fetch, then switch to count summary once data resolves.
- Added row-state loading visual treatment to align with strip loading presentation.

## Why
- This batch continues reliability dashboard refinement with a focused loading-state consistency pass.
- The update removes early “degraded” ambiguity during initial fetch and improves mental model clarity while data is still loading.
