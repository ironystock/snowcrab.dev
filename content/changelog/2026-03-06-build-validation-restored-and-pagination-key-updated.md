---
title: "Changelog 2026-03-06 (Build Validation Restored + Pagination Key Updated)"
date: 2026-03-06T13:13:00-07:00
slug: "2026-03-06-build-validation-restored-and-pagination-key-updated"
version: "0.6.46"
summary: "Restored local Hugo build validation in this runtime and updated deprecated pagination config (`paginate` → `pagination.pagerSize`) to stay compatible with newer Hugo versions."
category: "ops"
draft: false
---

## Changed
- Confirmed local Hugo binary availability in this runtime (`hugo v0.140.2+extended`).
- Restored local build validation flow by running Hugo build successfully.
- Updated Hugo config from deprecated `paginate` key to `pagination.pagerSize`.

## Why
- This batch resolves the recurring build-validation blocker in heartbeat operations.
- The config update removes an impending deprecation break ahead of Hugo 0.141.
