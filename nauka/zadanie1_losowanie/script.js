const wynik = document.getElementById("wynik");
const min = 1;
const max = 10;

const randomowa = Math.floor(Math.random() * (max - min + 1)) + min;
wynik.textContent = `Wylosowano: ${randomowa}`;