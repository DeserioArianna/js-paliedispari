// Chiediamo all'utente di inserire una parola
const utenteParola = prompt("Inserisci una parola");


// Creo una funzione per verificare se è una parola polidroma
function parolaPalindroma(text) {
    // Rimuovo spazi e converto in minuscolo
    const cleanedText = text.replace(/\s+/g, '').toLowerCase();
    // Inversione della stringa
    const paliTextReverse = cleanedText.split('').reverse().join('');
    return paliTextReverse === cleanedText;
}


// Creo una condizione in cui l'utente ha veramnte inserito una parola Polidroma
if (parolaPalindroma(utenteParola)) {
    console.log(`Complimente la parola ${utenteParola} è polidroma`)
} else {
    console.log(`La parola ${utenteParola} non è polidroma`)
}