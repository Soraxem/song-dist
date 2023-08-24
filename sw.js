---
layout: none
---
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.setConfig({
  debug: true,
});

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, StaleWhileRevalidate } = workbox.strategies;
const { CacheableResponse } = workbox.cacheableResponse;

workbox.core.setCacheNameDetails({
  prefix: 'tc.soraxem.ch',
  suffix: '{{ site.time | date: "%Y%m%d%H%M" }}'
});

registerRoute(
  new RegExp('.'),
  new NetworkFirst()
);

workbox.precaching.precacheAndRoute([
  {% for link in site.html_pages -%}
  { url: '{{ link.url }}', revision: '{{ site.time | date: "%Y%m%d%H%M%S"}}' },
  {% endfor %}

  {% for file in site.static_files | where: "extname", ".pdf" -%}
  { url: '{{ file.path }}', revision: '{{ file.modified_time | date: "%Y%m%d%H%M%S"}}' },
  {% endfor %}
]);

registerRoute(
  ({request}) => request.destination === 'image' ,
  new CacheFirst({
    plugins: [
      new CacheableResponse({statuses: [0, 200]})
    ],
  })
);
