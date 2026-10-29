const wynik = document.getElementById("wynik");
const x1 = parseInt(prompt("Podaj x1:"));
const y1 = parseInt(prompt("Podaj y1:"));
const x2 = parseInt(prompt("Podaj x2:"));
const y2 = parseInt(prompt("Podaj y2:"));
const dx = x2 - x1;
const dy = y2 - y1;

const odleglosc = Math.hypot(dx, dy);
const odleglosc_zao = Math.round(odleglosc * 100) / 100;

wynik.textContent = `Punkt pierwszy: (${x1},  ${y1}) \nPunkt drugi: (${x2}, ${y2}) \nOdleglosc: ${odleglosc_zao}`;
