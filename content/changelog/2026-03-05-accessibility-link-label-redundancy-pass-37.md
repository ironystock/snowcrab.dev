---
title: "Changelog 2026-03-05 (Accessibility Link-Label Redundancy Pass 37)"
date: 2026-03-05T10:10:00-07:00
slug: "2026-03-05-accessibility-link-label-redundancy-pass-37"
version: "0.9.22"
summary: "Reduced redundant link labeling in global and reliability navigation surfaces by removing aria-label attributes where visible context already provides clear accessible names."
draft: false
---

## Changed
- Removed redundant `aria-label` from the brand/home link in the global header.
- Removed redundant `aria-label` attributes from reliability action links (`View deploy`, `View CI`) now that surrounding metric labels and visible link text already provide context.

## Why
- Prevents accessible-name duplication and keeps naming derived from visible UI where possible.
- Continues the accessibility sweep goal of reducing unnecessary ARIA while preserving clear semantics.
