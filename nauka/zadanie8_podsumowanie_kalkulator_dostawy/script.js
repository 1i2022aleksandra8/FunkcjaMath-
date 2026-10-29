const wynik = document.getElementById("wynik");
const waga = parseFloat(prompt("Podaj wagę paczuszki:"));
const waga_zao = Math.ceil(waga);
const nadwyzka = Math.max(0, waga_zao - 1);
const cena = 12 + (nadwyzka * 3);
const cena_zao = Math.round(cena * 100) / 100;
const cena_00 = cena.toFixed(2);

wynik.textContent = `Dla wagi: ${waga} \nKoszt dostawy: ${cena_00}zł`;
