//Dado um array de números, façaum programa que imprima na tela somente os números positivos.OBS: Para melhorar a resolução desse problema, crie funções que tambémimprima os números negativos, os pares, os ímpares e realize a contagem decada um deles.

let numeros = [2, -3, 2, 5, -8, 2, 3];

const positivos = numeros.filter((numero) => numero > 0);
const negativos = numeros.filter((numero) => numero < 0);
const pares = numeros.filter((numero) => numero % 2 === 0);
const impares = numeros.filter((numero) => numero % 2 !== 0);

console.log(`Positivos: ${positivos}`);
console.log(`Quantos positivos: ${positivos.length}`);
console.log(`Negativos: ${negativos}`);
console.log(`Quantos negativos: ${negativos.length}`);
console.log(`Pares: ${pares}`);
console.log(`Quantos pares: ${pares.length}`);
console.log(`Ímpares: ${impares}`);
console.log(`Quantos ímpares: ${impares.length}`);
