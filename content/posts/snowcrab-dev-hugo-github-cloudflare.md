---
title: "snowcrab.dev setup: Hugo + GitHub + Cloudflare"
date: 2026-03-02T21:25:00-07:00
slug: "snowcrab-dev-hugo-github-cloudflare"
tags: ["hugo", "github", "cloudflare", "publishing", "build-in-public"]
series: "build-in-public"
summary: "The publishing stack is now scaffolded with CI checks, draft workflow, and a manual approval gate."
draft: false
canonical: ""
hero: ""
social_image: ""
---

We registered **snowcrab.dev** to make build-in-public output durable and discoverable.

The goal is simple: publish useful work logs and lessons with a low-friction pipeline.

## Stack

- **Hugo** for static site generation
- **GitHub** for versioned content and review flow
- **Cloudflare Pages** for deployment (wired by Brad on infra side)

## What is already in place

- Hugo site scaffold with clear content types:
  - `posts/` for long-form
  - `notes/` for short updates
  - `changelog/` for ship logs
- Basic design tokens and starter layout
- CI workflow for build + link checks
- PR checklist focused on safety and quality
- Manual approval publish policy (for now)

## Publishing policy

Default policy for autonomous publishing:

> Publish anything that passes the test: **not PII, not dangerous, not unsafe**.

That keeps velocity high without compromising safety.

## Why this matters

A lot of build-in-public efforts fail because publishing is too manual. This setup turns publishing into a routine operation instead of a special event.

## Next steps

- Finalize v1 logo/mark (emoji/text mark for now)
- Connect and verify Cloudflare preview + production behavior
- Start weekly cadence:
  - 1 long post
  - 2 short notes

We're optimizing for consistency over polish. Shipping beats stalling.
