/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let number1 = 5;
let number2 = 5;

if (number1 > number2) {
  console.log(number1 + " è maggiore di " + number2) 
} else if (number1 === number2) {
  console.log("I due numeri sono uguali")
} else {
  console.log(number2 + " è maggiore di " + number1)
}
*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let number1 = 5

if (number1 !== 5) {
  console.log("not equal")
} else {
  console.log("equal")
} 
*/



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let dividendo = 1;
let divisore = 5;

if (dividendo % divisore === 0) {
  console.log(dividendo + " è divisibile per 5")
} else {
  console.log(dividendo + " non è divisibile per 5")
}
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let number1 = 10;
let number2 = 144;

if (number1 === 8 && number2 === 8) {
  console.log("Il valore di entrambi i numeri è 8")
} else if ((number1 === 8 || number2 === 8) && (number1 === 0 || number2 === 0)) {
  console.log("Il valore di uno solo dei due numeri è 8 e la loro somma e sottrazione è 8")
} else if (number1 === 8 || number2 === 8) {
  console.log("Il valore di uno solo dei due numeri è 8")
} else if (number1 + number2 === 8) {
  console.log("La somma dei due numeri è 8")
} else if (number1 - number2 === 8 || number2 - number1 === 8) {
  console.log("La sottrazione tra i due numeri è 8")
} else {
  console.log("Nessuno dei due numeri è 8 e la loro addizione e sottrazione non è uguale a 8")
}
*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/


/* SCRIVI QUI LA TUA RISPOSTA 
let totalShoppingCart = 1

if (totalShoppingCart <= 50) {
  console.log("Il costo complessivo degli articoli nel carrello è di: " + totalShoppingCart + " euro , al quale c'è da aggiungere, non avendo superato i 50 euro, la spedizione (pari a 10 euro) per un totale di " + (totalShoppingCart + 10) + " euro" )
} else {
  console.log("Il costo completo del carrello, avendo superato i 50 euro di spesa, che garantiscono la spedizione gratuita, ammonta a " + totalShoppingCart)
}
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e calcolando il totale.
*/


/* SCRIVI QUI LA TUA RISPOSTA 
let totalShoppingCart = 75
let sconto = 0.8
let prezzoScontato = totalShoppingCart * sconto

if (prezzoScontato <= 50) {
  console.log("Il costo complessivo degli articoli nel carrello è di: " + prezzoScontato + " euro , al quale c'è da aggiungere, non avendo superato i 50 euro, la spedizione (pari a 10 euro) per un totale di " + (prezzoScontato + 10) + " euro" )
} else {
  console.log("Il costo completo del carrello, avendo superato i 50 euro di spesa, che garantiscono la spedizione gratuita, ammonta a " + prezzoScontato)
}
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

 /*SCRIVI QUI LA TUA RISPOSTA */
let number1 = 20000
let number2 = 43241
let number3 = 334

if (number1 === number2 && number2 > number3) {
  console.log(number1, number2, number3)
} else if (number1 === number2 && number2 < number3) {
  console.log(number3, number2, number1)
} else if (number1 === number3 && number3 > number2) {
  console.log(number3, number1, number2)
} else if (number1 === number3 && number3 < number2) {
  console.log(number2, number3, number1)
} else if (number2 === number3 && number3 > number1) {
  console.log(number2, number3, number1)
} else if (number2 === number3 && number3 < number1) {
  console.log(number1, number2, number3)
} else if (number1 > number3 && number1 > number2 && number2 > number3) {
  console.log(number1, number2, number3)
} else if (number1 > number3 && number1 > number2 && number2 < number3) {
  console.log(number1, number3, number2)
} else if (number2 > number3 && number2 > number1 && number1 > number3) {
  console.log(number2, number1, number3)
} else if (number2 > number3 && number2 > number1 && number1 < number3) {
  console.log(number2, number3, number1)
} else if (number3 > number1 && number3 > number2 && number2 > number1) {
  console.log(number3, number, number1)
} else if (number3 > number1 && number3 > number2 && number2 < number1) {
  console.log(number3, number1, number2)
} else {
  console.log(number1, number2, number3 + " hanno tutti e tre lo stesso valore")
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA  
let numero1 = 3
console.log(typeof numero1)
if(typeof numero1 === "number") {
  console.log("Il valore inserito è un numero")
} else {
  console.log("Il valore inserito non è un numero")
}
*/


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let numero = 3
if (numero % 2 === 0) {
  console.log("Il numero " + numero + " è pari")
} else {
  console.log("Il numero " + numero + " è dispari")
}
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA 
me.city = "Toronto";
console.log(me)
*/

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA 
delete me.lastName
console.log(me)
*/

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA 
me.skills.pop
console.log(me)
*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const array1 = []
array1.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(array1)
*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
array1[9] = 100
*/
