namespace Exemple_Interface {
    interface User {
    firstname: string;
    lastname: string;
    birthdate: Date;
    }
    
    // Création d'un objet de type User
    const yoann: User = {
    firstname: "Yoann",
    lastname: "Coualan",
    birthdate: new Date("2000-06-22"),
    };
    
    // Affichage
    console.log(`${yoann.firstname} ${yoann.lastname}`);
}