/*
Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

*/
let myArray = ['ciao@gmail.com', 'sadfsd@gmail.com', 'aaa@gmail.com'];
let myMail = prompt('inserisci la mail: ');

let flag = false;
for (let i = 0; i < myArray.length; i++){
  if (myArray[i] == myMail){
    flag = true;
    document.getElementById('mail_select').innerHTML = 'la mail esiste';
    }
    else if (flag == false){
     document.getElementById('mail_select').innerHTML = 'la mail non esiste';
    }

}
