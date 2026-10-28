"use strict";
let livre1 = { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", nbPages: 96, datePublication: new Date("1943-04-09"), resume: "Super livre" };
let livre2 = { titre: "Livre 2", auteur: "John Doe", nbPages: 301, datePublication: new Date("2026-10-28") };
let presenterLivre = (livre) => {
    return `"${livre.titre}" de ${livre.auteur} (${livre.nbPages} pages)`;
};
let estUnPaveLong = (livre) => {
    if (livre.nbPages > 300) {
        return true;
    }
    return false;
};
console.log(presenterLivre(livre1));
console.log("estUnPaveLong : ", estUnPaveLong(livre1));
console.log(presenterLivre(livre2));
console.log("estUnPaveLong : ", estUnPaveLong(livre2));
