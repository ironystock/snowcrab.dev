---
title: "Changelog 2026-03-05 (Accessibility Changelog Filter Tab Pattern Pass 15)"
date: 2026-03-05T04:18:00-07:00
slug: "2026-03-05-accessibility-changelog-filter-tab-pattern-pass-15"
version: "0.9.0"
summary: "Aligned changelog category filters with tab-style accessibility semantics, including selected state and roving focus behavior."
draft: false
---

## Changed
- Updated changelog filter controls to use a tablist pattern (`role="tablist"` + `role="tab"`).
- Replaced pressed-state attributes with selected-state semantics (`aria-selected`) and active/inactive `tabindex` values.
- Updated keyboard behavior so Arrow/Home/End moves both focus and active filter, with Enter/Space activation support.

## Why
- Better matches assistive-tech expectations for mutually exclusive category switches.
- Improves keyboard-only navigation by keeping focus and active state synchronized.
