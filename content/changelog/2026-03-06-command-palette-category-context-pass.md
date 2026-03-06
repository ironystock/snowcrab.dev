---
title: "Changelog 2026-03-06 (Command Palette Category Context Pass)"
date: 2026-03-06T12:54:00-07:00
slug: "2026-03-06-command-palette-category-context-pass"
version: "0.6.44"
summary: "Improved command palette/changelog cross-flow by indexing changelog categories into search data, matching queries against category terms, and displaying section/category context directly in results."
category: "design"
draft: false
---

## Changed
- Added category metadata to command palette search index payload.
- Expanded command palette query matching to include category terms.
- Added compact section tag styling in command results and surfaced category context inline when available.

## Why
- This focused QA/refinement batch improves changelog interaction cross-flow from command search.
- The update makes changelog-specific navigation clearer and easier to target by category keywords.
