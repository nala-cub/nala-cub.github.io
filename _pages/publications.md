---
layout: page
permalink: /publications/
title: publications
description: Selected publications of NALA members (since 2020).
years: [2020, 2019]
nav: true
---

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
