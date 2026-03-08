---
title: "Changelog 2026-03-07 (Phase 5: Accessibility Hardening Pass)"
date: 2026-03-07T17:18:00-07:00
slug: "2026-03-07-phase5-accessibility-hardening-keyboard-focus-contrast"
version: "0.9.5"
summary: "Completed a focused accessibility pass: stronger keyboard tab behavior, improved focus management, and consistent focus-ring styling for interactive controls."
draft: false
category: "design"
---

## Changed
- Upgraded shared home-tab behavior (`/static/js/home-tabs.js`) to use a stronger ARIA tab pattern:
  - roving `tabindex`
  - `aria-controls` wiring
  - `aria-hidden` + `tabindex` panel sync
  - keyboard support for `ArrowLeft/Right/Up/Down`, `Home`, and `End`
- Added explicit `tabindex` + `aria-controls` defaults for homepage and projects tab buttons so no-JS state remains sane.
- Introduced a reusable `--focus-ring` design token and normalized focus-visible outlines across links and form/button controls for more consistent keyboard visibility.

## Why
- Improves keyboard predictability and focus order in tabbed UI surfaces.
- Reduces ambiguity for assistive tech by tightening tab/panel relationships.
- Raises visibility of focused interactive elements, especially in dense card-driven layouts.

## Artifacts
- Before screenshots:
  - `/artifacts/2026-03-07-a11y-hardening/before-home.png`
  - `/artifacts/2026-03-07-a11y-hardening/before-projects.png`
