---
layout: team
permalink: /projects/
title: projects
description:
nav: true
---
{% for project in site.data.projects %}
  <div class="card">
  <section class="section">
    {% if project.image %}
    <img src="/assets/img/team/{{ project.image }}" alt="person thumbnail" class="projectimage"/>
    {% endif %}
    <div class="content">
    
    <p class="paragraph">
    <div class="card-body">
      <h2 class="card-title">{{ project.name }}</h2>
      <p class="card-text">{{ project.description }}</p>
      <p class="card-text">Read more <a href="/projects/{{ project.link }}">here</a>.</p>
    </div>
    </p>
    </div>
  </section>
  </div>
  <br>
{% endfor %}
