/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input
*/


document.getElementById('verifica').addEventListener('click', function(){
  
  const parola = document.getElementById('parola').value;
  initVerifica(parola);

});


/**
 * Funzione di inizializzazione
 * @param {string} str 
 */
function initVerifica(str){
  
  const parolaGirata = giraParola(str)
 
  let output;
  if(str.toLowerCase() === parolaGirata.toLowerCase()){
    output = `La parola "${str}" è palindroma`;
  }else{
    output = `La parola "${str}" non è palindroma`;
  }
  document.getElementById('output-palindroma').innerHTML = output;
}


/**
 * Rigiro la stringa passata
 * @param {string} str 
 * @returns 
 */
function giraParola(str){
  let reverseString = '';

  reverseString = str.split('').reverse().join('') 

  return reverseString;
}

