"use strict";
const promo = [
    { prenom: "John", nom: "Doe", notes: [1, 2, 3] },
    { prenom: "Jane", nom: "Doe", notes: [4, 5, 6] },
    { prenom: "Yoann", nom: "Coualan", notes: [7, 8, 9] }
];
let moyenne = (notes) => {
    let total = 0;
    notes.forEach((note) => {
        total += note;
    });
    return total / notes.length;
};
let afficherResultats = (etudiants) => {
    etudiants.forEach((e) => {
        const moyenne_notes = moyenne(e.notes);
        console.log(`${e.prenom} ${e.nom} : ${moyenne_notes}`);
    });
};
let meilleurEtudiant = (etudiants) => {
    let moyenne_notes = 0;
    let meilleur = etudiants[0];
    etudiants.forEach((e) => {
        const moyenne_etudiant = moyenne(e.notes);
        if (moyenne_etudiant > moyenne_notes) {
            meilleur = e;
            moyenne_notes = moyenne_etudiant;
        }
    });
    return [`${meilleur.nom} ${meilleur.prenom}`, moyenne_notes];
};
afficherResultats(promo);
console.log(meilleurEtudiant(promo));
