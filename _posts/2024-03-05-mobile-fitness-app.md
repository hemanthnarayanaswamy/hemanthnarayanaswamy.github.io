---
title: "Mobile Fitness App"
description: "Cross-platform coaching app integrated with wearables."
date: 2024-03-05 08:30:00 +0530
categories: [Projects]
tags: [React Native, Firebase, HealthKit, Google Fit]
permalink: /projects/mobile-fitness-app/
hidden: true
image:
  path: /assets/img/projects/fitness-app.jpg
  alt: Mobile fitness app screens
---

## Overview

- React Native app syncing with Apple HealthKit and Google Fit.
- Personalized workout plans, streak tracking, and progress visualizations.

## Architecture

- **Client:** React Native + Expo, offline cache, push notifications.
- **Backend:** Firebase Auth + Firestore + Cloud Functions.
- **Integrations:** HealthKit/Google Fit APIs, Stripe for premium plans.

## Highlights

1. Adaptive coaching (plan adjusts automatically from wearable signals).
2. Social challenges + leaderboard widgets.
3. Weekly insights emailed via serverless cron.

## Links

- [Live Demo](https://example.com/fitness-app)
- [GitHub Repo](https://github.com/hemanthnarayanaswamy/fitness-app)
