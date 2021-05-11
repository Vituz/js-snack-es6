/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
*/


const squadre = [
    {
        nome : 'Roma',
        punti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Lazio',
        punti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Milan',
        punti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Juve',
        punti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Inter',
        punti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Verona',
        punti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Torino',
        punti : 0,
        falliSubiti : 0
    },
];

/*
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const newSquadre = [];

function rndNumber(min, max){
    return Math.floor(Math.random() * (max - min +1)) +min;
}

for(var i = 0; i < squadre.length; i++){
    squadre[i].punti = rndNumber(0, 20);
    squadre[i].falliSubiti = rndNumber(0, 12);

    newSquadre.push(squadre[i].nome, squadre[i].falliSubiti);
}


console.log(squadre);
console.log(newSquadre);

