---
title: Projects
icon: fas fa-project-diagram
order: 4
---

{% assign featured_projects = site.data.projects.featured %}
{% assign contribution_projects = site.data.projects.open_source %}
{% assign academic_projects = site.data.projects.academic %}
{% assign client_projects = site.data.projects.client %}

## Featured Projects

<div class="row gy-4">
  {% for project in featured_projects %}
    <div class="col-12">
      {% include project-card.html project=project %}
    </div>
  {% endfor %}
</div>

## Open Source Contributions

<div class="row gy-4">
  {% for project in contribution_projects %}
    <div class="col-12">
      {% include project-card.html project=project %}
    </div>
  {% endfor %}
</div>

## Academic Projects

<div class="row gy-4">
  {% for project in academic_projects %}
    <div class="col-12">
      {% include project-card.html project=project %}
    </div>
  {% endfor %}
</div>

## Client Work

<div class="row gy-4">
  {% for project in client_projects %}
    <div class="col-12">
      {% include project-card.html project=project %}
    </div>
  {% endfor %}
</div>
