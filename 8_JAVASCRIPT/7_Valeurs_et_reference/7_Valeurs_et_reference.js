// Copier par valeurs //
let a = 1;
let b = a;

console.log({ a, b });

b += 3;

console.log({ a, b });

// Copier par référence (parce objet ) modifie également les autres valeurs //
let c = { b: 1 };
let d = c;

d.b = 2;

console.log(c);
console.log(d);
