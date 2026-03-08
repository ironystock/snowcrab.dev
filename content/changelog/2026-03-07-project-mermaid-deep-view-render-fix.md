---
title: "Changelog 2026-03-07 (Project Mermaid Deep-View Render Fix)"
date: 2026-03-07T18:28:00-07:00
slug: "2026-03-07-project-mermaid-deep-view-render-fix"
version: "0.9.29"
summary: "Fixed tiny/empty Mermaid deep-view rendering by rendering only visible diagrams initially and re-rendering when architecture tabs are shown."
draft: false
---

## Fixed
- Deep Mermaid maps on project pages could render as tiny/near-empty when initialized while hidden.

## Changed
- Mermaid init now renders only visible, unrendered diagrams on first pass.
- Added architecture panel event (`architecture:panel-shown`) so Mermaid diagrams render when tabs become visible.
- Updated architecture tab controller to emit panel-shown event on tab changes.
