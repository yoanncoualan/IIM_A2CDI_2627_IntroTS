"use strict";
var Exemple_Type;
(function (Exemple_Type) {
    // Création d'objets de type 'UserWithGender'
    const yoann = {
        firstname: "Yoann",
        lastname: "Coualan",
        birthdate: new Date("2000-06-22"),
        gender: "Male",
    };
    const john = {
        firstname: "John",
        lastname: "Doe",
        birthdate: new Date("2000-06-22"),
        gender: "Test", // Erreur : Impossible d'assigner le type '"Test"' au type 'Gender'
    };
})(Exemple_Type || (Exemple_Type = {}));
