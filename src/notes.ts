interface Etudiant {
    prenom: string;
    nom: string;
    notes: number[];
}

const promo: Etudiant[] = [
    {prenom: "John", nom: "Doe", notes: [1, 2, 3]},
    {prenom: "Jane", nom: "Doe", notes: [4, 5, 6]},
    {prenom: "Yoann", nom: "Coualan", notes: [7, 8, 9]}
];

let moyenne = (notes: number[]): number => {
    let total = 0;
    notes.forEach((note) => {
        total += note;
    })
    return total / notes.length;
}

let afficherResultats = (etudiants: Etudiant[]): void => {
    etudiants.forEach((e) => {
        const moyenne_notes = moyenne(e.notes)
        console.log(`${e.prenom} ${e.nom} : ${moyenne_notes}`);
    })
}

type Classement = [string, number];

let meilleurEtudiant = (etudiants: Etudiant[]): Classement => {
    let moyenne_notes: number = 0;
    let meilleur: Etudiant = etudiants[0];
    etudiants.forEach((e) => {
        const moyenne_etudiant = moyenne(e.notes)
        if(moyenne_etudiant > moyenne_notes){
            meilleur = e;
            moyenne_notes = moyenne_etudiant
        }
    })

    return [`${meilleur.nom} ${meilleur.prenom}`, moyenne_notes];
}

afficherResultats(promo);
console.log(meilleurEtudiant(promo));