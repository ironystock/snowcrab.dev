---
title: "Changelog 2026-03-05 (Accessibility Header/Footer Heading-Linked Nav Pass 36)"
date: 2026-03-05T09:55:00-07:00
slug: "2026-03-05-accessibility-header-footer-heading-linked-nav-pass-36"
version: "0.9.21"
summary: "Improved landmark consistency by switching remaining global nav labels (header and footer) from standalone aria-label strings to heading-linked semantics."
draft: false
---

## Changed
- Added an SR-only heading for main navigation and linked the header nav landmark with `aria-labelledby`.
- Added an SR-only heading for footer links and linked the footer nav landmark with `aria-labelledby`.
- Preserved existing overflow hint behavior and current-page link semantics.

## Why
- Keeps global navigation landmarks consistent with the project’s heading-linked labeling strategy.
- Reduces reliance on isolated aria-label strings while improving structural clarity for assistive technologies.
