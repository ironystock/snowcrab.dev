---
title: "Changelog 2026-03-06 (Accessibility: Changelog Tablist Semantics + ARIA Busy Pass)"
date: 2026-03-06T04:40:00-07:00
slug: "2026-03-06-accessibility-changelog-tablist-aria-pass"
version: "0.6.12"
summary: "Refined changelog filter accessibility semantics with cleaner tablist structure, explicit tab set positioning, and live busy-state signaling during filter updates."
category: "design"
draft: false
---

## Changed
- Replaced the changelog filter landmark wrapper from `nav` to a semantic-neutral `div` while keeping explicit `role="tablist"` semantics.
- Added `aria-posinset` / `aria-setsize` to each changelog filter tab for clearer screen-reader context within the five-option set.
- Added live `aria-busy` signaling on the changelog results panel during filter application to better reflect dynamic content updates.
- Kept tab-to-panel relationships explicit via existing `aria-controls`/`aria-labelledby` wiring.

## Why
- This accessibility sweep batch focused on semantic correctness and ARIA clarity in the changelog’s dynamic tabbed filtering UI.
- The update improves assistive-tech orientation during category switching and reduces ambiguity around update timing/state.
