---
layout: default
title: Home
---

# TC Chläggi

Hallo, ja mir hend ezt es eigets Äpp und sogar fascht alles handprogrammiert. Für Feedback und Verbesserigsvorschläg am beste uf mich direkt zuegah.

## Singbüechli

Es TC App dient als Singbüechli für de TC Klettgau. In de suechliste chan es lied igeh werde, und denn findets de Text. Wenn Du im Internet bisch, chasch sogar de spotify, oder Youtube link ahklicke. Genauso chasch denn uf d Akkörd vo de Lieder zuegriife. Wenn Du uh gern es Lied wünsche möchtisch, chasch Du das mit dem Formular mache.

<a href="https://hafen.swisscloudhosting.ch/apps/forms/s/8JPtHedtboKwjwMcMr7F2xqP" class="btn btn-secondary" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-music-fill" viewBox="0 0 16 16">
        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 6.64v1.75l-2 .5v3.61c0 .495-.301.883-.662 1.123C7.974 13.866 7.499 14 7 14c-.5 0-.974-.134-1.338-.377-.36-.24-.662-.628-.662-1.123s.301-.883.662-1.123C6.026 11.134 6.501 11 7 11c.356 0 .7.068 1 .196V6.89a1 1 0 0 1 .757-.97l1-.25A1 1 0 0 1 11 6.64z"></path>
    </svg>
    Lied wünschen
</a>

## Benachrichtigungen
Neu hend mir au eh benachrichtigung wenn de nöchschti TC isch, wenn du das möchtisch klick une druf und klick uf akzeptiere. Achtung funktioniert numä be Chrome, unter Firefox und Safari muesch du es selber aktivierä

<p onclick="asknotify()" class="btn btn-secondary" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
    </svg>
    Benachrichtigungen aktivieren
</p>

<a href="./install.md" class="btn btn-secondary" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></path>
    </svg>
    Installiere die TC App
</a>

<script>
    function asknotify()
    {
        Notification.requestPermission(function() {});
    }