---
title: "Changelog 2026-03-06 (Accessibility: Semantic List Structure Pass)"
date: 2026-03-06T03:58:00-07:00
slug: "2026-03-06-accessibility-semantic-list-structure-pass"
version: "0.6.9"
summary: "Replaced non-semantic dashboard wrappers with proper list structures and cleaned up project health card heading semantics for better screen-reader navigation."
category: "design"
draft: false
---

## Changed
- Refactored the project health dashboard partial from a definition-list pattern into a semantic list of lane cards (`Now`, `Next`, `Watch`).
- Replaced invalid descriptive term/value grouping with explicit card headings and body copy classes for cleaner accessibility tree output.
- Converted integration status grid wrapper from a generic container into a labeled semantic list so assistive tech reports card count/structure more predictably.
- Updated related CSS to preserve existing visual layout while adding list resets and heading/copy styles for the new semantic structure.

## Why
- This accessibility sweep batch focused on semantic landmarks and structural clarity.
- The previous markup mixed content patterns that were less reliable for screen-reader users; this pass improves consistency without changing page intent.
