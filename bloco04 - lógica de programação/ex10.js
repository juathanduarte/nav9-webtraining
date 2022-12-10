//Escreva um programa para encontrar os elementos comuns entre doisarrays

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let array3 = [];

array1.forEach((numero) => {
  if (array2.includes(numero)) {
    array3.push(numero);
  }
});

console.log(array3);
