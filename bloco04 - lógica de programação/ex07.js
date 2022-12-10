//Dado um array de entrada com o nome e as notasde avaliações dos alunos,retorne uma lista com os alunos que tiraram 0 em todas as provas.

let alunos = [
  {
    nome: "Maria",
    notas: {
      portugues: 0,
      matematica: 0,
      ciencias: 0,
    },
  },
  {
    nome: "José",
    notas: {
      portugues: 0,
      matematica: 0,
      ciencias: 0,
    },
  },
  {
    nome: "Antônio",

    notas: {
      portugues: 0,
      matematica: 0,
      ciencias: 0,
    },
  },
];

let alunosReprovados = alunos.filter((aluno) => {
  let notas = Object.values(aluno.notas);
  let reprovado = notas.every((nota) => nota === 0);
  return reprovado;
});

console.log(alunosReprovados);
