//Crie um algoritmo que tem comoentrada um array de notas,e imprime no console a média aritmética dessas notas.OBS: Para melhorar a resolução desse problema, monte um programa queretorna a média aritmética independente do tamanho do array.

let notas = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const media = notas.reduce((acc, nota) => acc + nota) / notas.length;

console.log(media);
