//Dado um número, faça um algoritmo que imprimen o console a soma detodos os números de 1 até o número escolhido. Ex: Ao ter como entrada o valor 5, devem ser somados todos os números de 1 até 5 (1+2+3+4+5).

let numero = 10;
let soma = 0;

for (let i = 1; i <= numero; i++) {
  soma += i;
}
console.log(soma);
