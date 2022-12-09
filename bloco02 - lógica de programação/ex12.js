//Dado um array de números, faça um programa que encontre o menor elemento deste array e sua posição. Mostre as informações encontradas no console.

let numeros = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10];

let menor = numeros[0];
let posicao = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] < menor) {
    menor = numeros[i];
    posicao = i;
  }
}

console.log("Menor: " + menor);
console.log("Posição: " + posicao);
