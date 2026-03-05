---
title: "Changelog 2026-03-05 (Accessibility Forced-Colors Focus State Pass 31)"
date: 2026-03-05T08:18:00-07:00
slug: "2026-03-05-accessibility-forced-colors-focus-state-pass-31"
version: "0.9.16"
summary: "Improved high-contrast accessibility with forced-colors-aware focus outlines, interactive borders, and active-state styling across nav/filter/footer controls."
draft: false
---

## Changed
- Added a dedicated `@media (forced-colors: active)` accessibility block.
- Standardized strong focus-visible outlines for key interactive controls (links, nav chips, theme toggle, skip link, footer links).
- Ensured borders and status shells remain visible in forced-colors mode for primary interactive/status elements.
- Added explicit active-state styling (`Highlight` / `HighlightText`) for selected nav, filter chips, and current footer links.

## Why
- Improves usability for users who depend on high-contrast/forced-colors modes.
- Keeps focus and active-state affordances clearly perceivable when custom theme colors are overridden by system settings.
