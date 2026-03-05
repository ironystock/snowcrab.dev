---
title: "Changelog 2026-03-05 (Accessibility Content Template Semantics Pass 10)"
date: 2026-03-05T01:48:00-07:00
slug: "2026-03-05-accessibility-content-template-semantics-pass-10"
version: "0.8.3"
summary: "Extended the accessibility sweep to core content templates with stronger article/list semantics and machine-readable publish dates."
draft: false
---

## Changed
- Updated `single.html` to use clearer semantic structure (`article` header + labeled content section).
- Added `<time datetime>` metadata on single pages for machine-readable date semantics.
- Updated `list.html` to render entries as a semantic list (`ul/li`) rather than loose stacked articles.
- Added `<time datetime>` metadata to list entries and improved section labeling for assistive navigation.

## Why
- Improves screen-reader and parser interpretation of core content templates while preserving existing visual layout.
