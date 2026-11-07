---
title: Certifications
icon: fas fa-certificate
media_local: true
---

{% assign certifications = site.certifications | where_exp: 'cert', 'cert.published != false' | sort: 'date' | reverse %}

<p class="text-muted">My learning journey from Linux administration to cloud operations, infrastructure automation, security, AI, and Kubernetes. Explore each milestone and its connection to my work, with the latest first.</p>

{% if certifications == empty %}
> No certifications have been published yet. Add Markdown files under `_certifications/` to start building this timeline.
{% endif %}

<div class="timeline-section" id="certification-journey">
<div class="timeline">
{% assign current_year = '' %}
{% for cert in certifications %}
  {% assign cert_year = cert.date | date: '%Y' %}
  {% if cert_year != current_year %}
    <h2 class="h4 mb-3" id="certifications-{{ cert_year }}">{{ cert_year }}</h2>
    {% assign current_year = cert_year %}
  {% endif %}
  {% assign final_img_src = nil %}
  {% assign img_src = cert.image.path | default: cert.image %}
  {% if img_src %}
    {% if img_src contains '://' %}
      {% assign final_img_src = img_src %}
    {% else %}
      {% assign final_img_src = img_src | relative_url %}
    {% endif %}
  {% endif %}

  <article class="cert-card timeline-entry p-3 p-md-4 mb-4">
    <div class="row g-3 align-items-center">
      {% if final_img_src %}
        <div class="col-12 col-md-4">
          <div class="cert-card__preview">
            <a href="{{ final_img_src }}" target="_blank" rel="noopener noreferrer" aria-label="View {{ cert.title | escape }} image"><img src="{{ final_img_src }}" alt="{{ cert.image.alt | default: cert.title | escape }}" width="{{ cert.image.width | default: 600 }}" height="{{ cert.image.height | default: 600 }}" loading="lazy"></a>
          </div>
        </div>
      {% endif %}
      <div class="col">
        <p class="text-uppercase text-muted fw-semibold mb-1 small">
          {{ cert.date | date: '%B %Y' }}
          {% if cert.issuer %}
            · {{ cert.issuer }}
          {% endif %}
        </p>
        <h3 class="h4 mb-2" data-toc-skip>
          <a class="no-text-decoration" href="{{ cert.url | relative_url }}">{{ cert.title }}</a>
        </h3>
        {% if cert.description %}
          <p class="mb-3">{{ cert.description }}</p>
        {% endif %}
        {% if cert.journey_summary %}
          <p class="mb-3 text-muted">{{ cert.journey_summary }}</p>
        {% endif %}
        <div class="d-flex flex-wrap gap-2">
          <a class="btn btn-outline-primary btn-sm" href="{{ cert.url | relative_url }}">
            <i class="fas fa-book-open me-2"></i>Read Journey
          </a>
          {% if cert.credential_url %}
            <a class="btn btn-outline-secondary btn-sm" href="{{ cert.credential_url | escape }}" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-external-link-alt me-2"></i>Verify Credential
            </a>
          {% endif %}
          {% if cert.certificate_file %}
            <a class="btn btn-outline-secondary btn-sm" href="{{ cert.certificate_file | relative_url }}" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-file-pdf me-2"></i>View Certificate
            </a>
          {% endif %}
        </div>
      </div>
    </div>
  </article>
{% endfor %}
</div>
</div>
