---
title: Benachrichtigung
layout: home
---

## Schicke eine Benachrichtigung
Hey, hier chönd ihr d Benachrichtigung für de nöchsti TC sendä, damit d Lüüt informiert sich durch eh Benachrichtigung!
Zum eh Benachrichtigung chönä sendä, chönd ihr die underi sache so ihgeh wie im Bispiel une drah und denn eifach uuf sendä uns es giit eh Benachrichtigung uuf ali grät die es Aktiviert hend!
Biispiel
Titel: Wir bached Cookies
Datum: 16.12.2023
Zeit: 19:00
Ort: Mesmerhuus Löhninge, Kloster 4
<html>
    <body>
        <input type="text" placeholder="Titel" id="titelhtml">
        <input type="date" placeholder="Datum" id="datumhtml">
        <input type="time" placeholder="Uhrzeit" id="zeithtml">
        <input type="text" placeholder="Ort" id="orthtml">
        <input type="text" placeholder="Was braucht man" id="sachenhtml">
        <input type="submit" onclick="notificationout()">
        <script>
        const express = require('express');
        const app = express();

        // Erlaube Anfragen von allen Ursprüngen
        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            next();
        });
        

        function notificationout() {
            console.log("Wird ausgeführt")
            let titel = document.getElementById("titelhtml").value;
            let datum = document.getElementById("datumhtml").value;
            let uhrzeit = document.getElementById("zeithtml").value;
            let ort = document.getElementById("orthtml").value;
            let sachen = document.getElementById("sachenhtml").value;
            let texttext = "Hey de nöchschti TC stoht wieder ah und es wird cool, de TC findet am " + datum  " um " + uhrzeit + " statt, de Ort isch " + ort + ", ich hoffe ihr chömed, ah und bevor mir es vergässäd, ihr bruuchäd " + sachen

            console.log("datum: " + datum);
            console.log("zeit: " + uhrzeit);
            console.log("ort: " + ort);
            console.log("sachen: " + sachen);
            console.log("wird gesendet")
            console.log("Definierter Text: " + texttext)
            const Notify = new Notification(titel,{
                body: (texttext),
                icon: "./icon.png"
            });
            console.log("Wurde gesendet");
        }
    
        </script>
    </body>
</html>
