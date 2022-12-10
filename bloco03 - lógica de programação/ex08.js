//Dado um array de números, faça um programa que encontre o menor elemento deste array e sua posição. Mostre as informações encontradas no console.OBS: Para melhorar a resolução desse problema, monte um programa quetambém consegue retornar qual o maior valor e qual a sua posição.

const numeros = [2, 4, 6, 7, 10, 0, -3];

const menorValor = (numeros) => {
  let menor = numeros[0];
  let posicao = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
      posicao = i;
    }
  }
  return `O menor valor é ${menor} e sua posição é ${posicao}`;
};

const maiorValor = (numeros) => {
  let maior = numeros[0];
  let posicao = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
      posicao = i;
    }
  }
  return `O maior valor é ${maior} e sua posição é ${posicao}`;
};

console.log(maiorValor(numeros));
console.log(menorValor(numeros));
