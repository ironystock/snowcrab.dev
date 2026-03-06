---
title: "Changelog 2026-03-06 (Lightweight Command/Search Bar Pass)"
date: 2026-03-06T06:43:00-07:00
slug: "2026-03-06-command-search-bar-pass"
version: "0.6.20"
summary: "Added a lightweight command/search bar triggered by / or Cmd/Ctrl+K to quickly find posts, pages, and changelog entries from anywhere on the site."
category: "design"
draft: false
---

## Changed
- Added a header Search trigger and a global command palette dialog.
- Added keyboard triggers for `/` and `Cmd/Ctrl+K` to open the palette.
- Indexed recent posts/pages/changelog entries into an embedded JSON payload and implemented client-side filtering.
- Added arrow-key navigation and Enter-to-open behavior for quick keyboard-driven navigation.
- Styled palette/results and added responsive + forced-colors support for command toggle visibility.

## Why
- This batch implements the lightweight command/search bar backlog item.
- The update improves navigation speed by reducing manual menu traversal when jumping across content surfaces.
