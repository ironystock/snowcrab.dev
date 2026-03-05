---
title: "Changelog 2026-03-05 (Interactive Changelog Filters Pass 2)"
date: 2026-03-05T03:34:00-07:00
slug: "2026-03-05-changelog-interactive-filters-pass-2"
version: "0.9.0"
summary: "Refined changelog filters with sticky controls, live result counts, and no-match empty-state messaging for clearer timeline navigation."
draft: false
---

## Changed
- Added a sticky changelog filter control wrapper so category chips stay in view while scanning entries.
- Added live filter summary text showing visible entry count and current filter mode.
- Added an explicit no-results empty state when a selected filter has no matching entries.
- Updated filter script to manage summary + empty-state behavior alongside existing chip pressed states.

## Why
- Improve changelog timeline scanning and reduce context loss while filtering through long entry lists.
