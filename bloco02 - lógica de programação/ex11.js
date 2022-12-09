//Dado um array de nomes, faça um programa que tenha como entrada um valor a ser pesquisado e retorne se o nome existe ou não no array.

let nomes = [
  "Juliana",
  "Pedro",
  "Regina",
  "João",
  "Patrícia",
  "Gabriel",
  "Carlos",
  "Carla",
];

let nome = "Gabriel";

for (let i = 0; i < nomes.length; i++) {
  if (nomes[i] === nome) {
    console.log("O nome " + nome + " existe no array.");
  }
}
