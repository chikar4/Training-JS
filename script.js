let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let listePhrases = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]

function choisirPhrasesOuMots() {
    let choixUtilisateur = prompt("Voulez-vous une liste de mots ou une liste de phrase ?") 
    while (choixUtilisateur !== "phrases" && choixUtilisateur !== "mots") {
        choixUtilisateur = prompt("Voulez-vous une liste de mots ou une liste de phrase ?")
    }
    return choixUtilisateur
}

function lancerBoucleDeJeu(listePropositions) {
    let score = 0
    for (let i = 0; i < 3; i++) {
        let motUtilisateur = prompt("Rentrez le mot : " + listePropositions[i])
        if (motUtilisateur === listePropositions[i]) {score++}
    }

    return score
}

function afficherResultat(score, nombreMots) {
    console.log(score + " sur " + nombreMots)
}


function lancerJeu() {
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nombreMots = 0

    if (choix === 'mots') {
        score = lancerBoucleDeJeu(listeMots)
        nombreMots = listeMots.length
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nombreMots = listePhrases.length
    }

    afficherResultat(score, nombreMots)
}

lancerJeu()