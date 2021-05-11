/*
Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome e
peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal 
*/

const bike = [
    {
        nome: 'SuperSix',
        peso: 7
    },
    {
        nome: 'Advanced',
        peso: 6
    },
    {
        nome: 'Tarmac',
        peso: 6
    },
    {
        nome: 'Dogma',
        peso: 2
    },
    {
        nome: 'SystemSix',
        peso: 5
    },
    {
        nome: 'Treck',
        peso: 9
    },
];

const [,,,,newBike,] = bike;

console.log(newBike.nome, newBike.peso);


document.getElementById("container").insertAdjacentHTML("beforeend",
`
<h1>Bici più leggera</h1>
<h2>Nome Bici: ${newBike.nome}</h2>
<h2>Peso: ${newBike.peso}</h2>
`
);