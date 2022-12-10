// Crie um algoritmo que tem como entrada um array de notas,e imprime no console a média aritmética dessas notas.
//OBS: Para melhorar a resolução desse problema, monte um programa que retorna a média aritmética independente do tamanho do array.

const notas = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const media = (notas) => {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
};

console.log(media(notas));
