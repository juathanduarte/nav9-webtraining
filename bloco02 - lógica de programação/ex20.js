//Dado o objeto abaixo, faça um programa que imprime no console o nome,cpf e telefone formatados. Dica: Separe o código em funções de formataçãopara cada um dos campos.

let pessoa = {
  nome: "Juathan coelho duarte",
  cpf: "12345678900",
  telefone: "11987654321",
};

function formatarNome(nome) {
  let nomeFormatado = nome.split(" ");
  let nomeFinal = "";

  for (let i = 0; i < nomeFormatado.length; i++) {
    nomeFinal +=
      nomeFormatado[i][0].toUpperCase() + nomeFormatado[i].slice(1) + " ";
  }

  return nomeFinal;
}

function formatarCpf(cpf) {
  let cpfFormatado =
    cpf.slice(0, 3) +
    "." +
    cpf.slice(3, 6) +
    "." +
    cpf.slice(6, 9) +
    "-" +
    cpf.slice(9, 11);

  return cpfFormatado;
}

function formatarTelefone(telefone) {
  let telefoneFormatado =
    "(" +
    telefone.slice(0, 2) +
    ")" +
    telefone.slice(2, 7) +
    "-" +
    telefone.slice(7, 11);

  return telefoneFormatado;
}

console.log("Nome: " + formatarNome(pessoa.nome));

console.log("CPF: " + formatarCpf(pessoa.cpf));

console.log("Telefone: " + formatarTelefone(pessoa.telefone));
