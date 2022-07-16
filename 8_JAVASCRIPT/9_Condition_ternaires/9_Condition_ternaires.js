const age = 21;

//let estMajeur;

//if (age >= 18) {
// estMajeur = true;
//} else {
// estMajeur = false;
//}

//console.log(estMajeur);

// On peux faire aussi : //
// () => expression //
// ? si l'expression est vrai //
// On excute le code a droite du point d'intérogation //
// Si elle est fausse on excute le code à droite du deux point //
const status = age >= 18 ? "majeur" : age < 2 ? "bébé" : "mineur";

console.log(status);
