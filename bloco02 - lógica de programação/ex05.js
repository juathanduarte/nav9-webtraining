//Dado um array de números, faça um programa queimprima na tela somenteos números positivos.

let numeros = [1, 2, 3, -4, -5, 6, 7, 8, -9, -10];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 0) {
    console.log(numeros[i]);
  }
}
