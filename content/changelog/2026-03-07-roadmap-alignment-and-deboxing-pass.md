---
title: "Changelog 2026-03-07 (Roadmap Alignment + De-Boxing Pass)"
date: 2026-03-07T22:33:00-07:00
slug: "2026-03-07-roadmap-alignment-and-deboxing-pass"
version: "0.9.51"
summary: "Fixed roadmap scorecard/top-row alignment drift and reduced nested card boxing on roadmap summary modules for cleaner scan rhythm."
draft: false
---

## Fixed
- Removed roadmap top-row alignment drift caused by prose list-spacing bleed into roadmap widget lists.

## Changed
- Added roadmap widget lists to component-level list-spacing overrides (`li + li` reset).
- De-boxed roadmap summary modules:
  - `roadmap-scorecard` now renders as a clean section container (no heavy outer card chrome)
  - scorecard items use lighter panel treatment with subtle left accent
  - `roadmap-heartbeat-log` now uses lightweight left-rule rows instead of nested boxed feel

## Affected pages
- `/pages/roadmap/`

## Receipts
- Before: `/pages/roadmap/`
- After: `/pages/roadmap/`
