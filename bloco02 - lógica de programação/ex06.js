//Dado um array de números, mostre quantos valores são pares, quantos são ímpares, quantos são positivos e quantos são negativos.

let numeros = [1, 2, 3, -4, -5, 6, 7, 8, -9, -10];
let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
  if (numeros[i] > 0) {
    positivos++;
  } else {
    negativos++;
  }
}

console.log("Pares: " + pares);
console.log("Ímpares: " + impares);
console.log("Positivos: " + positivos);
console.log("Negativos: " + negativos);
