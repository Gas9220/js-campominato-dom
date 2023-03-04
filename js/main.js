'use strict';

// ---------- UTILS FUNCTIONS ----------

// Funzione che permette di generare un numero casuale (Thanks MDN)
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
    const max = maxInt(level);
    maxChoices = max;
    // Creo un array che conterra i numeri casuali
    let numbers = [];

    // Eseguo queste operazioni....
    do {
        // Creo un numero casuale da 1 al massimo intero
        const randomNumber = randomInt(1, max);
        // Se l'array non contiene già il numero, lo aggiungo
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    } while (numbers.length < totNumbers); // ...finchè la lunghezza dell'array non raggiunge il valore desiderato

    // Ritorno l'array di numeri
    return numbers;
}

// Funzione che permette di verificare se un array contiene un numero
function isIncluded(numbers, number) {
    // Se il numero è incluso
    if (numbers.includes(number)) {
        return true // ritorno true
    }

    return false // altrimenti ritorno false
}

// Funzione che dati due numeri, ritorna true quando la loro differenza è un determinato numero
function numbersDifference(num1, num2, difference) {
    if (num1 - num2 === difference) {
        return true
    }

    return false
}

// ------------------------------------

// ---------- CORE FUNCTIONS ----------

// Funzione che aggiunge la classe al box in base al livello scelto
function setBoxWidth(level, element) {
    // Aggiungo la classe css corrispondente al livello per formare la griglia con le righe e colonne giuste
    switch (level) {
        case "easy":
            element.classList.add('easy-box');
            break;
        case "medium":
            element.classList.add('medium-box');
            break;
        case "hard":
            element.classList.add('hard-box');
            break;
        default:
            break;
    }
}

// Funzione che determina le operazioni da fare al click su un box
function boxClickBehavior(bombs, boxTextContent, boxElement) {
    const boxes = document.querySelectorAll('.box');
    // Se l'array di bombe contiene il valore del box cliccato
    if (isIncluded(bombs, boxTextContent)) {
        const boxContent = document.querySelectorAll('.box-content');

        messageElement.innerHTML = `Hai perso. Il tuo punteggio è di: ${score} punti`;
        messageElement.classList.remove('hidden')

        // Faccio un ciclo for sui box
        for (let i = 0; i < boxes.length; i++) {
            // Faccio un ciclo for sull'array di bombe
            for (let y = 0; y < bombs.length; y++) {
                // Aggiungo a tutti i box che hanno valore uguale alla bomba, la classe css per colorarli di rosso
                if (bombs[y] === Number(boxContent[i].innerHTML)) {
                    boxes[i].classList.add('bomb-box');
                }
            }
            // Disabilito tutti i box
            boxes[i].classList.add('disabled', 'half-opacity');
        }
    } else {
        if (numbersDifference(maxChoices, userChoices, 17)) {
            score++; // aumento lo score
            userChoices += 1; // aumento il numero di scelte
            scoreElement.innerHTML = `Punti: ${score}`; // Aggiorno lo score a schermo
            boxElement.classList.add('box-clicked'); // Cambio il background in blu
            messageElement.innerHTML = `Congratulazioni, hai evitato tutte le bombe! Hai accumulato: ${score} punti`;
            messageElement.classList.remove('hidden');
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].classList.add('disabled', 'half-opacity');
            }
        } else {
            // se il valore cliccato non è uguale ad un valore contenuto della bomba
            boxElement.classList.add('box-clicked', 'disabled'); // Cambio il background in blu
            score++; // aumento lo score
            userChoices++ // aumento il numero di scelte
            scoreElement.innerHTML = `Punti: ${score}`; // Aggiorno lo score a schermo
        }
    }
}

// Funzione che permette di creare i box
function createBox(boxTextContent, level, bombs) {
    // Creo un div
    const boxElement = document.createElement('div');
    // Gli assegno la classe box
    boxElement.classList.add('box');

    // Aggiungo al box la classe css che configura la width dei box
    setBoxWidth(level, boxElement);

    // Creo uno span
    const boxSpanElement = document.createElement('span');
    boxSpanElement.classList.add('box-content');
    // Inserisco dentro lo span l'argomento passato alla funzione
    boxSpanElement.innerHTML = boxTextContent;

    // Aggingo lo span al div
    boxElement.append(boxSpanElement);

    // Aggiungo l'evento al click sul box
    boxElement.addEventListener('click', function () {
        boxClickBehavior(bombs, boxTextContent, boxElement)
    })

    // Ritorno il box
    return boxElement;
}

// Funzione che permette di creare la griglia di box
function createGrid(boxNumber, container, level, bombs) {
    // Faccio un ciclo for in base a quanti box vogliamo creare
    for (let index = 1; index <= boxNumber; index++) {
        // Creo un box
        const box = createBox(index, level, bombs);
        // Lo appendo al container
        container.append(box);
    }
}

// Funzione che crea la griglia in base al livello
function performGameSettings(level, container, bombs) {
    // faccio un reset
    reset(container);

    // Abilito lo switch debug
    switchElement.classList.remove('disabled', 'half-opacity');

    // Faccio uno switch sul livello
    switch (level) {
        case "easy": // Se il livello è easy
            createGrid(100, container, level, bombs);
            break;
        case "medium": // Se il livello è medium
            createGrid(81, container, level, bombs)
            break;
        case "hard": // Se il livello è hard
            createGrid(49, container, level, bombs)
            break;
        default:
            break;
    }
}

function reset(container) {
    score = 0; // Azzero lo score
    userChoices = 0
    container.innerHTML = ""; // Azzero i box
    debugElement.checked = false
    switchElement.classList.add('disabled', 'half-opacity');
    messageElement.classList.add('hidden')
    scoreElement.innerHTML = `Punti: ${score}`;
}

function debugModeOn(bombs) {
    const boxes = document.querySelectorAll('.box');
    const boxContent = document.querySelectorAll('.box-content');

    for (let i = 0; i < boxes.length; i++) {
        for (let y = 0; y < bombs.length; y++) {
            if ((isIncluded(bombs, Number(boxContent[i].innerHTML)) && (debugElement.checked === true))) {
                boxes[i].classList.add('debug')
            } else {
                boxes[i].classList.remove('debug')
            }
        }
    }
}

// -------------------------------

// Riferimenti HTML
const containerElement = document.querySelector('.container');
const playBtn = document.getElementById('play-btn');
const selectElement = document.querySelector('select');
const scoreElement = document.getElementById('score');
const debugElement = document.getElementById('debug');
const switchElement = document.querySelector('.switch');
const messageElement = document.querySelector('.message');

// Punteggio utente
let score = 0;

// Array di bombe
let bombs = []

let userChoices = 0
let maxChoices = 0

// Azione alla pressione di playBtn
playBtn.addEventListener('click',
    function () {
        // Riempio l'array di bombe
        bombs = fillArrayOfNumbers(selectElement.value, 16)
        console.log(bombs);
        // Chiamo la funzione passandogli il livello e il container a cui appendere i box
        performGameSettings(selectElement.value, containerElement, bombs);
        
    }
)

debugElement.addEventListener('click',
    function () {
        debugModeOn(bombs);
    }
)