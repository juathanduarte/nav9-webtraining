//Dado a lista de compra a seguir,faça um programa queimprime no console valor total. Atenção, o valor de cada item é unitário.

let listaDeCompras = [
  { nome: "maçã", quantidade: 2, valor: 0.5 },
  { nome: "alface", quantidade: 1, valor: 1.73 },
  { nome: "Água 5L", quantidade: 2, valor: 5.99 },
  { nome: "Pão Francês", quantidade: 8, valor: 0.63 },
];

let valorTotal = 0;

listaDeCompras.forEach((item) => {
  valorTotal += item.quantidade * item.valor;
});

console.log(`O valor total da lista de compras é R$ ${valorTotal.toFixed(2)}`);
