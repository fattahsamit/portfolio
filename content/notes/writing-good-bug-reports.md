---
title: What makes a bug report easy to fix
description: Five things I put in every defect report so developers can reproduce it the first time.
date: 2026-11
tags: [QA, Process]
draft: true # set to false to publish
---

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

Include the build/version, browser or device and the test data needed to reproduce the issue. Attach the smallest useful evidence:

- **UI issue:** a screenshot or short screen recording that shows the relevant state and steps.
- **API issue:** the method and endpoint, a sanitized request payload, response status and body and a request or trace ID if available.
- **Intermittent or backend issue:** a timestamped, relevant logs.

Redact credentials, tokens, personal data and unrelated traffic before sharing evidence. A short excerpt is usually more useful than a large unfiltered attachment.

## 5. Impact

Who hits this, how often and is there a workaround? That's what drives priority, not how
annoying the bug was to find.
