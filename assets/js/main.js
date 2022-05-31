// DATES ================================================
console.log('%cDATES', "color: tomato");

//Lev1_1
console.log('%cLev1_1', "color: green");

let date = new Date("September 2, 2019 09:00:00");
let lev1_1 = document.getElementById('lev1_1');
console.log(date);
lev1_1.innerHTML = date + "<br>";

let date1 = new Date(0);
lev1_1.innerHTML += date1 + "<br>";

let date2 = new Date(31556908800);
lev1_1.innerHTML += date2 + "<br>";

let date3 = new Date(86400000);
lev1_1.innerHTML += date3 + "<br>";


//Lev1_2
console.log('%cLev1_2', "color: green");

let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

let date4 = new Date();
console.log(date4);

console.log(date4.getFullYear());
console.log(date4.getMonth() + " Monat");
console.log(date4.getDate() + " Tag");
console.log(date4.getHours() + " Stunden");
console.log(date4.getMinutes() + " Minuten");
console.log(wochenTag[date4.getDay()]);
console.log(monate[date4.getMonth()]);

let tag = document.getElementById("tag");
let stunden = document.getElementById("stunden");
let minuten = document.getElementById("minuten");
let sekunden = document.getElementById("sekunden");
let tageszeit = document.getElementById("tageszeit");

let tage = ["SO", "MO", "DI", "MI", "DO", "FR", "SA"];

tag.innerHTML = tage[date4.getDay()];
stunden.innerHTML = date4.getHours();
minuten.innerHTML = date4.getMinutes();
sekunden.innerHTML = date4.getSeconds();

function time() {
    date4.getHours();

    if (date4.getHours() >= 0 && date4.getHours() <= 12) {
        tageszeit.innerHTML = "AM"
    }

    if (date4.getHours() > 12 && date4.getHours() < 24) {
        tageszeit.innerHTML = "PM"
    }
}
time();

//Lev1_3
console.log('%cLev1_3', "color: green");

console.log(date4);

date4.setFullYear(2123);
date4.setMonth(1);
date4.setDate(date4.getDate() + 1);
console.log(date4);
date4.setMonth(date4.getMonth() + 1);
console.log(date4);
date4.setDate(date4.getDate() - 21);
console.log(date4);
date4 = new Date();
console.log(date4);

//Lev1_4
console.log('%cLev1_4', "color: green");

let daysInAMonth = (monat0, jahr0) => {

    let datum = new Date();
    datum.setFullYear(jahr0);
    datum.setMonth(monat0);

}

console.log("noch nicht fertig");

//Lev1_5
console.log('%cLev1_5', "color: green");

let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let nameOfTheMonth = (jahr1, monat1, tag1) => {
    let datum1 = new Date();
    datum1.setFullYear(jahr1);
    datum1.setMonth(monat1 - 1);
    // datum1.setDate(tag);
    console.log(list[datum1.getMonth()]);
}

nameOfTheMonth(2001, 3, 4);
nameOfTheMonth(2019, 12, 24);
nameOfTheMonth(1410, 07, 15);

//Lev1_6
console.log('%cLev1_6', "color: green");

function time(jahr2, monat2, tag2, stunde2) {

    let datum2 = new Date();
    datum2.setFullYear(jahr2);
    datum2.setMonth(monat2);
    datum2.setDate(tag2);
    datum2.setHours(stunde2);
    datum2.getHours();

    if (datum2.getHours() >= 0 && datum2.getHours() <= 12) {
        console.log("AM");
    }

    if (datum2.getHours() > 12 && datum2.getHours() < 24) {
        console.log("PM");
    }
}
time(1999, 10, 5, 15);
time();
time(2019, 12, 3, 12);
time(2000, 1, 1, 11);

//Lev1_7
console.log('%cLev1_7', "color: green");

function istEsEinWochenende(monat3, tag3, jahr3) {
    let datum3 = new Date();
    datum3.setFullYear(jahr3);
    datum3.setMonth(monat3);
    datum3.setDate(tag3);
    datum3.getDay();

    if (datum3.getDay() == 0 || datum3.getDay() == 6) {
        console.log("Es ist ein Tag am Wochende.");
    }

    if (datum3.getDay() !== 0 && datum3.getDay() !== 6) {
        console.log("Es ist ein normaler Wochentag.");
    }
}

istEsEinWochenende(12, 15, 2019);
istEsEinWochenende(2, 16, 2001);
istEsEinWochenende(2, 1, 2020);
istEsEinWochenende(2, 29, 2020);

// MATH ================================================
console.log('%cMATH', "color: tomato");

//Lev1_1
console.log('%cLev1_1', "color: green");

console.log(Math.PI);
const pi = Math.PI;
let roundedPi = pi.toFixed(2);
console.log(roundedPi);

//Lev1_2
console.log('%cLev1_2', "color: green");

let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];

function rounded() {
    for (let i = 0; i < array.length; i++) {
        console.log(Math.round(array[i]));
    }
}

rounded();

//Lev1_3
console.log('%cLev1_3', "color: green");

let randomNum = Math.random();
console.log(randomNum);

let randomNum1_10 = Math.random() * 10;
console.log(randomNum1_10);

let randomNum1_100 = Math.random() * 100;
console.log(randomNum1_100);

//Lev1_4
console.log('%cLev1_4', "color: green");

let niedrigsterWert = Math.min(393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488);
console.log(niedrigsterWert);

let höchsterWert = Math.max(393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488);
console.log(höchsterWert);



