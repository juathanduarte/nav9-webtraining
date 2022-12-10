//Dado a lista de compra a seguir, faça um programa que imprime no consolevalor total. Atenção, o valor de cada item é unitário.

let listaDeCompras = [
  { nome: "Arroz", quantidade: 1, valor: 5.4 },
  { nome: "Feijão", quantidade: 2, valor: 6.8 },
  { nome: "Alface", quantidade: 3, valor: 4.3 },
  { nome: "Tomate", quantidade: 4, valor: 2.6 },
  { nome: "Refrigerante", quantidade: 5, valor: 8.9 },
  { nome: "Cerveja", quantidade: 6, valor: 7.7 },
  { nome: "Carne", quantidade: 7, valor: 45.6 },
  { nome: "Azeite", quantidade: 8, valor: 13.9 },
  { nome: "Macarrão", quantidade: 9, valor: 4.6 },
];

let total = 0;

for (let i = 0; i < listaDeCompras.length; i++) {
  total += listaDeCompras[i].valor;
}

console.log("Total: R$ " + total);
