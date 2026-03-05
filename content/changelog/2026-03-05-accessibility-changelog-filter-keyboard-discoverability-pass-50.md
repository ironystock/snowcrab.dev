---
title: "Changelog 2026-03-05 (Accessibility Changelog Filter Keyboard Discoverability Pass 50)"
date: 2026-03-05T13:25:00-07:00
slug: "2026-03-05-accessibility-changelog-filter-keyboard-discoverability-pass-50"
version: "0.9.35"
summary: "Improved changelog filter keyboard discoverability by adding explicit shortcut guidance and linking those instructions to the filter tablist for assistive-tech users."
draft: false
---

## Changed
- Added a concise keyboard-help line above changelog category filters (arrow navigation, Home/End, Escape reset).
- Linked filter controls to that guidance via `aria-describedby` on the filter tablist.
- Added small spacing/size tuning for the new helper text to keep readability high without crowding.

## Why
- Makes advanced keyboard behavior discoverable instead of hidden.
- Improves first-time usability for keyboard and assistive-tech users interacting with filter controls.
