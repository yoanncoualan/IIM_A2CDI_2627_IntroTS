let birthdate: Date = new Date("2000-06-22"); // Ici, 'birthdate' prend le type Date

console.log(birthdate);

// Création d'un objet avec 'email' facultatif
let user: {
  firstname: string,
  lastname: string,
  email?: string
} = {firstname: 'Yoann', lastname: 'Coualan'}

console.log(`${user.firstname} ${user.lastname}`);