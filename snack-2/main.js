/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
*/


const teamsList = [
    {
        nome: 'Roma',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Lazio',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Milan',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Juve',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Inter',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Verona',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Torino',
        punti: 0,
        falliSubiti: 0
    },
];

/*
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const newTeamsList= [];

function rndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(teamsList);

for (var i = 0; i < teamsList.length; i++) {
    teamsList[i].nome;
    teamsList[i].punti = rndNumber(0, 50);
    teamsList[i].falliSubiti = rndNumber(0, 20);

    const team = {
        nome : teamsList[i].nome,
        falliSubiti : teamsList[i].falliSubiti
    }

    newTeamsList.push(team)

}

console.log(newTeamsList);
