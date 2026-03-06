---
title: "Changelog 2026-03-06 (Command Palette Page-Nav + Hint Clarity Pass)"
date: 2026-03-06T12:09:00-07:00
slug: "2026-03-06-command-palette-page-nav-and-hint-clarity-pass"
version: "0.6.41"
summary: "Improved command palette keyboard throughput with PageUp/PageDown jumps and clearer assistive hint wiring via input-describedby and labeled result listbox semantics."
category: "design"
draft: false
---

## Changed
- Added `PageUp` / `PageDown` keyboard support in command palette results (jump by 5 items).
- Linked command input to hint copy via `aria-describedby`.
- Added explicit listbox label for search results.
- Updated visible/dynamic hint text to include PageUp/PageDown guidance.

## Why
- This focused batch improves keyboard throughput and clarity for heavier command palette use.
- The update also strengthens assistive context for first-time keyboard users.
