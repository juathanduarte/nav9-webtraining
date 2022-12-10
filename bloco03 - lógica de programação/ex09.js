//Dado a lista de compras a seguir, faça um programa que imprime no console o valor total. Atenção, o valor de cada item é unitário.

const listaDeCompras = [
  { nome: "maçã", quantidade: 2, valor: 0.5 },
  { nome: "alface", quantidade: 1, valor: 1.73 },
  { nome: "Água 5L", quantidade: 2, valor: 5.99 },
  { nome: "Pão Francês", quantidade: 8, valor: 0.63 },
];

const valorTotal = (listaDeCompras) => {
  let soma = 0;
  for (let i = 0; i < listaDeCompras.length; i++) {
    soma += listaDeCompras[i].valor * listaDeCompras[i].quantidade;
  }
  return soma;
};

console.log(valorTotal(listaDeCompras));
