---
title: "Changelog 2026-03-05 (Accessibility External Link SR Hint Pass 19)"
date: 2026-03-05T05:18:00-07:00
slug: "2026-03-05-accessibility-external-link-sr-hint-pass-19"
version: "0.9.4"
summary: "Improved external link accessibility by adding screen-reader-only new-tab context alongside the visual external-link glyph."
draft: false
---

## Changed
- Updated the shared Markdown link renderer to include a screen-reader-only hint for external links: "(opens in a new tab)".
- Kept the visual external-link glyph (`↗`) as decorative-only (`aria-hidden="true"`) while pairing it with explicit non-visual context.

## Why
- Ensures non-visual users receive the same navigation expectation as sighted users when links open in a new tab.
- Improves consistency and trust in outbound navigation behavior across all rendered content links.
