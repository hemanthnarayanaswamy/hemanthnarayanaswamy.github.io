---
title: Certifications
icon: fas fa-certificate
---

{% assign certifications = site.certifications | sort: 'date' | reverse %}

{% if certifications == empty %}
> No certifications have been published yet. Add Markdown files under `_certifications/` to start building this timeline.
{% endif %}

{% for cert in certifications %}
  {% assign img_src = cert.image.path | default: cert.image %}
  {% if img_src %}
    {% if img_src contains '://' %}
      {% assign final_img_src = img_src %}
    {% else %}
      {% assign final_img_src = img_src | relative_url %}
    {% endif %}
  {% endif %}

  <article class="cert-card border rounded-3 p-3 p-md-4 mb-4 shadow-sm">
    <div class="row g-3 align-items-center">
      {% if final_img_src %}
        <div class="col-12 col-md-4">
          <a class="d-block" href="{{ cert.url | relative_url }}">
            <img
              src="{{ final_img_src }}"
              alt="{{ cert.image.alt | default: cert.title | escape }}"
              class="img-fluid rounded-3 w-100"
              loading="lazy"
            >
          </a>
        </div>
      {% endif %}
      <div class="col">
        <p class="text-uppercase text-muted fw-semibold mb-1 small">
          {{ cert.date | date: '%B %Y' }}
          {% if cert.issuer %}
            · {{ cert.issuer }}
          {% endif %}
        </p>
        <h2 class="h4 mb-2" data-toc-skip>
          <a class="no-text-decoration" href="{{ cert.url | relative_url }}">{{ cert.title }}</a>
        </h2>
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
            <a class="btn btn-outline-secondary btn-sm" href="{{ cert.credential_url }}" target="_blank" rel="noopener">
              <i class="fas fa-external-link-alt me-2"></i>Verify Credential
            </a>
          {% endif %}
        </div>
      </div>
    </div>
  </article>
{% endfor %}
