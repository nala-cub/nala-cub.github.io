---
layout: team
permalink: /team/
title: team
description:
nav: true
---

<div class="team grid">
  {% for person in site.data.team %}
  <div class="grid-item">
    <div class="card">
      {% if person.image %}
      <img src="/assets/img/team/{{ person.image }}" alt="person thumbnail">
      {% endif %}
      <div class="card-body">
        <h2 class="card-title text-lowercase">{{ person.name }}</h2>
        <p class="card-text">{{ person.description }}</p>
        <div class="row ml-1 mr-1 p-0">
          {% if person.email %}
          <div class="social-icon">
            <div class="icon" data-toggle="tooltip" title="Email">
              <a href="mailto:{{ person.email }}" target="_blank"><i class="fas fa-envelope-open-text"></i></a>
            </div>
          </div>
          {% endif %}
          {% if person.github %}
          <div class="social-icon">
            <div class="icon" data-toggle="tooltip" title="Github Profile">
              <a href="https://github.com/{{ person.github }}" target="_blank"><i class="fab fa-github"></i></a>
            </div>
          </div>
          {% endif %}
          {% if person.linkedin %}
          <div class="social-icon">
            <div class="icon" data-toggle="tooltip" title="Linked in">
              <a href="https://linkedin.com/in/{{ person.linkedin }}" target="_blank"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
          {% endif %}
        </div>
      </div>
    </div>
  </div>
{% endfor %}

</div>
