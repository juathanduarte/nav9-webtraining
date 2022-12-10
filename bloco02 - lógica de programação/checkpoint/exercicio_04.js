//Crie um algoritmo que tem como entrada um objeto e imprime no console os nomesdos projetos ativos do usuário.

let user = {
  nome: "João",
  projetos: [
    { nome: "Projeto 1", status: "ativo" },
    { nome: "Projeto 2", status: "inativo" },
    { nome: "Projeto 3", status: "ativo" },
    { nome: "Projeto 4", status: "inativo" },
    { nome: "Projeto 5", status: "ativo" },
  ],
};

for (let i = 0; i < user.projetos.length; i++) {
  if (user.projetos[i].status === "ativo") {
    console.log(user.projetos[i].nome);
  }
}
