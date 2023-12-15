const check = () => {
    if (!('serviceWorker' in navigator)) {
      throw new Error('Kein Service Worker unterstützt!')
    }
    if (!('PushManager' in window)) {
      throw new Error('Keine PUSH API unterstützt!')
    }
  }
  const main = () => {
    check()
  main()
  }


function asknotify() {
    Notification.requestPermission();
}