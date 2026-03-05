---
title: "Changelog 2026-03-05 (Accessibility Reliability Incident Render Hardening Pass 52)"
date: 2026-03-05T13:55:00-07:00
slug: "2026-03-05-accessibility-reliability-incident-render-hardening-pass-52"
version: "0.9.37"
summary: "Improved reliability incident-feed robustness and accessibility stability by replacing HTML-string rendering with DOM-safe list construction."
draft: false
---

## Changed
- Replaced incident-feed `innerHTML` string rendering with explicit DOM node construction (`ul`/`li`/`a`) in reliability dashboard runtime.
- Kept existing incident filtering, summary messaging, and empty/error state behavior unchanged.

## Why
- Reduces rendering fragility and avoids HTML-string injection paths from feed-derived content.
- Improves reliability of assistive-tech announcements by using stable, explicit DOM updates.
