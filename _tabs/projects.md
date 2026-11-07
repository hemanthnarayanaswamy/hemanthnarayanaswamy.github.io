---
title: Projects
icon: fas fa-project-diagram
media_local: true
refactor: false
---

<p class="text-muted">Projects and production case studies spanning AI-assisted operations, enterprise retrieval, cloud platforms, and reliable delivery.</p>

## Featured Projects

<div class="row gy-4 project-list">
  {% for project in site.data.projects.featured %}
    <div class="col-12">{% include project-card.html project=project %}</div>
  {% endfor %}
</div>

## Production DevOps Case Studies

<div class="row gy-4 project-list">
  {% for project in site.data.projects.production %}
    <div class="col-12">{% include project-card.html project=project %}</div>
  {% endfor %}
</div>

## Academic Inspiration

<p class="text-muted">An attributed example from Concordia's published Electrical and Computer Engineering capstone archive.</p>

<div class="row gy-4 project-list">
  {% for project in site.data.projects.academic %}
    <div class="col-12">{% include project-card.html project=project %}</div>
  {% endfor %}
</div>
