//Dado o objeto à seguir, imprima no console:
// O nome do dev.
// O segundo projeto.
// O nome do primeiro projeto.

let dev = {
  nome: "Juca",
  projetos: [
    {
      nome: "Projeto 1",
      linguagem: "JavaScript",
    },
    {
      nome: "Projeto 2",
      linguagem: "Python",
    },
  ],
};

console.log(dev.nome);
console.log(dev.projetos[1]);
console.log(dev.projetos[0]);
