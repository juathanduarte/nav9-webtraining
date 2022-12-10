//Escreva um programa para substituir os elementospares pelo valor “X”.

let numeros = [2, 3, 2, 5, 8, 2, 3];

numeros.forEach((numero, index) => {
  if (numero % 2 === 0) {
    numeros[index] = "X";
  }
});

console.log(numeros);
