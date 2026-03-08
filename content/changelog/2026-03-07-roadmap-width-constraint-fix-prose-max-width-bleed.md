---
title: "Changelog 2026-03-07 (Roadmap Width Constraint Fix: Prose Max-Width Bleed)"
date: 2026-03-07T22:50:00-07:00
slug: "2026-03-07-roadmap-width-constraint-fix-prose-max-width-bleed"
version: "0.9.61"
summary: "Fixed roadmap scorecard/list narrow-card issue by exempting roadmap widget lists from prose reading-width constraints."
draft: false
---

## Fixed
- Roadmap scorecard cards were staying too narrow because roadmap widget lists still inherited prose max-width constraints.

## Changed
- Added roadmap widget list classes to the layout-component width exemption block:
  - `.roadmap-scorecard-grid`
  - `.roadmap-heartbeat-log-list`
  - `.roadmap-mockup-grid`
- These now render at full available content width instead of prose reading measure.

## Affected pages
- `/pages/roadmap/`

## Receipts
- Before: `/pages/roadmap/`
- After: `/pages/roadmap/`
