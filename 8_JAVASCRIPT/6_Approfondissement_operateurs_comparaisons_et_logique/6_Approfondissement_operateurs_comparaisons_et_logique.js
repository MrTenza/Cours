let a = 1;
let b = 2;

console.log(a == b); // retourne false , moins précis //
console.log(1 === "1"); // retourne false , car empeche la convertion en chaine de caractère //
console.log(3 < 2 < 1); // Renvoie true => parce que : 3 < 2 = false et ensuite false est bien inférieur à 1 car c'est 0 //

// Convertie en la valeur opposer //
console.log(!true);

// Réinverse 2 fois //
console.log(!!true);

// Vérifie les deux condition et renvois true et si une condition est pas bonne il renvois false (et et ) //
console.log(true && true); //true//
console.log(true && false); //false//

// Vérifie si un des deux opérand est true => renvois true  (ou ou ) //
console.log(false || true);
