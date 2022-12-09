const valor1 = 1;
const valor2 = 80;
const valor3 = 7;

const maiorValor = Math.max(valor1, valor2, valor3);
const menorValor = Math.min(valor1, valor2, valor3);
const valorDoMeio = valor1 + valor2 + valor3 - maiorValor - menorValor;

console.log(menorValor, valorDoMeio, maiorValor);
