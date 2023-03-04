'use strict';

// ---------- FUNCTIONS ----------
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