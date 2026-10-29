const wynik = document.getElementById("wynik");
const r = parseInt(prompt("Podaj promien koła:"));
const pole = Math.PI * (r ** 2);
const pole_zaokraglone = Math.round(pole * 100) / 100;


wynik.textContent = `Dla promienia: ${r} \nPole koła: ${pole_zaokraglone}`;