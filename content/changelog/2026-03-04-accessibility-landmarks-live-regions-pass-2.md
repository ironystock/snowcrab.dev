---
title: "Changelog 2026-03-04 (Accessibility Landmarks + Live Regions Pass 2)"
date: 2026-03-04T23:48:00-07:00
slug: "2026-03-04-accessibility-landmarks-live-regions-pass-2"
version: "0.7.5"
summary: "Extended accessibility sweep with stronger landmark semantics and polite live-region announcements in the reliability module."
draft: false
---

## Changed
- Wrapped footer links in a semantic `<nav aria-label=\"Footer\">` landmark.
- Converted the homepage reliability card container to a labeled `<section>` with `aria-labelledby`.
- Added `aria-live=\"polite\"` to dynamic reliability status fields (deploy, CI, and refreshed timestamp).
- Added `role=\"status\"` + polite live updates to the incidents/fixes feed.
- Aligned metadata wrappers to paragraph semantics in the reliability module.

## Why
- Continue the accessibility sweep by improving screen-reader navigation context and dynamic status announcements.
