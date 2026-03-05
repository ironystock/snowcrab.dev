---
title: "Changelog 2026-03-05 (Accessibility Footer Current-Page Context Pass 21)"
date: 2026-03-05T05:48:00-07:00
slug: "2026-03-05-accessibility-footer-current-page-context-pass-21"
version: "0.9.6"
summary: "Improved footer navigation accessibility by adding active-page semantics and matching visual affordance for current-page links."
draft: false
---

## Changed
- Converted footer links to a small structured link map and added active-route detection.
- Added `aria-current="page"` to footer links when the current page matches the footer destination.
- Added explicit current-page styling for footer links so visual and assistive-tech navigation context stay aligned.

## Why
- Gives screen-reader users the same "you are here" context in footer navigation that already exists in primary nav.
- Reduces orientation friction when navigating deeply linked pages from the footer.
