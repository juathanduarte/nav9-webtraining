//Crie um algoritmo que tem como entrada um array de números e imprime no console a soma dos elementos sendo cada um deles multiplicado pelo seu índice

let array = [1, 2, 3, 4, 5];
let soma = 0;

for (let i = 0; i < array.length; i++) {
  soma += array[i] * i;
}

console.log(soma);
