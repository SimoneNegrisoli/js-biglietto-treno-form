// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.


// Punto 1

    // Costanti

    const submitButton = document.getElementById('submitbutton')

    const deleteButton = document.getElementById('deletebutton')

    /**********************************************************/ 

    // const nomeuser = document.getElementById('nomeuser');

    // let kmuser = document.getElementById('kmuser');

    // let age = document.getElementById('age');

    let ticketPrice = parseInt(0.21 * kmuser);
    console.log(ticketPrice)

    const discount20 = (ticketPrice * 0.2);

    const discount40 = (ticketPrice * 0.4);


// Punto 2

    submitButton.addEventListener('click',
        function(){
            let nomeuser = document.getElementById('nomeuser').value;
            let kmuser = document.getElementById('kmuser').value;
            let age = document.getElementById('age').value;

        }    
    )
