---
title: "Changelog 2026-03-06 (Command Palette Platform Shortcut Hint Pass)"
date: 2026-03-06T11:19:00-07:00
slug: "2026-03-06-command-palette-platform-shortcut-hint-pass"
version: "0.6.39"
summary: "Improved command palette shortcut clarity by adding platform-aware shortcut labels/hints (⌘K on Apple platforms, Ctrl+K elsewhere) while retaining slash support."
category: "design"
draft: false
---

## Changed
- Added explicit `aria-keyshortcuts` metadata on the command toggle.
- Added a dedicated shortcut label slot in the header command trigger.
- Updated command palette script to detect platform and render the appropriate shortcut label (`⌘K` vs `Ctrl+K`).
- Updated command palette helper text to include dynamic platform-appropriate shortcut guidance while preserving `/` support.

## Why
- This focused batch improves discoverability and reduces keyboard shortcut ambiguity across different operating systems.
- The update makes command/search onboarding clearer for both Mac and non-Mac users.
