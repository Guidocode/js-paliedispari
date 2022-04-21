/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Bonus: L’inserimento avviene tramite un campo input
*/


document.getElementById('gioca').addEventListener('click', initPariDispari);


function initPariDispari(){
  const userChoice = document.getElementById('choice').value;
  const userNumber = parseInt(document.getElementById('numero').value);
  const pcNumber = getRandomNumber(1, 5);
  const sum = userNumber + pcNumber;
  console.log(userChoice);
  console.log(userNumber);
  console.log(pcNumber);
  console.log(sum);
  console.log(pariDispari(sum));
  let outputMsg;
  if(userChoice === pariDispari(sum)){
    output = `
      <h2>Hai vinto</h2>
      <p>Hai scelto <strong>${userChoice}</strong> e giocato <strong>${userNumber}</strong></p>
      <p>Il PC ha giocato: <strong>${pcNumber}</strong></p>
    `;
  }else{
    output = `
      <h2>Hai perso</h2>
      <p>Hai giocato <strong>${userNumber}</strong> e scelto <strong>${userChoice}</strong> </p>
      <p>Il PC ha giocato: <strong>${pcNumber}</strong></p>
   `;
  }
  document.getElementById('output-paridispari').innerHTML = output;
}

/**
 * Generatore di numeri random
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Filtro pari/dispari
 * @param {number} n 
 * @returns 
 */
function pariDispari (n){
  if(n % 2) {
    return 'dispari';
  }
  return 'pari';
}

