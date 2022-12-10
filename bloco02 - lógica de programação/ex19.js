// Crie um algoritmo que tem como entrada um array de strings e trata essas string substituindo os números por letra de acordo com a tabela a seguir, além disso, deve remover os espaços em branco no começo e fim da string, se existirem.

let array = ["  h3ll0 w0rld", "  w3b d3v3l0p3r  ", "0tterw1s3", "j4v4scr1pt "];

let tabela = {
  0: "o",
  1: "i",
  3: "e",
  4: "a",
  5: "s",
};

for (let i = 0; i < array.length; i++) {
  let palavra = array[i].trim();

  for (let j = 0; j < palavra.length; j++) {
    if (tabela[palavra[j]]) {
      palavra = palavra.replace(palavra[j], tabela[palavra[j]]);
    }
  }
  console.log(palavra);
}
