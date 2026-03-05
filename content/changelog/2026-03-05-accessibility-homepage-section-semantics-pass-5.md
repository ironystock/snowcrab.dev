---
title: "Changelog 2026-03-05 (Accessibility Homepage Section Semantics Pass 5)"
date: 2026-03-05T00:33:00-07:00
slug: "2026-03-05-accessibility-homepage-section-semantics-pass-5"
version: "0.7.8"
summary: "Improved homepage screen-reader structure by adding clearer aside labeling and semantic section wrappers across status/navigation cards."
draft: false
---

## Changed
- Added an explicit label to homepage sidebar: `aria-label="Site updates and navigation"`.
- Converted homepage sidebar cards from generic `<div>` wrappers to semantic `<section>` regions.
- Added heading associations (`aria-labelledby`) to key cards (`Now shipping`, `Monthly review`, `Latest changelog`, `Now building`, `Quick links`).
- Preserved existing visual layout and content while improving assistive-technology landmark parsing.

## Why
- Continue the accessibility sweep by strengthening semantic structure and section navigation on the homepage.
