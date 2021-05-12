/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/


// const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberList = ['Marco', 'Micaela', 'Vito', 'Dario', 'Marta', 'Teresa', 'Gabriele', 'Emma', 'Stefano', 'Roberto'];

const min = 3;
const max = 8;


const middle = (list, numMin, numMax) => {

    const newNumberList = [];

    if (numMin < numMax && numMax <= list.length) {

        list.forEach((number, i, lista) => {

            if(i >= numMin && i <= numMax){
                newNumberList.push(number);
            }

        });

    } else {

        alert(`I numeri ${numMin} e ${numMax} non sono validi`);
    }

    return newNumberList;

};

console.log(`Array list di partenza: ${numberList}`);

document.getElementById("lista_di_partenza").innerHTML = numberList;

console.log(`Array list finale: ${middle(numberList, min, max)}`);

document.getElementById("lista_finale").innerHTML = middle(numberList, min, max);