---
title: "Changelog 2026-03-05 (Projects Page Raw HTML Template Fix)"
date: 2026-03-05T22:10:00-07:00
slug: "2026-03-05-projects-page-raw-html-template-fix"
version: "0.6.8"
summary: "Removed raw HTML dashboard block from Projects page to prevent render/template issues under safe markdown rendering."
draft: false
---

## Fixed
- Projects page render/template instability caused by raw HTML sections being omitted under Hugo safe markdown settings.

## Changed
- Replaced raw HTML dashboard block with markdown-native summary bullets.
