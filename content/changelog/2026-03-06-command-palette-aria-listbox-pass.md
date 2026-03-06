---
title: "Changelog 2026-03-06 (Command Palette ARIA Listbox Pass)"
date: 2026-03-06T09:12:00-07:00
slug: "2026-03-06-command-palette-aria-listbox-pass"
version: "0.6.30"
summary: "Improved command palette accessibility semantics by adding combobox/listbox roles, active descendant tracking, and explicit option selection states for keyboard/screen-reader navigation."
category: "design"
draft: false
---

## Changed
- Upgraded command palette input semantics to a combobox pattern (`role="combobox"`, `aria-controls`, `aria-expanded`, `aria-activedescendant`).
- Upgraded results container semantics to a listbox with option roles and explicit `aria-selected` state.
- Added active descendant synchronization as keyboard focus moves through results.
- Added loading/empty-state handling for active descendant reset and status output when no matches are found.

## Why
- This focused batch advances the ongoing accessibility sweep for interactive keyboard-first UI.
- The update improves screen-reader orientation and command palette navigation clarity without changing visual behavior.
