# Copilot Instructions for hemanthn.fyi

Personal portfolio site built on **Jekyll + Chirpy theme** with customizations for a hybrid portfolio/blog experience.

## Architecture Overview

```
_config.yml           # Site config & collections (posts, tabs, certifications)
_data/                # Structured YAML data → consumed in Liquid templates
  ├── projects.yml    # featured / open_source / client project lists
  ├── experience.yml  # Work history (role, company, work, project, technology)
  └── tech_icons.yml  # Tech name → icon URL mapping
_tabs/                # Top-level pages (about, skills, projects, certifications…)
_posts/               # Blog posts & project write-ups (hidden: true for project pages)
_certifications/      # Custom collection under `_config.yml > collections`
_includes/            # Reusable Liquid partials (project-card, timeline-entry, skill-chips…)
_layouts/             # Page templates extending `default.html`
_sass/                # SCSS structure: base → components → layout → pages
_javascript/          # Rollup-bundled JS modules (home.js, theme.js, etc.)
```

## Key Conventions

### Content Creation
- **Blog posts**: Add to `_posts/YYYY-MM-DD-slug.md` with front matter `layout: post`, `categories`, `tags`
- **Project pages**: Create post with `hidden: true` and `permalink: /projects/<slug>/`; reference from `_data/projects.yml`
- **Certifications**: Add to `_certifications/` with front matter `issuer`, `credential_url`, `timeline_highlights`
- **Tab pages**: Files in `_tabs/` auto-generate nav; use `icon: fas fa-*` for sidebar icon

### Data-Driven Components
- Projects render via `{% include project-card.html project=project %}` reading `_data/projects.yml`
- Experience/Education timelines use `{% include timeline-entry.html item=item %}` with field mapping params
- Skills use inline pipe-separated syntax: `{% assign skills = "Python|<icon-url>,Go|<icon-url>" %}` → `{% include skill-chips.html items=skills %}`

### Styling
- SCSS lives in `_sass/`; `main.scss` forwards: `base`, `components`, `layout`, `pages`
- Bootstrap 5 is PurgeCSS'd via `purgecss.js` to `_sass/vendors/_bootstrap.scss`
- Custom component styles go in `_sass/components/`; page-specific styles in `_sass/pages/`

### JavaScript
- Source in `_javascript/` → bundled by Rollup to `assets/js/dist/`
- PWA service worker source: `_javascript/pwa/`

## Development Workflow

```bash
# Install dependencies
bundle install && npm install

# Build CSS (PurgeCSS) + JS (Rollup)
npm run build

# Local dev server with live reload
bundle exec jekyll serve --livereload

# Lint checks
npm run lint:js && npm run lint:scss
```

## Deployment

GitHub Actions workflow [pages-deploy.yml](.github/workflows/pages-deploy.yml) triggers on push to `main`:
1. Installs Ruby 3.3, runs `bundle exec jekyll b`
2. Runs `htmlproofer` on `_site/`
3. Deploys to GitHub Pages

## Common Tasks

| Task | How |
|------|-----|
| Add new project | 1. Create `_posts/...md` with `hidden: true` 2. Add entry to `_data/projects.yml` |
| Add certification | Create `_certifications/YYYY-MM-DD-slug.md` with required front matter |
| Add new tab/page | Create `_tabs/<name>.md` with `title`, `icon` front matter |
| Add tech icon | Map technology name → CDN URL in `_data/tech_icons.yml` |
| Customize component | Override/extend partials in `_includes/` and styles in `_sass/components/` |

## Front Matter Examples

```yaml
# Project post (_posts/)
---
title: "Project Name"
hidden: true
permalink: /projects/project-slug/
categories: [Projects]
tags: [React, Node.js]
image:
  path: /assets/img/projects/project.jpg
---

# Certification (_certifications/)
---
title: Certification Name
date: 2024-01-01
issuer: Issuing Org
credential_url: https://...
timeline_highlights:
  - Highlight one
  - Highlight two
---
```

## Notes for AI Agents

- Always preserve existing front matter keys when editing content files
- When adding projects, ensure both the `_posts/` file AND `_data/projects.yml` entry exist
- Icon URLs should use jsDelivr CDN pattern: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/<name>/<name>-original.svg`
- Timeline components expect specific field names (`role`, `company`, `work`, `project`, `technology` for experience)
