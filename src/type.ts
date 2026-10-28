namespace Exemple_Type {
    // Création du type Gender
    type Gender = "Female" | "Male" | "Non-binary";
    
    // Création de l'interface qui utilise le type 'Gender'
    interface UserWithGender {
    firstname: string;
    lastname: string;
    birthdate: Date;
    gender: Gender;
    }
    
    // Création d'objets de type 'UserWithGender'
    const yoann: UserWithGender = {
    firstname: "Yoann",
    lastname: "Coualan",
    birthdate: new Date("2000-06-22"),
    gender: "Male",
    };
    
    const john: UserWithGender = {
    firstname: "John",
    lastname: "Doe",
    birthdate: new Date("2000-06-22"),
    gender: "Test", // Erreur : Impossible d'assigner le type '"Test"' au type 'Gender'
    };
} 