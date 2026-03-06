---
title: "Changelog 2026-03-06 (CI Fix: List Template File Nil)"
date: 2026-03-06T09:14:00-07:00
slug: "2026-03-06-ci-fix-list-template-file-nil"
version: "0.6.6"
summary: "Fixed Hugo build failure on taxonomy list pages by removing `.File` dependency from list item id generation."
draft: false
---

## Fixed
- Hugo CI build error on `/tags` and `/series` list rendering caused by `.File` being nil in list template.

## Changed
- List item heading id now derives from `md5(.RelPermalink)` instead of `.File.TranslationBaseName`.
