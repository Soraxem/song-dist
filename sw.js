---
layout: none
---

function messageToClient(client, data) {
  return new Promise(function(resolve, reject) {
    const channel = new MessageChannel();

    channel.port1.onmessage = function(event){
      if (event.data.error) {
        reject(event.data.error);
      } else {
        resolve(event.data);
      }
    };

    client.postMessage(JSON.stringify(data), [channel.port2]);
  });
}

self.addEventListener('push', function (event) {
  if (event && event.data) {
    self.pushData = event.data.json();
    if (self.pushData) {
      event.waitUntil(self.registration.showNotification(self.pushData.title, {
        body: self.pushData.body,
        icon: self.pushData.data ? self.pushData.data.icon : null
      }).then(function() {
        clients.matchAll({type: 'window'}).then(function (clientList) {
          if (clientList.length > 0) {
            messageToClient(clientList[0], {
              message: texttext // suppose it is: "Hello World !"
            });
          }
        });
      }));
    }
  }
});

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
