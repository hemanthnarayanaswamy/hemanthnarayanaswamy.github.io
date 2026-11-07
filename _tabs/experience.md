---
title: Work Experience
icon: fas fa-briefcase
media_local: true
refactor: false
portfolio: true
description: "Cloud platforms, reliable releases, and automation across engineering and business operations. Explore the work and the education behind it."
---

{% assign experience_items = site.data.experience %}
{% assign education_items = site.data.education %}


<nav class="portfolio-jump-nav" aria-label="Career sections">
  <a href="#professional-experience">Experience <span aria-hidden="true">↘</span></a>
  <a href="#education">Education <span aria-hidden="true">↘</span></a>
</nav>
<div class="portfolio-toolbar" data-timeline-controls hidden>
  <span class="portfolio-eyebrow">Explore each chapter</span>
  <div class="portfolio-segments" role="group" aria-label="Timeline controls">
    <button type="button" data-expand="true" aria-controls="experience-timeline education-timeline">Expand all</button>
    <button type="button" data-expand="false" aria-controls="experience-timeline education-timeline">Collapse all</button>
  </div>
  <span class="portfolio-sr-only" data-timeline-status aria-live="polite"></span>
</div>
<section class="portfolio-section" aria-labelledby="professional-experience">
{% include portfolio-heading.html index='01' id='professional-experience' title='Professional Experience' description='Expand a role to explore the teams, platforms, and results.' count=experience_items.size %}
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

</section>
<section class="portfolio-section" aria-labelledby="education">
{% include portfolio-heading.html index='02' id='education' title='Education' description='Engineering foundations, with related topics from the published program curricula.' count=education_items.size %}

<div class="timeline-section" id="education-timeline">
  <div class="timeline">
    {% for item in education_items %}
      {% include timeline-entry.html item=item %}
    {% endfor %}
  </div>
</div>

</section>
