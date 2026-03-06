---
title: "Changelog 2026-03-06 (Accessibility: External Link Labeling Pass)"
date: 2026-03-06T05:11:00-07:00
slug: "2026-03-06-accessibility-external-link-labeling-pass"
version: "0.6.14"
summary: "Improved homepage external-link accessibility by adding explicit open-in-new-tab labeling and safer external link attributes on GitHub status surfaces."
category: "design"
draft: false
---

## Changed
- Added `target="_blank"` + `rel="noopener noreferrer"` to homepage GitHub status links used in the Now Building and Reliability fallback surfaces.
- Added explicit `aria-label` copy to those links so assistive-tech users get clear "opens in a new tab" context.
- Preserved existing visible link text and badges while improving interaction clarity and security semantics for external navigation.

## Why
- This accessibility sweep batch focused on interactive control naming and external navigation clarity.
- The update improves predictability for keyboard/screen-reader users when leaving the site to GitHub dashboards.
