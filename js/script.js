console.log('JS OK');



//Chiedere all'utente i chilometri da percorrere

const chilometri = prompt('Quanti chilometri devi percorrere ?', '10');

// Chidere all'utente la sua età

const eta = parseInt(prompt('Quanti anni hai ?', '66'));

console.log(chilometri, eta);


//Creo costante prezzo biglietto per chilometro
const perkm = 0.21 ;


//calcolo il prezzo del biglietto
const prezzobiglietto = chilometri * perkm ;

console.log(prezzobiglietto);

//Sconto del 20%

const sconto20 = (20 * prezzobiglietto) / 100 ;

console.log(sconto20);

//Sconto del 40%

const sconto40 = (40 * prezzobiglietto) / 100 ;

console.log(sconto40);


