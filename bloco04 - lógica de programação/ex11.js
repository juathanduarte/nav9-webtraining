//Crie um algoritmo que tem como entrada um array de strings e trata essas string substituindo os números por letra de acordo com a tabela a seguir, além disso, deve remover os espaços em branco no começo efim da string, se existirem.

let tabela = [
  { numero: 0, letra: "o" },
  { numero: 1, letra: "i" },
  { numero: 3, letra: "e" },
  { numero: 4, letra: "a" },
  { numero: 5, letra: "s" },
];

let strings = ["h3ll0 w0rld", "  w3b d3v3l0p3r  ", "0tterw1s3", "j4v4scr1pt "];

const substituir = (strings) => {
  let resultado = strings.map((string) => {
    let novaString = string.trim();
    tabela.forEach((item) => {
      novaString = novaString.replace(item.numero, item.letra);
    });
    return novaString;
  });
  return resultado;
};

console.log(substituir(strings));

// Resultado esperado:
// [ 'hello world', 'web developer', 'ottewiser', 'javascript' ]
