---
title: Work Experience
icon: fas fa-briefcase
media_local: true
refactor: false
---

{% assign experience_items = site.data.experience %}
{% assign education_items = site.data.education %}

## Professional Experience

<p class="text-muted">My work across cloud platforms, production reliability, and operations automation. Expand a role to explore the teams, projects, and results.</p>

<div class="timeline-section" id="experience-timeline">
  <div class="timeline">
    {% for item in experience_items %}
      {% assign start_label = item.start | date: '%b %Y' %}
      {% if item.end %}
        {% assign end_label = item.end | date: '%b %Y' %}
      {% else %}
        {% assign end_label = 'Present' %}
      {% endif %}
      {% assign period_label = start_label | append: ' — ' | append: end_label %}

      {% assign combined_highlights = '' | split: '' %}
      {% if item.work %}
        {% assign combined_highlights = combined_highlights | concat: item.work %}
      {% endif %}
      {% if item.project %}
        {% assign combined_highlights = combined_highlights | concat: item.project %}
      {% endif %}
      {% if item.technology %}
        {% assign combined_highlights = combined_highlights | concat: item.technology %}
      {% endif %}

      {% include timeline-entry.html
        item=item
        title_field='role'
        subtitle_field='company'
        summary_field='summary'
        period=period_label
        highlights=combined_highlights
      %}
    {% endfor %}
  </div>
</div>

## Education

<p class="text-muted">My engineering education, with related topics from the published program curricula.</p>

<div class="timeline-section" id="education-timeline">
  <div class="timeline">
    {% for item in education_items %}
      {% include timeline-entry.html item=item %}
    {% endfor %}
  </div>
</div>
