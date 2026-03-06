---
title: "Changelog 2026-03-06 (Reliability Incidents Row Hierarchy Pass)"
date: 2026-03-06T07:42:00-07:00
slug: "2026-03-06-reliability-incidents-row-hierarchy-pass"
version: "0.6.24"
summary: "Refined reliability incidents scanability by adding an incidents row-state label and compact heading layout synchronized with live loading/clear/degraded/down outcomes."
category: "reliability"
draft: false
---

## Changed
- Reworked the incidents heading row into a compact two-part layout: label + live row-state chip text.
- Added explicit incidents row-state output (`Loading`, `Clear`, `N recent`, `Delayed`, `Limited`, `Down`) tied to runtime fetch outcomes.
- Added supporting incidents heading styles for tighter hierarchy and easier row scanning.
- Preserved existing incidents list behavior and strip/overall status logic.

## Why
- This batch continues reliability dashboard refinement work focused on compactness and scanability.
- The update makes the incidents row easier to parse without needing to read full body text first.
