---
title: "Changelog 2026-03-05 (External Link Glyph Rule)"
date: 2026-03-05T00:13:00-07:00
slug: "2026-03-05-external-link-glyph-rule"
version: "0.6.2"
summary: "Added automatic external-link glyph indicator for markdown-rendered links, alongside new-tab behavior."
draft: false
---

## Added
- External links rendered via markdown now show a trailing glyph (`↗`) automatically.

## Changed
- External-link render template now appends glyph and preserves `target=\"_blank\"` + `rel=\"noopener noreferrer\"`.
- Added lightweight glyph styling for readability and hover behavior.
