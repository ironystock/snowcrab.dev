---
title: "Changelog 2026-03-05 (Accessibility Time Semantics on Status Surfaces Pass 29)"
date: 2026-03-05T07:48:00-07:00
slug: "2026-03-05-accessibility-time-semantics-status-surfaces-pass-29"
version: "0.9.14"
summary: "Improved machine-readable time semantics on status-oriented UI surfaces by converting human-readable date text into explicit `<time datetime>` markup."
draft: false
---

## Changed
- Updated homepage monthly-review metadata to wrap the latest review month in semantic `<time datetime>` markup.
- Updated `/pages/projects` verification stamp to use a machine-readable `<time datetime>` element instead of italic plain text.

## Why
- Improves accessibility and parsing consistency for assistive tech and downstream tools that rely on explicit date semantics.
- Keeps visual presentation unchanged while strengthening structural meaning.
