---
layout: "project"
title: "Factory Edge Release Platform"
description: "Replaced manual SSH/tmux releases with automated delivery across 50–70 factory inspection stations, preserving live Socket.IO sessions during deployments."
date: "2026-11-07"
project_id: "factory-edge-release-platform"
permalink: "/projects/factory-edge-release-platform/"
hidden: true
comments: false
toc: true
media_local: true
refactor: false
categories: ["Projects"]
tags: ["GitHub Actions","Docker Compose","NGINX","Socket.IO"]
---

## Overview

A production delivery case study from the KonnectAI inspection platform at Promark Electronics. I replaced manual SSH/tmux deployments with end-to-end CI/CD for **50–70 on-premises inspection stations**.

## Delivery Architecture

GitHub Actions self-hosted runners and Docker Compose provide the deployment workflow. NGINX supports blue/green releases, with WebSocket-aware sticky routing to keep live Socket.IO inspection sessions connected during deployments.

## Engineering Highlights

- Repeatable delivery to factory-floor systems.
- Blue/green release switching for the on-premises inspection platform.
- Routing designed around long-lived inspection sessions.
- Automation that connects cloud engineering practices with factory operations.

## My Contribution

CI/CD architecture, self-hosted deployment automation, container delivery, and release routing for the inspection platform.
