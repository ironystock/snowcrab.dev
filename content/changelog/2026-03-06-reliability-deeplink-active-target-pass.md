---
title: "Changelog 2026-03-06 (Reliability Deep-Link Active Target Pass)"
date: 2026-03-06T12:38:00-07:00
slug: "2026-03-06-reliability-deeplink-active-target-pass"
version: "0.6.43"
summary: "Improved reliability keyboard/deep-link orientation by syncing strip link active states (`aria-current=location`) with hash targets and adding visual active-target styling."
category: "reliability"
draft: false
---

## Changed
- Added strip-link active-target synchronization based on current reliability hash target.
- Added `aria-current="location"` on the active strip link for assistive-tech orientation.
- Added active-target visual styling for strip links to clearly indicate the current deep-linked row.
- Updated hash-focus flow so active-link state stays in sync on valid and invalid hash transitions.

## Why
- This focused QA/refinement batch improves keyboard deep-link wayfinding in the reliability module.
- The update makes row navigation state explicit after strip navigation or direct URL hash entry.
