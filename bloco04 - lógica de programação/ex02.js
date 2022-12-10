//Dado um array de números, faça um programa que teste se este array contém um valor específico. Tanto o valor quanto o array serão valores de entrada. (fazer com find)

let numeros = [2, 3, 2, 5, 8, 2, 3];
let valor = 2;

numeros.find((value) => {
  if (value === valor) {
    console.log(`O valor ${valor} está no array`);
  } else {
    console.log(`O valor ${valor} não está no array`);
  }
});
