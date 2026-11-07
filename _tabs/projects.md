---
title: Projects
icon: fas fa-project-diagram
media_local: true
refactor: false
portfolio: true
description: "Explore AI-assisted operations, enterprise retrieval, scalable cloud platforms, and reliable delivery through projects and production case studies."
hide_title: true
---

{% assign total_projects = site.data.projects.featured.size | plus: site.data.projects.production.size | plus: site.data.projects.academic.size %}
<div data-collection>
  <div class="portfolio-toolbar" hidden data-filter-controls>
    <div class="portfolio-segments" role="group" aria-label="Filter projects">
      <button type="button" data-filter="all" aria-pressed="true" aria-controls="project-groups">All work</button>
      <button type="button" data-filter="featured" aria-pressed="false" aria-controls="project-groups">Featured</button>
      <button type="button" data-filter="production" aria-pressed="false" aria-controls="project-groups">Production</button>
      <button type="button" data-filter="academic" aria-pressed="false" aria-controls="project-groups">Academic</button>
    </div>
    <p class="portfolio-results" data-filter-status aria-live="polite">{{ total_projects }} projects</p>
  </div>
  <div id="project-groups">
    {% assign groups = 'featured,production,academic' | split: ',' %}
    {% for group in groups %}
      {% case group %}
        {% when 'featured' %}{% assign group_title = 'Featured Projects' %}{% assign group_description = 'Completed platforms for AI-assisted operations and enterprise data discovery.' %}
        {% when 'production' %}{% assign group_title = 'Production Case Studies' %}{% assign group_description = 'Infrastructure and delivery platforms built for real production environments.' %}
        {% when 'academic' %}{% assign group_title = 'Academic Inspiration' %}{% assign group_description = 'An attributed example from Concordia’s published Electrical and Computer Engineering capstone archive.' %}
      {% endcase %}
      {% assign group_id = 'projects-' | append: group %}
      {% assign group_projects = site.data.projects[group] %}
      {% capture group_index %}0{{ forloop.index }}{% endcapture %}
      <section class="portfolio-section" data-filter-item="{{ group }}" data-item-count="{{ group_projects.size }}" aria-labelledby="{{ group_id }}">
        {% include portfolio-heading.html index=group_index id=group_id title=group_title description=group_description count=group_projects.size %}
        <div class="project-list">
          {% for project in group_projects %}
            <div class="project-list__item" data-reveal>{% include project-card.html project=project %}</div>
          {% endfor %}
        </div>
      </section>
    {% endfor %}
  </div>
</div>
