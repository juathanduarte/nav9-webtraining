//O dono de uma livraria resolveu que precisava de novas funcionalidades no seu sistema de livros e para isso ele contratou um programador. Conversando com o programador e entendendo as necessidades que o dono da livraria precisava, eles chegaram nas seguintes funcionalidades:
// ●Autor do livro mais vendido;
// ●Filtrar livros que tem um preço abaixo do valor que será inserido;
// ●Filtrar livros que tem um preço acima do valor que será inserido;
// ●Pesquisa pelo nome do livro;
// ●Pesquisa pelo autor do livro;
// ●Pesquisa pelo código do livro;
// ●Lista do Estoque;
// ●Top X livros mais vendidos (X será um valor inserido como entrada);
// ●Aumento de X % no preço dos livros (X será um valor inserido comoentrada).
// Tendo por base as funcionalidades acima e como entrada um um array deobjetos, faça um programa que resolva o problema do dono da livraria.

const livros = [
  {
    cod: "8568014003",
    nome: "mais esperto que o diabo",
    autor: "Napoleon Hill",
    valor: 24.6,
    quantidadeVendido: 17675,
  },
  {
    cod: "8550801488",
    nome: "pai rico, pai pobre",
    autor: "Robert T. Kiyosaki",
    valor: 42.71,
    quantidadeVendido: 8992,
  },
  {
    cod: "8547001085",
    nome: "antifragil",
    autor: "Nassim Nicholas Taleb",
    valor: 70.99,
    quantidadeVendido: 1700,
  },
  {
    cod: "8595080801",
    nome: "o investidor inteligente",
    autor: "Benjamin Graham",
    valor: 36.3,
    quantidadeVendido: 8445,
  },
  {
    cod: "8539004119",
    nome: "o poder do hábito",
    autor: "Charles Duhigg",
    valor: 48.9,
    quantidadeVendido: 14581,
  },
  {
    cod: "8543102146",
    nome: "essencialismo",
    autor: "Greg Mckeown",
    valor: 36.43,
    quantidadeVendido: 9730,
  },
  {
    cod: "9788539003839",
    nome: "rápido e devagar",
    autor: "Daniel Kahneman",
    valor: 50.93,
    quantidadeVendido: 5703,
  },
  {
    cod: "8551003429",
    nome: "princípios",
    autor: "Ray Dalio",
    valor: 89.9,
    quantidadeVendido: 3707,
  },
  {
    cod: "855717358X",
    nome: "gestão de alta performance",
    autor: "Andrew S. Grove",
    valor: 34.94,
    quantidadeVendido: 442,
  },
  {
    cod: "8550805246",
    nome: "empresas feitas para vencer",
    autor: "Jim Collins",
    valor: 44.2,
    quantidadeVendido: 824,
  },
  {
    cod: "855080455X",
    nome: "avalie o que importa",
    autor: "John Doerr",
    valor: 40.9,
    quantidadeVendido: 797,
  },
];

// ●Autor do livro mais vendido;
const autorMaisVendido = (livros) => {
  let maior = 0;
  let autor = "";
  for (let i = 0; i < livros.length; i++) {
    if (livros[i].quantidadeVendido > maior) {
      maior = livros[i].quantidadeVendido;
      autor = livros[i].autor;
    }
  }
  return autor;
};

console.log(autorMaisVendido(livros));

// ●Filtrar livros que tem um preço abaixo do valor que será inserido;
const filtrarLivrosPrecoAbaixo = (livros, valor) => {
  let livrosFiltrados = [];
  for (let i = 0; i < livros.length; i++) {
    if (livros[i].valor < valor) {
      livrosFiltrados.push(livros[i]);
    }
  }
  return livrosFiltrados;
};

console.log(filtrarLivrosPrecoAbaixo(livros, 50));

// ●Filtrar livros que tem um preço acima do valor que será inserido;
const filtrarLivrosPrecoAcima = (livros, valor) => {
  let livrosFiltrados = [];
  for (let i = 0; i < livros.length; i++) {
    if (livros[i].valor > valor) {
      livrosFiltrados.push(livros[i]);
    }
  }
  return livrosFiltrados;
};

console.log(filtrarLivrosPrecoAcima(livros, 50));

// ●Pesquisa pelo nome do livro;
const pesquisarNomeLivro = (livros, nome) => {
  let livroEncontrado = [];
  for (let i = 0; i < livros.length; i++) {
    if (livros[i].nome === nome) {
      livroEncontrado.push(livros[i]);
    }
  }
  return livroEncontrado;
};

console.log(pesquisarNomeLivro(livros, "antifragil"));

// ●Pesquisa pelo autor do livro;
const pesquisarAutorLivro = (livros, autor) => {
  let livroEncontrado = [];
  for (let i = 0; i < livros.length; i++) {
    if (livros[i].autor === autor) {
      livroEncontrado.push(livros[i]);
    }
  }
  return livroEncontrado;
};

console.log(pesquisarAutorLivro(livros, "Napoleon Hill"));

// ●Pesquisa pelo código do livro;
const pesquisarCodigoLivro = (livros, cod) => {
  let livroEncontrado = [];
  for (let i = 0; i < livros.length; i++) {
    if (livros[i].cod === cod) {
      livroEncontrado.push(livros[i]);
    }
  }
  return livroEncontrado;
};

console.log(pesquisarCodigoLivro(livros, "855080455X"));

// ●Lista do Estoque;
const listarEstoque = (livros) => {
  let lista = [];
  for (let i = 0; i < livros.length; i++) {
    lista.push(livros[i].nome);
  }
  return lista;
};

console.log(listarEstoque(livros));

// Top X livros mais vendidos;
const topXLivrosMaisVendidos = (livros, x) => {
  let livrosMaisVendidos = livros.sort((a, b) => {
    return b.quantidadeVendido - a.quantidadeVendido;
  });
  return livrosMaisVendidos.slice(0, x);
};

console.log(topXLivrosMaisVendidos(livros, 3));

// Aumento de X% no preço de todos os livros;
const aumentoPrecoLivros = (livros, x) => {
  let livrosAumento = livros.map((livro) => {
    livro.valor = livro.valor + (livro.valor * x) / 100;
    return livro;
  });
  return livrosAumento;
};

console.log(aumentoPrecoLivros(livros, 10));
