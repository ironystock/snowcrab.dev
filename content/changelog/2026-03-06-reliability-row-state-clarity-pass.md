---
title: "Changelog 2026-03-06 (Reliability Row-State Clarity Pass)"
date: 2026-03-06T07:27:00-07:00
slug: "2026-03-06-reliability-row-state-clarity-pass"
version: "0.6.23"
summary: "Improved reliability dashboard row-level scanability by adding explicit per-row state labels (Loading/Healthy/Running/Degraded/Down) synchronized with live status fetch outcomes."
category: "reliability"
draft: false
---

## Changed
- Added compact per-row state labels for Deploy and CI rows in the reliability metrics area.
- Updated reliability dashboard logic to keep row-level state labels synchronized with loading/success/degraded/down outcomes.
- Added row-state tone styling to improve fast scanability and loading/error clarity.
- Preserved existing overall status pill, strip, and deep-link focus behavior.

## Why
- This batch continues reliability dashboard refinement with row-level hierarchy and clearer status readability.
- The update reduces ambiguity by exposing concise state labels next to detailed timestamps/status text.
