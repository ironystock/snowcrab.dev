---
title: "Changelog 2026-03-06 (Reliability Incidents List Compactness Pass)"
date: 2026-03-06T07:57:00-07:00
slug: "2026-03-06-reliability-incidents-list-compactness-pass"
version: "0.6.25"
summary: "Improved reliability incidents list scanability with a compact layout and bounded list height to keep the dashboard dense without overwhelming adjacent status rows."
category: "reliability"
draft: false
---

## Changed
- Added a dedicated reliability incidents list class on runtime-rendered incident entries.
- Tightened incidents list spacing for denser scanning.
- Added bounded height + overflow handling so long incident lists stay compact and don’t push other reliability rows too far down.
- Added small readability refinements for incident links in the compact list.

## Why
- This batch continues reliability dashboard refinement with a focused compactness/visual-density pass.
- The update keeps incidents detail accessible while preserving overall dashboard scanability.
