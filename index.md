---
layout: default
title: Home
---
# Hello World!

This is my personal website, here a huge part of my knowledge base is published. As well as some highlights.

{% assign paths = site.html_pages -%}
<p>first</p>
{% include navigation.html paths=paths level="" %}
<p>second</p>
{% include navigation.html paths=paths level="projects/" %}
