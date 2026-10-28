"use strict";
let cmd1 = {
    numero: 1,
    client: { nom: "COUALAN Yoann", email: "yoann.coualan@gmail.com" },
    montant: 123,
    statut: "En attente"
};
let cmd2 = {
    numero: 2,
    client: { nom: "DOE John", email: "john.doe@gmail.com" },
    montant: 456,
    statut: "Annulée"
};
let changerStatut = (cmd, statut) => {
    cmd.statut = statut;
};
let resumeCommande = (cmd) => {
    return `Commande n°${cmd.numero} de ${cmd.client.nom} : ${cmd.montant} € (${cmd.statut})`;
};
console.log(resumeCommande(cmd1));
// changerStatut(cmd1, "Perdue");
// console.log(resumeCommande(cmd1));
