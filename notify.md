---
layout: default
title: Schicke Benachrichtigung
---

## Schicke eine Benachrichtigung
<input type="text" placeholder="Titel des TC" id="titel"></input>
<input type="date" placeholder="Datum" id="datum"></input>
<input type="time" placeholder="Uhrzeit" id="zeit"></input>
<input type="text" placeholder="Ort" id="ort"></input>
<input type="text" placeholder="Was braucht man?" id="sachen"></input>
<input type="submit" onclick="send()">

<script>
    let titel = document.getElementById(titel);
    let datum = document.getElementById(datum);
    let uhrzeit = document.getElementById(zeit);
    let ort = document.getElementById(ort);
    let sachen = document.getElementById(sachen);
    let textbody = "Hey der nächste TC findet am" + datum + "um" + uhrzeit + "statt, der Ort ist" + ort + "und ihr müsst" + sachen + "mitbringen, wir freuen uns."

    function send()
    {
        new Notification(titel, {
            body: textbody,
            icon: "icon.png"
        })
    }
</script>
