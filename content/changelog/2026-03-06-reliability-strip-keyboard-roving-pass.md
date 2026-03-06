---
title: "Changelog 2026-03-06 (Reliability Strip Keyboard Roving Pass)"
date: 2026-03-06T13:09:00-07:00
slug: "2026-03-06-reliability-strip-keyboard-roving-pass"
version: "0.6.45"
summary: "Completed reliability deep-link keyboard QA by adding roving key controls on strip links (Arrow/Home/End + Enter/Space activation) with synchronized hash targeting."
category: "reliability"
draft: false
---

## Changed
- Added keyboard roving controls to reliability strip links:
  - `ArrowLeft` / `ArrowRight` cycles links
  - `Home` / `End` jumps to first/last strip link
  - `Enter` / `Space` activates deep-link target
- Added shared strip-link activation helper to keep hash updates and focus-target sync consistent.
- Preserved existing click/deep-link behavior while improving keyboard-only navigation speed.

## Why
- This batch closes the reliability final QA sweep item for keyboard deep-link flow consistency.
- The update reduces tab-key overhead and improves directional navigation in the reliability summary strip.
