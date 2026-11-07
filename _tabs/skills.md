---
title: Skills
icon: fas fa-code
media_local: true
refactor: false
portfolio: true
description: "A toolkit for building platforms, automating operations, and understanding production systems. Explore my coding profiles and the technologies I work with."
---

<section class="portfolio-section" aria-labelledby="coding-profiles" data-reveal>
  {% include portfolio-heading.html index='01' id='coding-profiles' title='Coding Profiles' description='Explore my code and problem-solving practice.' %}
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


</section>
<section class="portfolio-section" aria-labelledby="toolbox">
  {% include portfolio-heading.html index='02' id='toolbox' title='My Toolbox' description='Tools I use across platforms, development, automation, and operations.' %}
  <div class="portfolio-search" data-skill-search hidden>
    <label for="skill-search"><i class="fas fa-search" aria-hidden="true"></i><span>Find a skill</span></label>
    <input id="skill-search" type="search" placeholder="Try Kubernetes, Python, or cloud…" autocomplete="off" aria-controls="skill-groups" aria-describedby="skill-results">
    <p id="skill-results" class="portfolio-results" data-skill-status aria-live="polite"></p>
  </div>
  <div class="portfolio-skill-grid" id="skill-groups">
    {% for group in site.data.skills %}
      <section class="skill-card" data-skill-group="{{ group.title | escape }}" aria-labelledby="skills-{{ group.title | slugify }}" data-reveal>
        <div class="skill-card__heading"><span class="portfolio-index" aria-hidden="true">0{{ forloop.index }}</span><h3 id="skills-{{ group.title | slugify }}">{{ group.title }}</h3><span class="portfolio-count">{{ group.items.size }}</span></div>
        {% include skill-chips.html items=group.items %}
      </section>
    {% endfor %}
  </div>
  <p class="portfolio-empty" data-skill-empty hidden>No skills match that search. Try a tool name or category such as “Cloud”.</p>
</section>
