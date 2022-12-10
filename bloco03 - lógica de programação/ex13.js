//Uma loja online que possui a estrutura do objetoabaixo, precisa quealgumas funcionalidades sejam implementadas. Implemente a lista defuncionalidades abaixo.
//Lista de Funcionalidades:
// ●Filtro por nome, código e categoria;
// ●Filtro por faixa de preço;
// ●Ordenação em Ordem Crescente e Decrescente por todos os campos;

const loja = [
  {
    cod: 12345,
    nome: "Notebook",
    estoque: 10,
    valor: 2000,
    categoria: "eletronicos",
  },
  {
    cod: 678910,
    nome: "Mouse-Pad",
    estoque: 20,
    valor: 30,
    categoria: "acessorios",
  },
  {
    cod: 11121314,
    nome: "Teclado",
    estoque: 12,
    valor: 100,
    categoria: "perifericos",
  },
  {
    cod: 15161718,
    nome: "Mouse",
    estoque: 15,
    valor: 90,
    categoria: "perifericos",
  },
];

// ●Filtro por nome, código e categoria;
const pesquisarNomeLivro = (loja, nome) => {
  let livroEncontrado = [];
  for (let i = 0; i < loja.length; i++) {
    if (loja[i].nome === nome) {
      livroEncontrado.push(loja[i]);
    }
  }
  return livroEncontrado;
};

console.log(pesquisarNomeLivro(loja, "Mouse"));

// ●Filtro por código;
const pesquisarCodigoLivro = (loja, cod) => {
  let livroEncontrado = [];
  for (let i = 0; i < loja.length; i++) {
    if (loja[i].cod === cod) {
      livroEncontrado.push(loja[i]);
    }
  }
  return livroEncontrado;
};

console.log(pesquisarCodigoLivro(loja, 12345));

// ●Filtro por categoria;
const pesquisarCategoriaLivro = (loja, categoria) => {
  let livroEncontrado = [];
  for (let i = 0; i < loja.length; i++) {
    if (loja[i].categoria === categoria) {
      livroEncontrado.push(loja[i]);
    }
  }
  return livroEncontrado;
};

console.log(pesquisarCategoriaLivro(loja, "perifericos"));

// ●Filtro por faixa de preço;
const pesquisarFaixaPrecoLivro = (loja, valorMin, valorMax) => {
  let livroEncontrado = [];
  for (let i = 0; i < loja.length; i++) {
    if (loja[i].valor >= valorMin && loja[i].valor <= valorMax) {
      livroEncontrado.push(loja[i]);
    }
  }
  return livroEncontrado;
};

console.log(pesquisarFaixaPrecoLivro(loja, 100, 2000));

// ●Ordenação em Ordem Crescente e Decrescente por todos os campos;
const ordenarLivros = (loja, ordem) => {
  if (ordem === "crescente") {
    return loja.sort((a, b) => a.valor - b.valor);
  } else if (ordem === "decrescente") {
    return loja.sort((a, b) => b.valor - a.valor);
  }
};

console.log(ordenarLivros(loja, "crescente"));
console.log(ordenarLivros(loja, "decrescente"));
