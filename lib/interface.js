"use strict";
var Exemple_Interface;
(function (Exemple_Interface) {
    // Création d'un objet de type User
    const yoann = {
        firstname: "Yoann",
        lastname: "Coualan",
        birthdate: new Date("2000-06-22"),
    };
    // Affichage
    console.log(`${yoann.firstname} ${yoann.lastname}`);
})(Exemple_Interface || (Exemple_Interface = {}));
