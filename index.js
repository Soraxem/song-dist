if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js').then(function() {
    return navigator.serviceWorker.ready;
  })
  .then(function(registration) {
    console.log(registration); // service worker is ready and working...
  });
  
  navigator.serviceWorker.addEventListener('message', function(event) {
    console.log(event.data.message); // Hello World !
  });
}

function asknotify() {
    Notification.requestPermission();
}