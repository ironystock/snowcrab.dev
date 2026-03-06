---
title: "Changelog 2026-03-05 (Reliability Last-Refreshed Time Semantics Pass 69)"
date: 2026-03-05T18:10:00-07:00
slug: "2026-03-05-reliability-last-refreshed-time-semantics-pass-69"
version: "0.9.54"
summary: "Improved reliability metadata semantics by converting the last-refreshed display to a proper `<time>` element with machine-readable datetime updates."
draft: false
---

## Changed
- Updated reliability card markup to use `<time id="reliability-last-refreshed">` instead of a generic span.
- Updated reliability runtime refresh logic to set both human-readable text and `datetime` ISO value on each refresh cycle.

## Why
- Improves semantic accuracy and machine-readability of refresh metadata.
- Supports assistive tools and downstream parsers that rely on explicit time semantics.
