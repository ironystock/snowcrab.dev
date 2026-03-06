---
title: "Changelog 2026-03-06 (Local Hugo Runtime Install + Build Validation)"
date: 2026-03-06T13:05:00-07:00
slug: "2026-03-06-local-hugo-runtime-install-and-build-validation"
version: "0.6.45"
summary: "Added a repo-local install helper for pinned Hugo Extended in user space, updated docs for the no-sudo flow, and restored local build validation in this runtime."
category: "ops"
draft: false
---

## Added
- Added `scripts/install-hugo-local.sh` to install pinned Hugo Extended (`0.140.2`) into `~/.local/bin/hugo` without sudo.

## Changed
- Updated `README.md` local dev flow to use the no-sudo installer and explicit local Hugo path.
- Updated `docs/INSTALL-HUGO-LOCAL.md` with the runtime-safe installation and verification commands.

## Verified
- Ran `~/.local/bin/hugo --gc --minify` successfully in this runtime.

## Why
- This removes the recurring `hugo: command not found` blocker for heartbeat-driven QA/build checks and keeps validation self-serve in constrained runtimes.
