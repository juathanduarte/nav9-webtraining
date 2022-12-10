//Dado um array de nomes, faça umprograma que tenhacomo entrada um valor à ser pesquisado e retorne se o nome existe ou não noarray.

let nomes = ["João", "Maria", "José", "Antônio", "Margarida"];

let nomePesquisa = "Antônio";

let nomeEncontrado = nomes.find((nome) => nome === nomePesquisa);

if (nomeEncontrado) {
  console.log(`O nome ${nomePesquisa} existe no array`);
} else {
  console.log(`O nome ${nomePesquisa} não existe no array`);
}
