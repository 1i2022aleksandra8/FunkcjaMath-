const wynik = document.getElementById("wynik");
const liczba = parseFloat(prompt("Podaj liczbe:"));
const min = 0;
const max = 100;
const clamp_l = Math.min(max, Math.max(min, liczba));


wynik.textContent = `Liczba: ${liczba} \nWynik po clamp: ${clamp_l}`;