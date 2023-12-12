---
title: Benachrichtigung
layout: home
---
<html>
    <body>
        <input type="text" placeholder="Datum" id="datumhtml">
        <input type="text" placeholder="Uhrzeit" id="zeithtml">
        <input type="text" placeholder="Ort" id="orthtml">
        <input type="text" placeholder="Was braucht man" id="sachenhtml">
        <input type="submit" onclick="notificationout()">
        <script>
        console.log("Skript Funktioniert vor let ...")
        let datum = document.getElementById(datumhtml).value;
        console.log("datum: " + datum);
        let uhrzeit = document.getElementById(zeithtml).value;
        console.log("zeit: " + uhrzeit);
        let ort = document.getElementById(orthtml).value;
        console.log("ort: " + ort);
        let sachen = document.getElementById(sachenhtml).value;
        console.log("sachen: " + sachen);
        let texttext = "Hey der nächste TC findet am " + datum + " um " + uhrzeit + " statt, der Ort ist " + ort + " und ihr müsst " + sachen + " mitbringen, wir freuen uns."
        console.log("definierter Text: " + texttext);
        function notificationout() {
        console.log("wird gesendet")
            const greeting = new Notification('Hi, How are you?',{
                body: (texttext),
                icon: '.icon.png'
            });
        console.log("Wurde gesendet");
        }
    
        </script>
    </body>
</html>
