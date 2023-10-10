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

    const resetButton = document.getElementById('resetbutton')

    // const over = document.getElementById('over')

    // const minorenne = document.getElementById('minorenne')

    let ticketPrice = 0
   
    const discount20 = (ticketPrice * 0.2);

    const discount40 = (ticketPrice * 0.4);

    const nomepasseggero = document.querySelector('.nomepasseggero')

    const costobiglietto = document.querySelector('.costobiglietto')

    const offerta = document.querySelector('.offerta')

    const carrozza = document.querySelector('.carrozza')

    const codicecp = document.querySelector('.codicecp')



// Punto 2

    submitButton.addEventListener('click',
        function(){
            let nomeuser = document.getElementById('nomeuser').value;
            let kmuser = document.getElementById('kmuser').value;
            let age = document.getElementById('age').value;

            // controllo dati utenti
            if (nomeuser === '' || kmuser === '' || age === 'Scegli'){
                alert('devi inserire valori validi!')
            } else if (isNaN(kmuser) || kmuser <= 0){
                alert('metti chilometri validi!')
            } else{


            // prezzo
            ticketPrice = 0.21 * kmuser

            if (age === 'Minorenne (< 18)'){
                 ticketPrice -= ticketPrice * 0.2;

            } else if  (age === 'Over (65>)') {
                ticketPrice -= ticketPrice * 0.4;
            }
            
            // costanti biglietto
            const standard = 'Biglietto standard'
            const numberCarrozza = Math.floor(Math.random() * 9) + 1;
            const numberCodiceCp = Math.floor(10000 + Math.random() * 90000);

            // stampa nel documento
            nomepasseggero.textContent = nomeuser;
            costobiglietto.textContent = ticketPrice.toFixed(2);
            offerta.textContent = standard;
            carrozza.textContent = numberCarrozza;
            codicecp.textContent = numberCodiceCp;

            document.querySelector('.ticket').style.display = 'block';

            }

            
            
        }    
    )

    // Punto 3

        resetButton.addEventListener('click',
        
            function(){
                document.querySelector('.ticket').style.display = 'none';
                document.getElementById('nomeuser').value = '';
                document.getElementById('kmuser').value = '';
                document.getElementById('age').value = 'Scegli';
            }
        
        ) 
