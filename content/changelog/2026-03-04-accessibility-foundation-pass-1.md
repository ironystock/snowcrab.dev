---
title: "Changelog 2026-03-04 (Accessibility Foundation Pass 1)"
date: 2026-03-04T23:34:00-07:00
slug: "2026-03-04-accessibility-foundation-pass-1"
version: "0.7.4"
summary: "Shipped baseline keyboard accessibility improvements with a skip link, clearer focus states, and active-nav semantics."
draft: false
---

## Changed
- Added a visible-on-focus **Skip to content** link at the top of every page.
- Added `id="main-content"` and `tabindex="-1"` to the main landmark so skip-link navigation lands correctly.
- Added `aria-current="page"` on active navigation links for better screen reader context.
- Added explicit `:focus-visible` styles for the theme toggle button to improve keyboard discoverability.

## Why
- Start the accessibility sweep with high-impact, low-risk improvements for keyboard and assistive-technology navigation.
