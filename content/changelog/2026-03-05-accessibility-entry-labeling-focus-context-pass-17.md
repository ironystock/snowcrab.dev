---
title: "Changelog 2026-03-05 (Accessibility Entry Labeling & Focus Context Pass 17)"
date: 2026-03-05T04:48:00-07:00
slug: "2026-03-05-accessibility-entry-labeling-focus-context-pass-17"
version: "0.9.2"
summary: "Improved accessibility semantics for homepage/listed content cards by adding explicit article labels and clearer keyboard focus context."
draft: false
---

## Changed
- Added explicit `aria-labelledby` relationships to post/changelog list `article` blocks so each entry is announced with its own title.
- Added stable heading IDs for homepage latest-post entries and list-page entries to support reliable label mapping.
- Added `:focus-within` card styling so keyboard navigation gives a stronger visual context around the active card.

## Why
- Improves how assistive technologies identify each card as a distinct, titled content region.
- Makes keyboard traversal easier to track visually on dense list surfaces.
