---
title: "Changelog 2026-03-05 (Accessibility No-JS Dynamic Module Fallback Pass 39)"
date: 2026-03-05T10:40:00-07:00
slug: "2026-03-05-accessibility-no-js-dynamic-module-fallback-pass-39"
version: "0.9.24"
summary: "Improved no-JS accessibility behavior for dynamic modules by hiding non-functional JS-only controls by default and adding explicit fallback guidance for changelog filtering and reliability status surfaces."
draft: false
---

## Changed
- Marked changelog filter controls as JS-only and hid them by default; script now reveals controls only when JavaScript is available.
- Added a no-JS fallback note on changelog list pages clarifying that all entries are shown when filtering is unavailable.
- Removed static `aria-busy` from reliability markup and moved busy-state activation into runtime script initialization.
- Added a no-JS fallback note in the reliability card with guidance to use GitHub links for current deploy/CI status.

## Why
- Prevents users from encountering non-functional interactive controls when JavaScript is disabled.
- Improves clarity and trust by explicitly communicating fallback behavior for dynamic surfaces.
