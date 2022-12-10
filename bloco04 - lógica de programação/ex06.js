//Dado um array de números como entrada,faça umprograma que multiplique todos os valores por 10.OBS: Para melhorar a resolução desse problema, monte um programa querecebe como parâmetro o valor pelo qual os valores do array devem sermultiplicados.

let numeros = [2, 3, 2, 5, 8, 2, 3];

const multiplicar = numeros.map((numero) => numero * 10);

console.log(multiplicar);
