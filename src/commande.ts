type StatutCommande = "En attente" | "Expédiée" | "Livrée" | "Annulée";

type Client = {
    nom: string;
    email: string;
}

interface Commande {
    numero: number;
    client: Client;
    montant: number;
    statut: StatutCommande;
}

let cmd1: Commande = {
    numero: 1,
    client: {nom: "COUALAN Yoann", email: "yoann.coualan@gmail.com"},
    montant: 123,
    statut: "En attente"
}

let cmd2: Commande = {
    numero: 2,
    client: {nom: "DOE John", email: "john.doe@gmail.com"},
    montant: 456,
    statut: "Annulée"
}

let changerStatut = (cmd: Commande, statut: StatutCommande): void => {
    cmd.statut = statut;
}

let resumeCommande = (cmd: Commande): string => {
    return `Commande n°${cmd.numero} de ${cmd.client.nom} : ${cmd.montant} € (${cmd.statut})`
}

console.log(resumeCommande(cmd1));
// changerStatut(cmd1, "Perdue");
// console.log(resumeCommande(cmd1));