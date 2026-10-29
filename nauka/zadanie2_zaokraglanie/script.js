const wynik = document.getElementById("wynik");
const liczba = 3.14159;
const rounded = Math.round(liczba * 100) / 100;

wynik.textContent = `Liczba: ${liczba} \nZaokraglona: ${rounded}`;
