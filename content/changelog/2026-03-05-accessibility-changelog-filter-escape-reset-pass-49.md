---
title: "Changelog 2026-03-05 (Accessibility Changelog Filter Escape Reset Pass 49)"
date: 2026-03-05T13:10:00-07:00
slug: "2026-03-05-accessibility-changelog-filter-escape-reset-pass-49"
version: "0.9.34"
summary: "Improved changelog filter keyboard accessibility by adding Escape-key support to quickly reset category filtering back to All."
draft: false
---

## Changed
- Added `Escape` key handling in changelog filter controls.
- Pressing `Escape` now resets filtering to `All`, focuses the `All` chip, and updates filter state/URL consistently.

## Why
- Provides a fast keyboard-only way to clear filtered state without traversing back to the first option manually.
- Improves efficiency and control for assistive-tech and power-keyboard users.
