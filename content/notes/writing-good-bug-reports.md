---
title: What makes a bug report easy to fix
description: Five things I put in every defect report so developers can reproduce it the first time.
date: 2026-11-01
tags: [QA, Process]
draft: true # set to false to publish
---

> **Sample post.** Replace or delete this file. It exists to show how notes work:
> drop a `.md` or `.mdx` file into `content/notes/` and it appears at `/notes`.

A good bug report saves more time than a fast one. These are the five things I always include.

## 1. A title that states the failure

"Payment fails" isn't enough. **"Card payment returns 500 when amount has 3 decimal places"**
tells the reader where to look before they open the ticket.

## 2. Minimal steps to reproduce

Number the steps and remove anything that isn't needed to trigger the bug.

```text
1. Log in as a merchant user
2. Create an invoice for 10.005 BDT
3. Click "Pay by card"
```

## 3. Expected vs. actual

One line each. Say what the spec, acceptance criteria, or common sense says should happen.

## 4. Environment and evidence

Build/version, browser or device, test data used, plus a screenshot, video, HAR file, or log excerpt.

## 5. Impact

Who hits this, how often, and is there a workaround? That's what drives priority, not how
annoying the bug was to find.
