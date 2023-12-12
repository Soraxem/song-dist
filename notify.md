---
layout: default
title: Schicke Benachrichtigung
---

## Schicke eine Benachrichtigung
<input type="text" placeholder="It's beginning to look a lot like Christmas 🍪🧦" id="titel">Titel</input>
<input type="date" placeholder="08.12.2023" id="datum">Datum</input>
<input type="time" placeholder="19:00" id="zeit">Uhrzeit</input>
<input type="text" placeholder="Mesmerhaus Löhningen, Kloster 14" id="ort">Ort</input>
<input type="text" placeholder="Deine Lieblingskuschensocke" id="sachen">Was man braucht</input>
<input type="submit" onclick="send()">Schicken</input>

<script>
    let titel = document.getElementById(titel);
    let datum = document.getElementById(datum);
    let uhrzeit = document.getElementById(zeit);
    let ort = document.getElementById(ort);
    let sachen = document.getElementById(sachen);
    let textbody = "Hey der nächste TC findet am" + datum + "um" + uhrzeit + "statt, der Ort ist" + ort + "und ihr müsst" + sachen + "mitbringen, wir freuen uns."

    function send()
    {
        new Notification(document.getElementById("title").value, {
            body: textbody
            icon: "icon.png"
        })
    }
</script>
