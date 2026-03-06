---
title: "Changelog 2026-03-06 (Command Palette Keyboard + Focus Polish Pass)"
date: 2026-03-06T11:12:00-07:00
slug: "2026-03-06-command-palette-keyboard-focus-polish-pass"
version: "0.6.38"
summary: "Improved command palette keyboard scan flow with Home/End navigation and explicit focus-visible styling on result links."
category: "design"
draft: false
---

## Changed
- Added `Home` key support in command palette results to jump to the first result.
- Added `End` key support to jump directly to the last visible result.
- Added explicit `:focus-visible` styling for command result links to improve keyboard orientation while navigating options.

## Why
- This focused polish batch improves keyboard-only navigation consistency and scan flow inside the command/search surface.
- The update reduces keypress friction in long result lists and clarifies active focus state.
