/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input
*/

const output = document.querySelector('#message-output');

const parola = prompt('Inserisci una parola');

if(isPali(parola)){
  output.innerHTML = `La parola ${parola} è palindroma`;
}else{
  output.innerHTML = `La parola ${parola} non è palindroma`;
}



// Funzione
function isPali(word){

  let lowWord = word.toLowerCase();
  console.log(lowWord);

  let reverseWord = lowWord.split('').reverse().join(''); 

  if(reverseWord !== lowWord){
    return false;
  }

  return true;
}



