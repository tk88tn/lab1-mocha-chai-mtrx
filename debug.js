const Mtrx = require("mtrx");

const A = new Mtrx([[1, 2], [3, 4]]);
const B = new Mtrx([[5, 6], [7, 8]]);

console.log("A =", A);
console.log("Keys of A =", Object.keys(A));
console.log("Prototype methods =", Object.getOwnPropertyNames(Object.getPrototypeOf(A)));

const R1 = A.add(B);
console.log("A.add(B) =", R1);
console.log("Keys of add result =", R1 && Object.keys(R1));
console.log("Prototype of add result =", R1 && Object.getOwnPropertyNames(Object.getPrototypeOf(R1)));

const R2 = A.sub(B);
console.log("A.sub(B) =", R2);

const R3 = A.mul(B);
console.log("A.mul(B) =", R3);
