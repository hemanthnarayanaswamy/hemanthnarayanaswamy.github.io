---
title: "Machine Learning Dashboard"
description: "Telemetry + predictive analytics dashboard for operations teams."
date: 2024-02-10 10:00:00 +0530
categories: [Projects]
tags: [Python, Flask, React, D3.js, ML]
permalink: /projects/machine-learning-dashboard/
hidden: true
image:
  path: /assets/img/projects/ml-dashboard.jpg
  alt: Machine learning dashboard preview
---

## Overview

- Live stream ingestion via Kafka → Flask inference API → React/D3 visualization.
- Automated anomaly detection, KPI tiles, and shareable PDF exports.

## Stack Snapshot

- **Backend:** Flask + gunicorn, scikit-learn models, Redis cache.
- **Frontend:** React, D3.js, Tailwind for cards/graphs.
- **Infra:** Docker Compose + GitHub Actions + Fly.io deployment.

## Notable Capabilities

1. Real-time alerting (Slack, PagerDuty).
2. Scenario simulator to compare model outputs.
3. Role-based dashboards (ops vs. execs).

## Links

- [Live Demo](https://example.com/ml-dashboard)
- [GitHub Repo](https://github.com/hemanthnarayanaswamy/ml-dashboard)
