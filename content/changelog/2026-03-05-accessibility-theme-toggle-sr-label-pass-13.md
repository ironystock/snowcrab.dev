---
title: "Changelog 2026-03-05 (Accessibility Theme Toggle SR Label Pass 13)"
date: 2026-03-05T02:33:00-07:00
slug: "2026-03-05-accessibility-theme-toggle-sr-label-pass-13"
version: "0.8.6"
summary: "Improved theme-toggle accessibility with explicit screen-reader label content, icon separation, and synced state announcements."
draft: false
---

## Changed
- Updated theme toggle markup to separate decorative icon from screen-reader label text.
- Added an `sr-only` utility class for accessible hidden text.
- Updated theme-toggle script to sync icon glyph, hidden label text, `aria-label`, and `aria-pressed` state together.

## Why
- Reduces ambiguity for assistive-tech users by making button intent explicit while keeping emoji icon styling intact.
