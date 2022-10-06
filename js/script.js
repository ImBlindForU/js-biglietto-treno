// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// dati
// quanti km devi percorrere
const travelKm = parseInt(prompt("Quanti km devi percorrere?"));
console.log(travelKm,typeof travelKm)


// qual e la tua eta
const eta = parseInt(prompt("Qual e la tua eta?"));
console.log(eta,typeof eta)


// elaboirazione
// calcolo del prezzo del biglietto 0.21$
const priceBase = (((travelKm) * 0.21));
console.log(priceBase);

// se minorenni calcolare un 20% di sconto
// se over65 calcolare un 40% di sconto
if (eta < 18){
    dovraiPagare = ((priceBase) * 0.8)
} else if (eta > 64){
    dovraiPagare = ((priceBase) * 0.6)
} else {
    dovraiPagare = (priceBase)
}

console.log(dovraiPagare)
// con solo 2 decimali
const risultDecimale = (dovraiPagare).toFixed(2)

console.log(risultDecimale)
const message = "Dovrai pagare"

// output
document.getElementById ("result").innerHTML = message + risultDecimale




