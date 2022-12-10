//Crie uma função que recebe um objeto usuário e imprime se ele é maior de idade,utilize os conhecimentos da aula para melhorar o código.Exemplo Entrada:{ name: ‘Juca’, idade: 28 }Exemplo Saída:Maior de idade

const usuario = {
  name: "Juca",
  idade: 28,
};

const maiorDeIdade = (usuario) => {
  console.log(usuario.idade >= 18 ? "Maior de idade" : "Menor de idade");
};

maiorDeIdade(usuario);
