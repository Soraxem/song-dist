---
layout: none
---
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, StaleWhileRevalidate } = workbox.strategies;
const { CacheableResponse } = workbox.cacheableResponse;

workbox.core.setCacheNameDetails({
  prefix: 'tc.soraxem.ch',
  suffix: '{{ site.time | date: "%Y%m%d%H%M" }}'
});

registerRoute(
  '/',
  new NetworkFirst()
);

registerRoute(
  {% for link in site.html_pages -%}
  '{{ link.url }}',
  {% endfor %}
  new StaleWhileRevalidate()
);


//workbox.precaching.precacheAndRoute([
//  {% for link in site.html_pages -%}
//  { url: '{{ link.url }}', revision: '{{ site.time | date: "%Y%m%d%H%M"}}' },
//  {% endfor %}
//])

registerRoute(
  ({request}) => request.destination === 'image' ,
  new CacheFirst({
    plugins: [
      new CacheableResponse({statuses: [0, 200]})
    ],
  })
);
