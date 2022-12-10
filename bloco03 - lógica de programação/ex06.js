//Dado um array de números como entrada,faça um programa que multiplique todos os valores por 10.
//OBS: Para melhorar a resolução desse problema, monte um programa que recebe como parâmetro o valor pelo qual os valores do array devem ser multiplicados.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplicador = 10;

const multiplicar = (numeros, multiplicador) => {
  for (let i = 0; i < numeros.length; i++) {
    numeros[i] = numeros[i] * multiplicador;
  }
  console.log(numeros);
};

multiplicar(numeros, multiplicador);
