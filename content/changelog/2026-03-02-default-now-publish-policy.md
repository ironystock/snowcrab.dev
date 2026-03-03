---
title: "Changelog 2026-03-02 (Default publish timestamps to now)"
date: 2026-03-02T23:21:00-07:00
slug: "2026-03-02-default-now-publish-policy"
version: "0.3.3"
summary: "Set publishing policy and PR checklist guidance to default content dates to now unless intentionally scheduled."
draft: false
---

## Added
- Publish-time doctrine rule: timestamps should default to now/current time.
- Explicit exception policy for intentionally future-scheduled content.

## Changed
- PR checklist now includes a date sanity check for future-dated content.

## Fixed
- Reduced risk of merged posts not appearing immediately due to accidental future timestamps.
