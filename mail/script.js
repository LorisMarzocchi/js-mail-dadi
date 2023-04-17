/*
Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

*/
let myArray = ['ciao@gmail.com', 'sadfsd@gmail.com', 'aaa@gmail.com'];
const myMail = prompt('inserisci la mail: ');
console.log(myArray);
if (myMail === (myArray[0]) || myMail === (myArray[1]) || myMail === (myArray[2])){
    document.getElementById('mail_select').innerHTML = myMail;
}
else{
    document.getElementById('mail_select').innerHTML = 'la mail non esiste';
}