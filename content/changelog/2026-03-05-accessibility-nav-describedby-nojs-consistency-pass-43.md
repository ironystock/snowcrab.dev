---
title: "Changelog 2026-03-05 (Accessibility Nav Describedby No-JS Consistency Pass 43)"
date: 2026-03-05T11:40:00-07:00
slug: "2026-03-05-accessibility-nav-describedby-nojs-consistency-pass-43"
version: "0.9.28"
summary: "Improved baseline navigation semantics by removing static `aria-describedby` from main nav markup and relying on runtime overflow detection to attach helper hints only when valid."
draft: false
---

## Changed
- Removed default `aria-describedby="main-nav-hint"` from main nav template markup.
- Kept runtime behavior that conditionally adds/removes `aria-describedby` only when horizontal overflow exists.

## Why
- Avoids a no-JS mismatch where nav referenced a hidden helper description that was never revealed.
- Keeps helper-description wiring aligned with real overflow state and script availability.
