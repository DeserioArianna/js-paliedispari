// Chiediamo all'utente pari o dispari
const userOpinion = prompt("Scegli pari o dispari");
const numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));

// Generiamo in una funzione i numeri random per l'utente e computer
function pariDispari(numeroUtente) {
    const numeroComputer = Math.floor(Math.random() * 5) +1;

    // Sommare il numero dell'utente con il numero del computer
    const somma = numeroUtente + numeroComputer;

    // Controlla se il numero dell'utente è pari o dispari
    if (somma % 2 === 0) {
        console.log(`${numeroUtente} è pari`);
    } else {
        console.log(`${numeroUtente} è dispari`)
    }

    // Restituisce i numeri generati come oggetto
    return {
        numeroComputer: numeroComputer,
        somma: somma
    };
}

// Esegui la funzione e salva il risultato
const risultati = pariDispari(numeroUtente);
console.log(`Il numero generato dall'utente: ${numeroUtente}, il numero generato dal computer: ${risultati.numeroComputer}`);
console.log(`Somma: ${risultati.somma}`);

// Controlla se l'opinione dell'utente corrisponde al risultato
if (risultati.somma && userOpinion === "pari") {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}



