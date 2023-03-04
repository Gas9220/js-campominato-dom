Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


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