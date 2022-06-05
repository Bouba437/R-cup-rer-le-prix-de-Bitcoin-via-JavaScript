const url = 'https://blockchain.info/ticker';

function recupererPrix() {
    
    let requete = new XMLHttpRequest(); // Créer un objet
    requete.open('GET', url);

    requete.responseType = 'json';

    requete.send();
    
    requete.onload = function() {
        if(requete.readyState === XMLHttpRequest.DONE) {
            if(requete.status === 200) {
                let reponse = requete.response; 
                let prixEuros = reponse.EUR.last;
                document.querySelector('#price_label').textContent = prixEuros;
            } else {
                alert("Un problème est survenu, merci de revenir plus tard.")
            }
        }
    }
    console.log('prix actualisé');
}

setInterval(recupererPrix, 1000);
