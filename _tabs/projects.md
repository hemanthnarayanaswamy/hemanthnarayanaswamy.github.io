---
title: Projects
icon: fas fa-project-diagram
---

{% assign featured_projects = site.data.projects.featured %}
{% assign contribution_projects = site.data.projects.open_source %}
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
      {% include project-card.html project=project link_title=false show_demo=false %}
    </div>
  {% endfor %}
</div>

## Client Work

<div class="row gy-4">
  {% for project in client_projects %}
    <div class="col-12">
      {% include project-card.html project=project link_title=false show_demo=false %}
    </div>
  {% endfor %}
</div>
