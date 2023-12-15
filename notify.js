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