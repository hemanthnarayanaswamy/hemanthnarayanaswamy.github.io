---
title: Skills
icon: fas fa-code
media_local: true
refactor: false
---

<div class="profile-previews" aria-label="Coding profiles">
  <a class="profile-preview profile-preview--leetcode" href="https://leetcode.com/u/hemanthhawk/" target="_blank" rel="noopener noreferrer">
    <div class="profile-preview__window" aria-hidden="true">
      <span></span><span></span><span></span>
      <span class="profile-preview__address">leetcode.com/u/hemanthhawk</span>
    </div>
    <div class="profile-preview__placeholder">
      <img src="{{ '/assets/img/skills/leetcode-original.svg' | relative_url }}" width="64" height="64" alt="">
      <span class="profile-preview__platform">LeetCode</span>
      <span class="profile-preview__handle">hemanthhawk</span>
      <span class="profile-preview__prompt">Explore my problem-solving profile</span>
    </div>
    <div class="profile-preview__caption">
      <span><strong>LeetCode</strong><span class="profile-preview__username">@hemanthhawk</span></span>
      <span class="profile-preview__action">View profile <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></span>
    </div>
  </a>
  <a class="profile-preview" href="https://github.com/hemanthnarayanaswamy" target="_blank" rel="noopener noreferrer">
    <div class="profile-preview__window" aria-hidden="true">
      <span></span><span></span><span></span>
      <span class="profile-preview__address">github.com/hemanthnarayanaswamy</span>
    </div>
    <img class="profile-preview__screenshot" src="{{ '/assets/img/profiles/github-profile.jpg' | relative_url }}" width="1440" height="1000" alt="Screenshot of Hemanth Narayanaswamy's GitHub profile, showing his introduction, repositories, and achievements." decoding="async">
    <div class="profile-preview__caption">
      <span><strong>GitHub</strong><span class="profile-preview__username">@hemanthnarayanaswamy</span></span>
      <span class="profile-preview__action">View profile <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></span>
    </div>
  </a>
</div>

<div class="row gy-4">
  {% for group in site.data.skills %}
    <div class="col-12">
      <section class="skill-card card shadow-sm h-100" aria-labelledby="skills-{{ group.title | slugify }}">
        <div class="card-body">
          <h2 id="skills-{{ group.title | slugify }}" class="text-uppercase text-muted fw-semibold mb-2 small" data-toc-skip>{{ group.title }}</h2>
          {% include skill-chips.html items=group.items %}
        </div>
      </section>
    </div>
  {% endfor %}
</div>
