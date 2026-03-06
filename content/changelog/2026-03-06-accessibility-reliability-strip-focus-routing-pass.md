---
title: "Changelog 2026-03-06 (Accessibility: Reliability Strip Focus Routing Pass)"
date: 2026-03-06T04:16:00-07:00
slug: "2026-03-06-accessibility-reliability-strip-focus-routing-pass"
version: "0.6.10"
summary: "Improved keyboard flow in the Reliability module by routing focus to in-page status targets and aligning focus-visible styling with target highlights."
category: "design"
draft: false
---

## Changed
- Added explicit `aria-controls` wiring from each reliability strip pill to its destination status row.
- Made reliability destination targets programmatically focusable (`tabindex="-1"`) so in-page jumps can move keyboard focus to the referenced content.
- Updated the reliability dashboard script to focus hash targets on strip navigation (click/hash change), including direct deep links.
- Expanded highlight styles so `:focus-visible` on reliability targets matches existing `:target` styling.
- Removed `aria-live` from the Refresh button to avoid live-region behavior on an interactive control.

## Why
- This accessibility sweep batch focused on keyboard flow and orientation inside dynamic reliability UI.
- The update reduces context loss after in-page navigation and improves screen-reader/keyboard confidence when jumping between status summaries and detailed rows.
