---
title: "Changelog 2026-03-06 (Accessibility: Contrast Pass for Chips + Status + Meta)"
date: 2026-03-06T04:27:00-07:00
slug: "2026-03-06-accessibility-contrast-chip-status-meta-pass"
version: "0.6.11"
summary: "Improved contrast clarity across active filter chips, reliability status pills, and reliability meta text for better readability in both light and dark themes."
category: "design"
draft: false
---

## Changed
- Introduced theme-aware accessibility tokens for active chip ink/background/border to increase visual contrast without losing category color identity.
- Updated active changelog filter chips to use the new high-contrast tokens.
- Increased reliability strip status pill label weight for faster scanning at small sizes.
- Raised reliability meta text contrast (including relative refresh timestamp) using a dedicated high-contrast meta token.

## Why
- This accessibility sweep batch focused on contrast quality in compact UI states where text is small and frequently scanned.
- The update improves legibility and reduces low-contrast edge cases in dark/light theme transitions.
