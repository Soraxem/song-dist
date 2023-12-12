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

        function notificationout() {
            console.log("Wird ausgeführt")
            debugger;
            let datum = document.getElementById("datumhtml").value;
            let uhrzeit = document.getElementById("zeithtml").value;
            let ort = document.getElementById("orthtml").value;
            let sachen = document.getElementById("sachenhtml").value;
            let texttext = "Hey der nächste TC findet am " + datum + " um " + uhrzeit + " statt, der Ort ist " + ort + " und ihr müsst " + sachen + " mitbringen, wir freuen uns."

            debugger;
            console.log("datum: " + datum);
            console.log("zeit: " + uhrzeit);
            console.log("ort: " + ort);
            console.log("sachen: " + sachen);
            console.log("wird gesendet")
            console.log("Definierter Text: " + texttext)
            debugger;
            const Notify = new Notification('Der nächste TC',{
                body: (texttext),
                icon: 'icon.png'
            });
            debugger;
            console.log("Wurde gesendet");
        }
    
        </script>
    </body>
</html>
