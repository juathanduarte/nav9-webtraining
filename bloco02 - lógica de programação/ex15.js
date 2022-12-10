// Dado o array de objetos abaixo, faça um programaque calcule a médiaaritmética dos estudantes e imprima no console os nomes dos estudantesaprovados. A média de aprovação é 7.0.

let estudantes = [
  {
    nome: "Maria",
    notas: [7, 7, 7, 7],
  },
  {
    nome: "José",
    notas: [6, 6, 6, 6],
  },
  {
    nome: "Antônio",
    notas: [8, 8, 8, 8],
  },
  {
    nome: "Margarida",
    notas: [9, 9, 9, 9],
  },
];

let media = 0;

for (let i = 0; i < estudantes.length; i++) {
  for (let j = 0; j < estudantes[i].notas.length; j++) {
    media += estudantes[i].notas[j];
  }
  if (media / estudantes[i].notas.length > 7) {
    console.log(estudantes[i].nome);
  }
  media = 0;
}
