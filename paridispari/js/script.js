/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Bonus: L’inserimento avviene tramite un campo input
*/

const output = document.querySelector('#message-output');


let isPariDispari = false;
let pari_dispari;

// L’utente sceglie pari o dispari
// finché la stringa pari_dispari non è valida chiedo il prompt
while(!isPariDispari){
  pari_dispari = prompt('pari o dispari?');
  if(pari_dispari !== 'pari' && pari_dispari !== 'dispari'){
    alert('Inserire pari o dispari, riprova!');
  }else{
    isPariDispari = true;
  }
}
console.log('Hai scelto: ', pari_dispari)


let isValidNumber = false;
let numberPlayer;

// finché il numero inserito non è vaòido chedo il prompt
while(!isValidNumber){
   numberPlayer = parseInt(prompt('un numero da 1 a 5'));
   if(isNaN(numberPlayer)){
    alert('Inserire un numero');
    }else{
      if(numberPlayer < 1 || numberPlayer > 5){
        alert('Inserire un numero comprso fra 1 e 5');
      }else{
        isValidNumber = true;
      }
    }
}
console.log('Hai scelto il numero: ', numberPlayer)


// numero random per pc
function pcRandomNumber(){
  return Math.floor(Math.random() * 5 + 1);
}

const numeroGenerato = pcRandomNumber();

console.log('Numero random pc: ', numeroGenerato);


// sommo i due valori
const sum = numeroGenerato + numberPlayer;
console.log('Somma', sum);


// pari o dispari 
function isPari(somma){

  if(somma % 2) return false;
  return true;

}


// Stabiliamo se la somma dei due numeri è pari o dispari 
if(isPari(sum)){
  console.log(`La somma è ${sum}, è pari`)
}else{
  console.log(`La somma è ${sum}, è dispari`)
}

// NON FUNZIONA!
// Dichiariamo chi ha vinto 
let risultato = 'pari';

if(risultato === pari_dispari){
  console.log('Hai vinto');
}else{
  console.log('Hai perso');
}


