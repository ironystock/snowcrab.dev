---
title: "Changelog 2026-03-05 (Accessibility Theme Toggle + Status Feed Pass 7)"
date: 2026-03-05T01:03:00-07:00
slug: "2026-03-05-accessibility-theme-toggle-status-feed-pass-7"
version: "0.8.0"
summary: "Improved UI accessibility by adding stateful semantics to the theme toggle and list semantics/busy-state handling to the reliability incidents feed."
draft: false
---

## Changed
- Upgraded theme toggle behavior to announce state with `aria-pressed`, dynamic `aria-label`, and matching tooltip text.
- Ensured theme toggle state is initialized on page load even when no localStorage preference exists.
- Updated reliability incidents rendering from generic divs to semantic list markup (`ul/li`).
- Added `aria-busy` lifecycle handling on the reliability incidents region during async feed loading.

## Why
- Improves screen-reader clarity for interactive state changes and makes dynamic reliability updates more semantically structured.
