/* 

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

const player1 = parseInt(prompt('scegli un numero:'));
const pc = Math.floor(Math.random() * 6);

document.getElementById('player').innerHTML = player1;
document.getElementById('computer').innerHTML = pc;

if (player1 > pc){
    document.getElementById('maggiore').innerHTML = ' Hai vinto';

}
else if(player1 < pc){ 
    document.getElementById('maggiore').innerHTML = ' Hai perso';
}
else {
    document.getElementById('maggiore').innerHTML = ' Nessuno, sono uguali';

}