//Crie um algoritmo que tem como entrada um array de notas, e imprime no console a média aritmética dessas notas.

let notas = [6, 8, 7];
let media = 0;

for (let i = 0; i < notas.length; i++) {
  media += notas[i];
}

console.log(media / notas.length);
