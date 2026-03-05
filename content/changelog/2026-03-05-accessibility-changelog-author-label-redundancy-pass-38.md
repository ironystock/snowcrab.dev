---
title: "Changelog 2026-03-05 (Accessibility Changelog/Authored-Link Label Redundancy Pass 38)"
date: 2026-03-05T10:25:00-07:00
slug: "2026-03-05-accessibility-changelog-author-label-redundancy-pass-38"
version: "0.9.23"
summary: "Continued ARIA simplification by switching changelog filter landmark labeling to heading-linked semantics and removing redundant author-profile link labeling."
draft: false
---

## Changed
- Added a dedicated SR-only heading for changelog filters and linked the filter nav with `aria-labelledby` instead of standalone `aria-label`.
- Removed redundant `aria-label` from the author bio profile link where visible link text already provides a clear name.

## Why
- Keeps landmark/list labeling strategy consistent around heading-linked semantics.
- Reduces unnecessary ARIA duplication while preserving clear link intent.
