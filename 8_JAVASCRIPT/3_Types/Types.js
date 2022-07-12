// TYPE PRIMITIF //

// String//
const name = "jean";

// Nombre //
const age = 15;

// null //
const hobbies = null;

// Undefined //
let action;

// Symbole //
let sym = Symbol();

// Boolean //
let actif = true;

// Donne le type //
console.log(typeof name);
console.log(typeof age);
console.log(typeof hobbies);
console.log(typeof action);
console.log(typeof sym);
console.log(typeof actif);

// TYPE OBJET //

// Objet litéral //
const ville = {
  name: "Paris",
  state: "France",
};

const greetings = function () {
  console.log("hello");
};

const today = new Date();

const arr = [1, 2, 3, 4, 5];

console.log(typeof ville);
console.log(typeof greetings);
console.log(typeof today);
console.log(typeof arr);
