---
title: "Changelog 2026-03-04 (Light Theme Contrast + Rhythm Pass 20)"
date: 2026-03-04T07:52:00-07:00
slug: "2026-03-04-light-theme-contrast-rhythm-pass-20"
version: "0.6.8"
summary: "Ran another light-theme micro-pass with warmer token tuning and clearer keyboard focus treatment for inline links."
draft: false
---

## Changed
- Warmed light theme tokens again (`--bg`, `--bg-elev`, `--text`, `--muted`, `--primary`, `--accent`, `--border`) while preserving contrast balance.
- Added explicit `a:focus-visible` outlines with offset and subtle radius so keyboard users can track link focus more clearly.

## Why
- Continue incremental readability and accessibility polish in light mode without changing layout structure.
