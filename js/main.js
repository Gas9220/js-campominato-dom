'use strict';

// ---------- UTILS FUNCTIONS ----------

// Funzione che permette di generare un numero casuale
function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funzione che permette di generare un numero intero massimo in base alla difficoltà
function maxInt(level) {
    // Assegno un valore massimo di default di 100
    let maxInt = 100;

    // Faccio uno switch sul livello inserito
    switch (level) {
        case "medium":
            maxInt = 81; // Se il livello è medio, cambio il valore a 81
            break;
        case "hard":
            maxInt = 49; // Se il livello è difficile, cambio il valore a 49
            break;
        default:
            break; // Se il livello è facile il valore resta inalterato a 100
    }

    // Ritorno il valore massimo
    return maxInt;
}

// Funzione che permette di riempire un array con un tot di numeri casuali
function fillArrayOfNumbers(level, totNumbers) {
    // Creo una costante che contiene il numero più alto che è possibile nell'array
    const maxInt = maxInt(level);

    // Creo un array che conterra i numeri casuali
    let numbers = [];

    // Eseguo queste operazioni....
    do {
        // Creo un numero casuale da 1 al massimo intero
        const randomNumber = randomInt(1, maxInt);
        // Se l'array non contiene già il numero, lo aggiungo
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    } while (numbers.length < totNumbers); // ...finchè la lunghezza dell'array non raggiunge il valore desiderato

    // Ritorno l'array di numeri
    return numbers;
}

// ------------------------------------

// ---------- CORE FUNCTIONS ----------
// Funzione che permette di creare i box
function createBox(boxTextContent, level) {
    // Creo un div
    const boxElement = document.createElement('div');
    // Gli assegno la classe box
    boxElement.classList.add('box');

    // Aggiungo la classe corrispondente al livello per formare la griglia con le righe e colonne giuste
    switch (level) {
        case "easy": 
            boxElement.classList.add('easy-box');
            break;
        case "medium":
            boxElement.classList.add('medium-box');
            break;
        case "hard":
            boxElement.classList.add('hard-box');
            break;
        default:
            break;
    }

    // Creo uno span
    const boxSpanElement = document.createElement('span');
    // Inserisco dentro lo span l'argomento passato alla funzione
    boxSpanElement.innerHTML = boxTextContent;

    // Aggingo lo span al div
    boxElement.append(boxSpanElement);

    // Aggiungo l'evento al click sul box
    boxElement.addEventListener('click', function () {
        boxElement.classList.add('box-clicked');
        alert(boxTextContent);
    })

    // Ritorno il box
    return boxElement;
}

// Funzione che permette di creare la griglia di box
function createGrid(boxNumber, container, level) {
    // Faccio un ciclo for in base a quanti box vogliamo creare
    for (let index = 1; index <= boxNumber; index++) {
        // Creo un box
        const box = createBox(index, level);
        // Lo appendo al container
        container.append(box);
    }
}

// Funzione che crea la griglia in base al livello
function performGameSettings(level, container) {
    // svuoto il container se prima era stato già riempito
    container.innerHTML = "";

    // Faccio uno switch sul livello
    switch (level) {
        case "easy": // Se il livello è easy
            createGrid(100, container, level);
            break;
        case "medium":
            createGrid(81, container, level)
            break;
        case "hard":
            createGrid(49, container, level)
            break;
        default:
            break;
    }
}

// -------------------------------

// Riferimenti HTML
const containerElement = document.querySelector('.container');
const playBtn = document.getElementById('play-btn');
const selectElement = document.querySelector('select');

// Azione alla pressione di playBtn
playBtn.addEventListener('click',
    function () {
        // Chiamo la funzione passandogli il livello e il container a cui appendere i box
        performGameSettings(selectElement.value, containerElement);
    }
)