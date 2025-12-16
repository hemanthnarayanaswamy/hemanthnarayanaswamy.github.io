---
title: Skills
icon: fas fa-code
order: 2
---

<div class="row gy-4">
  <div class="col-12">
    <div class="skill-card card shadow-sm h-100">
      <div class="card-body">
        <p class="text-uppercase text-muted fw-semibold mb-2 small">Challenge Platforms & Achievements</p>
        <div class="achievement-links">
          <a href="https://leetcode.com/hemanthnarayanaswamy" class="achievement-link" target="_blank" rel="noopener">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg" alt="LeetCode" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-12">
    <div class="skill-card card shadow-sm h-100">
      <div class="card-body">
        <p class="text-uppercase text-muted fw-semibold mb-2 small">Cloud Platforms</p>
        {% assign cloud_skills = "Google Cloud|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg,AWS|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" %}
        {% include skill-chips.html items=cloud_skills %}
      </div>
    </div>
  </div>

  <div class="col-12">
    <div class="skill-card card shadow-sm h-100">
      <div class="card-body">
        <p class="text-uppercase text-muted fw-semibold mb-2 small">Programming Languages</p>
        {% assign lang_skills = "Python|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg,Bash|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg,Go|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" %}
        {% include skill-chips.html items=lang_skills %}
      </div>
    </div>
  </div>

  <div class="col-12">
    <div class="skill-card card shadow-sm h-100">
      <div class="card-body">
        <p class="text-uppercase text-muted fw-semibold mb-2 small">Ops Tools</p>
        {% assign ops_skills = "Terraform|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg,Ansible|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg,Github Actions|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg,Jenkins|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg,ArgoCD|https://raw.githubusercontent.com/cncf/artwork/master/projects/argo/stacked/color/argo-stacked-color.svg,Helm|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-plain.svg" %}
        {% include skill-chips.html items=ops_skills %}
      </div>
    </div>
  </div>

  <div class="col-12">
    <div class="skill-card card shadow-sm h-100">
      <div class="card-body">
        <p class="text-uppercase text-muted fw-semibold mb-2 small">Containers & Orchestration</p>
        {% assign container_skills = "Docker|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg,Kubernetes|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg,Helm|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-plain.svg,OpenShift|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openshift/openshift-original.svg" %}
        {% include skill-chips.html items=container_skills %}
      </div>
    </div>
  </div>

  <div class="col-12">
    <div class="skill-card card shadow-sm h-100">
      <div class="card-body">
        <p class="text-uppercase text-muted fw-semibold mb-2 small">Databases & Storage</p>
        {% assign db_skills = "PostgreSQL|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg,MySQL|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg,MongoDB|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg,Redis|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" %}
        {% include skill-chips.html items=db_skills %}
      </div>
    </div>
  </div>

  <div class="col-12">
    <div class="skill-card card shadow-sm h-100">
      <div class="card-body">
        <p class="text-uppercase text-muted fw-semibold mb-2 small">Source Control</p>
        {% assign scm_skills = "Git|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg,GitHub|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg,GitLab|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg,Bitbucket|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" %}
        {% include skill-chips.html items=scm_skills %}
      </div>
    </div>
  </div>

  <div class="col-12">
    <div class="skill-card card shadow-sm h-100">
      <div class="card-body">
        <p class="text-uppercase text-muted fw-semibold mb-2 small">Automation & Quality</p>
        {% assign qa_skills = "Cypress|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-plain.svg,Selenium|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg,Jest|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg,SonarQube|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" %}
        {% include skill-chips.html items=qa_skills %}
      </div>
    </div>
  </div>

  <div class="col-12">
    <div class="skill-card card shadow-sm h-100">
      <div class="card-body">
        <p class="text-uppercase text-muted fw-semibold mb-2 small">Monitoring & Logging</p>
        {% assign monitoring_skills = "Prometheus|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg,Grafana|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg,Elastic|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg,Datadog|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/datadog/datadog-original.svg" %}
        {% include skill-chips.html items=monitoring_skills %}
      </div>
    </div>
  </div>

  <div class="col-12">
    <div class="skill-card card shadow-sm h-100">
      <div class="card-body">
        <p class="text-uppercase text-muted fw-semibold mb-2 small">Operating Systems</p>
        {% assign os_skills = "Linux|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg,macOS|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg,Windows|https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" %}
        {% include skill-chips.html items=os_skills %}
      </div>
    </div>
  </div>

</div>
