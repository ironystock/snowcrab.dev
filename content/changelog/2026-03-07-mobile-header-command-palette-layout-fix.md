---
title: "Changelog 2026-03-07 (Mobile Header Command Palette Layout Fix)"
date: 2026-03-07T14:05:00-07:00
slug: "2026-03-07-mobile-header-command-palette-layout-fix"
version: "0.8.5"
summary: "Fixed mobile header collision between brand and command palette trigger by restructuring header rows and hiding shortcut text on smaller widths."
draft: false
---

## Fixed
- Mobile header overlap where the command palette trigger collided with/truncated brand text.

## Changed
- At <=900px: header now uses explicit stacked rows (brand/theme, command trigger, nav).
- Hidden command shortcut text on smaller screens to reduce trigger width pressure.
- Added brand text overflow handling to prevent visual clipping.
