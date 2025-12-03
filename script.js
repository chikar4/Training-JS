let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let listePhrases = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]

let choixUtilisateur = prompt("Voulez-vous une liste de mots ou une liste de phrase ?") 

while (choixUtilisateur !== "phrases" && choixUtilisateur !== "mots") {
    choixUtilisateur = prompt("Voulez-vous une liste de mots ou une liste de phrase ?")
}

let score = 0

if (choixUtilisateur === "mots") {
    for (let i = 0; i < 3; i++) {
        let motUtilisateur = prompt("Rentrez le mot : " + listeMots[i])
        if (motUtilisateur === listeMots[i]) {score++}
    }
} else if (choixUtilisateur === "phrases") {
    for (let i = 0; i < 3; i++) {
        let motUtilisateur = prompt("Rentrez la phrase : " + listePhrases[i])
        if (motUtilisateur === listePhrases[i]) {score++}
    }
}



console.log(score)