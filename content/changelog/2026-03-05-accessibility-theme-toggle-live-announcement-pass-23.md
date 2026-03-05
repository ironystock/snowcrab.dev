---
title: "Changelog 2026-03-05 (Accessibility Theme Toggle Live Announcement Pass 23)"
date: 2026-03-05T06:18:00-07:00
slug: "2026-03-05-accessibility-theme-toggle-live-announcement-pass-23"
version: "0.9.8"
summary: "Improved theme toggle accessibility by adding a polite live status announcement so screen-reader users get explicit confirmation when theme mode changes."
draft: false
---

## Changed
- Added a hidden live status region next to the theme toggle (`role="status"`, `aria-live="polite"`, `aria-atomic="true"`).
- Linked the toggle to the status region via `aria-describedby` for clearer assistive context.
- Updated theme toggle script to announce explicit state changes ("Theme changed to dark/light mode") only on user-triggered toggles.

## Why
- Provides immediate, explicit confirmation after interaction without requiring users to infer change from visual cues.
- Reduces ambiguity for non-visual users switching between dark and light modes.
