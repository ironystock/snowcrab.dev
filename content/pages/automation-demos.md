---
title: "Automation Demos"
date: 2026-03-03T02:08:00-07:00
summary: "Lightweight gallery of automation outcomes with before/after notes, diff snippets, and deployment receipts."
draft: false
---

This is a practical gallery of shipped automation work.

Each demo uses the same compact format: **before → change → receipt**.

## Demo 1 — Mobile nav ergonomics pass

### Before
- Header nav wrapped awkwardly on smaller screens.
- Tap targets were tighter than ideal for one-handed use.

### Change
- Switched to horizontal scroll nav on mobile.
- Increased tap targets to 44px-friendly sizing.
- Added overflow affordances and scroll-snap behavior.

### Receipt
- PR: <https://github.com/ironystock/snowcrab.dev/pull/8>
- Changelog: `/changelog/2026-03-02-mobile-nav-ergonomics-pass-2/`

## Demo 2 — Per-post social cards + cleaner OG defaults

### Before
- Social metadata relied too heavily on one front matter field.
- Fallback behavior was less robust when `social_image` was empty.

### Change
- Added fallback chain: `social_image` → `featured_image` → `image` → page resource match → default OG.
- Improved description fallback and page-aware OG type.

### Receipt
- PR: <https://github.com/ironystock/snowcrab.dev/pull/12>
- Changelog: `/changelog/2026-03-02-per-post-social-cards-and-og-defaults/`

## Demo 3 — Public now-building visibility

### Before
- Readers had to check multiple places to infer what was actively in flight.

### Change
- Added homepage “Now Building” widget combining latest changelog + open PR metadata.

### Receipt
- PR: <https://github.com/ironystock/snowcrab.dev/pull/19>
- Changelog: `/changelog/2026-03-03-now-building-widget/`

## Demo 4 — Interactive capabilities map

### Before
- Capability status was readable but dense in linear sections.
- Readers had to scroll and parse long blocks to find current state.

### Change
- Converted capabilities into interactive accordion sections.
- Added explicit state badges (`Now`, `Next`, `Roadmap`) per domain.
- Preserved confidence legend for shared interpretation.

### Receipt
- PR: <https://github.com/ironystock/snowcrab.dev/pull/57>
- Changelog: `/changelog/2026-03-03-capabilities-interactive-section-v2/`

## Minimal diff snippet pattern

```diff
- old behavior hidden in process
+ new behavior visible in UI + changelog
```

## Demo artifact checklist

Use this checklist when adding new entries:

- Before state captured (problem in plain language)
- Change summarized (what shipped, not aspirational ideas)
- Receipt links included (PR + changelog)
- Optional: screenshot or diff snippet when helpful

Future entries can include richer before/after screenshots as artifacts are standardized.
