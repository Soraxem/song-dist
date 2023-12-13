---
title: Benachrichtigung
layout: home
---

## Reminder
Hey, hier chönd ihr d Benachrichtigung für de nöchsti TC sendä, damit d Lüüt informiert sich durch eh Benachrichtigung!
Zum eh Benachrichtigung chönä sendä, chönd ihr die underi sache so ihgeh wie im Bispiel une drah und denn eifach uuf sendä uns es giit eh Benachrichtigung uuf ali grät die es Aktiviert hend!
Biispiel
<br>Datum:</br> <p>16.12.2023</p>
<br>Zeit:</br> <p>19:00</p>
<br>Ort:</br> <p>Mesmerhuus Löhninge, Kloster 4</p>
<html>
    <body>
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
            let datum = document.getElementById("datumhtml").value;
            let uhrzeit = document.getElementById("zeithtml").value;
            let ort = document.getElementById("orthtml").value;
            let sachen = document.getElementById("sachenhtml").value;
            let texttext = "Hey nomol en Reminder das am " + datum + " um " + uhrzeit + " de nöchschti TC statt findät, de Ort isch " + ort + " und nid vergässä das ihr " + sachen + " mitnäh münd" 

            console.log("datum: " + datum);
            console.log("zeit: " + uhrzeit);
            console.log("ort: " + ort);
            console.log("sachen: " + sachen);
            console.log("wird gesendet")
            console.log("Definierter Text: " + texttext)
            const Notify = new Notification("nöchschti TC stoht ah!",{
                body: (texttext),
                icon: "./icon.png"
            });
            console.log("Wurde gesendet");
        }
    
        </script>
    </body>
</html>
