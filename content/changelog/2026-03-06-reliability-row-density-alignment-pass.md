---
title: "Changelog 2026-03-06 (Reliability Row Density + Alignment Pass)"
date: 2026-03-06T08:27:00-07:00
slug: "2026-03-06-reliability-row-density-alignment-pass"
version: "0.6.27"
summary: "Refined reliability dashboard row scanability by tightening heading/value spacing and introducing compact row containers for clearer side-by-side status parsing."
category: "reliability"
draft: false
---

## Changed
- Converted reliability metrics wrapper into a compact grid with consistent row gaps.
- Added subtle row containers (border/background/radius) to visually separate Deploy and CI status blocks.
- Tightened row label spacing and upgraded labels to compact uppercase meta styling for faster eye tracking.
- Reduced value-line gap spacing for denser but still readable status + action alignment.

## Why
- This batch continues reliability dashboard refinement focused on row density and scanability.
- The update makes status labels and values easier to parse quickly, especially when multiple states are changing during refresh.
