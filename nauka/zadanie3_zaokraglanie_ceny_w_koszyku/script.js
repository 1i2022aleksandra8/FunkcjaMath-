const wynik = document.getElementById("wynik");
const cena = parseFloat(prompt("Podaj cene produktu:"));
const przecena = parseInt(prompt("Podaj przecene produktu, wpisz w %:"));
const cenap = cena * (1 - przecena / 100);
const zaokraglona = Math.round(cenap * 100) / 100;

wynik.textContent = `Cena bez rabatu to: ${cena}zł \nPrzecena: ${przecena}% \nCena po rabacie: ${zaokraglona}zł`;
