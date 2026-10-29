const wynik = document.getElementById("wynik");
const min = 0;
const max = 999999;
const randomowa = Math.floor(Math.random() * (max - min + 1)) + min;
const kod_p = String(randomowa).padStart(6, "0");

wynik.textContent = `Kod promocyjny: ${kod_p}`;