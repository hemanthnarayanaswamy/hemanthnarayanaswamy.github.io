---
title: Certifications
icon: fas fa-certificate
media_local: true
portfolio: true
refactor: false
description: "From Linux fundamentals to cloud architecture, DevOps, security, AI, and Kubernetes. Each milestone connects learning with practical engineering."
---

{% assign certifications = site.certifications | where_exp: 'cert', 'cert.published != false' | sort: 'date' | reverse %}
{% assign years = certifications | group_by_exp: 'cert', 'cert.date | date: "%Y"' %}
<div data-collection data-collection-label="credentials">
  <div class="portfolio-toolbar" hidden data-filter-controls>
    <div class="portfolio-segments" role="group" aria-label="Filter certification years">
      <button type="button" data-filter="all" aria-pressed="true" aria-controls="credential-groups">All milestones</button>
      {% for year in years %}<button type="button" data-filter="{{ year.name }}" aria-pressed="false" aria-controls="credential-groups">{{ year.name }}</button>{% endfor %}
    </div>
    <p class="portfolio-results" data-filter-status aria-live="polite">{{ certifications.size }} credentials</p>
  </div>
  <div id="credential-groups">
    {% for year in years %}
      {% capture year_id %}certifications-{{ year.name }}{% endcapture %}
      {% capture year_index %}0{{ forloop.index }}{% endcapture %}
      <section class="portfolio-section" aria-labelledby="{{ year_id }}" data-filter-item="{{ year.name }}" data-item-count="{{ year.items.size }}">
        {% include portfolio-heading.html index=year_index id=year_id title=year.name count=year.items.size %}
        <div class="credential-list">
          {% for cert in year.items %}{% include credential-card.html cert=cert %}{% endfor %}
        </div>
      </section>
    {% endfor %}
  </div>
  {% if certifications == empty %}<p class="portfolio-empty">My certification journey will appear here.</p>{% endif %}
</div>
