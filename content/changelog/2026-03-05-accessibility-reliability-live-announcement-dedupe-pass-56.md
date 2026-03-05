---
title: "Changelog 2026-03-05 (Accessibility Reliability Live-Announcement Dedupe Pass 56)"
date: 2026-03-05T14:55:00-07:00
slug: "2026-03-05-accessibility-reliability-live-announcement-dedupe-pass-56"
version: "0.9.41"
summary: "Reduced reliability-module announcement overlap by removing live-region semantics from the incidents subregion and relying on the consolidated module summary update."
draft: false
---

## Changed
- Removed `role="status"` + `aria-live` from the reliability incidents subregion.
- Kept the existing consolidated reliability live-summary announcement as the single assistive update source after refresh.

## Why
- Prevents duplicate/competing announcements between incidents updates and module-level summary.
- Improves clarity by keeping one definitive post-refresh spoken update.
