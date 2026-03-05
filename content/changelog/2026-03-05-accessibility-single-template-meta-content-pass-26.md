---
title: "Changelog 2026-03-05 (Accessibility Single Template Meta + Content Pass 26)"
date: 2026-03-05T07:03:00-07:00
slug: "2026-03-05-accessibility-single-template-meta-content-pass-26"
version: "0.9.11"
summary: "Improved single-page accessibility semantics with explicit article metadata linkage, conditional updated-date context, and heading-linked article-content region labeling."
draft: false
---

## Changed
- Linked article containers to their metadata row via `aria-describedby="page-meta"` for stronger context announcement.
- Updated page meta copy to explicit published context and added conditional updated-date time semantics when `Lastmod` differs from publish date.
- Replaced generic `aria-label` content-region labeling with heading-linked semantics using an SR-only `Article content` heading.

## Why
- Gives assistive tech users clearer page-level context (title + publication/update metadata) when entering single content pages.
- Improves region navigation consistency by preferring heading-linked labels over standalone aria-label strings.
