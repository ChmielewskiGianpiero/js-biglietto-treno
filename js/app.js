// # BIGLIETTO DEL TRENO

// - Chiedere all'utente quanti chilometri vuole percorrere
//     - dichiarare una variabile dove salvare la risposta
//     - tramite un prompt assegnare il nome della risposta alla variabile
let userKm = prompt ("Quanti chilometri vuoi percorrere?")
userKm = parseInt(userKm)
console.log (userKm)
// - Chiedere all'utente l'età
//     - dichiarare una variabile dove salvare l'età
//     - tramite un prompt assegnare l'età alla variabile
let userAge = prompt ("Quanti anni hai?")
userAge = parseInt(userAge)
console.log (userAge)
// - Calcolare il prezzo totale del viaggio definito sul totale dei chilometri (0,21 al km)
//     - calcolare il prezzo base
let basicPrice = userKm * 0.21
console.log (basicPrice)
//     - SE l'utente ha meno di 18 anni
//         - applicare uno sconto del 20%
//         - calcolare il prezzo scontato
if(userAge < 18){
    let discount = basicPrice * (20 / 100);
    basicPrice = basicPrice - discount
    console.log(discount, basicPrice);
} else if (userAge > 65){
//     - ALTRIMENTI SE l'utente ha piu di 65 di anni
//         - applicare uno sconto del 40%
//         - calcolare il prezzo scontato
    discount = basicPrice * (40 / 100)
    basicPrice = basicPrice - discount
    console.log (discount, basicPrice)
}

// - stampare il prezzo finale nella pagina
//      - recuperare dal DOM un elemento in base all'id:
//      - dichiarare una variabile e tramite getElementById assegnargli il valore
const finalPriceDomElement = document.getElementById('finalPrice')
console.log(finalPriceDomElement)
//   - modifcare l'innerHTML con il valore di finalPrice
finalPriceDomElement.innerHTML = basicPrice
//   - rendere l'output del prezzo con massimo 2 decimali


