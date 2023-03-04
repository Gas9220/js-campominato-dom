Consegna Prima Parte ------------------------------------
L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
----------------------------------------------------------

Svolgimento prima parte ----------------------------------

1. Creo un riferimento html al container
2. Creo un riferimento html al button play
3. Creo una variabile che conterrà il livello di difficoltò

4. Creo una funzione createBox che crea il box avente un solo argomento:
 - Creo un div e gli assegno la classe box
 - Creo un span e gli assegno come innerHTML l'argomento passato alla funzione
 - Appendo lo span al div
 - Aggiungo un event listener che ascolta il click su box e quando avviene aggiunge la classe che colora il background e mostra l'alert
 - Ritorno il div

5. Creo una funzione createGrid avente due argomenti:
 - Dentro la funzione faccio un ciclo for che parte da uno, incrementando di 1 ad ogni iterazione che prosegue finchè l'indice non è minore o uguale al primo argomento passato (numero di box)
 - Ad ogni iterazione uso la funzione createBox per creare un box e lo appendo al container ( passato come secondo argomento)

6. Creo una funzione performGameSettings avente due argomenti:
 - Come prima cosa, svuota il contenuto del secondo argomento ( ovvero il container)
 - Eseguo uno switch sul primo argomento, ovvero il livello
  - Se il livello è "easy" (unico caso supportato senza bonus), userò la funzione createGrid passandogli come argomenti 100 ( numero di box da creare ) e il container a cui appenderli
- Nel caso default, uscirò semplicemente dallo switch

7. Al click del playBtn, verrò chiaamta la funzione performGameSettings passando negli argomenti il livello e il container

BONUS
1. Creo un select html e un riferimento ad esso nel javascript
2. Mi creo le classi per ogni tipo di griglia (easy, medium, hard)
3. Nella funzione createBox, quando creo il box, faccio uno switch su level per aggiungere la classe corrispondente
----------------------------------------------------------


Consegna Seconda Parte -----------------------------------
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

Superbonus 1
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
Superbonus 2
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.

Svolgimento seconda parte ----------------------------------
1. Creo una funzione che permette di generare un numero casuale dato un limite minimo e massimo

2. Creo una funzione che permette di generare un numero massimo in base al livello dato come argomento:
 - La funzione ritorna di default 100 se il valore è "easy".
 - Con uno switch sull'argomento:
  - Se il valore inserito è "medium" cambio il valore da ritornare in 81
  - Se il valore inserito è "hard" cambio il valore da ritornare in 49
  - Ritorno il valore modificato

3. Creo una funzione che permette di riempire un array con numeri casuali:
 - La funzione ha due argomenti, uno per il livello e uno per il totale di numeri da inserire nell'array
 - Creo una costante che sfrutta la funzione maxInt() per settare il valore intero massimo che posso generare
 - Creo un array vuoto che conterrà i numeri generati
 - Eseguo un ciclo do while che continuerà finchè l'array non sarà riempito 
 - Dentro il do:
  - Genero un numero casuale
  - Se il numero non è presente nell'array, lo aggiungo
- Ritorno l'array

------------------------------------------------------------