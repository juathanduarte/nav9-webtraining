//Faça um programa que diga se um número é positivo ou negativo. Mostre “positivo”ou “negativo” de acordo com o número testado.

const number = 8;

if (number > 0) {
  console.log("positivo");
} else if (number < 0) {
  console.log("negativo");
} else {
  console.log("zero");
}

//Crie um programa que lê dois valores, x e y, e diz se algum desses valores é positivo.

const x = -1;
const y = 8;

if (x > 0 || y > 0) {
  console.log("Um dos valores é positivo");
} else {
  console.log("Nenhum dos valores é positivo");
}

//Elabore um algoritmo que calcule o que deve ser pago por um produto,considerando o preço normal de etiqueta e a escolha da condição de pagamento.Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado, imprimindo o valor final no console. Código Condição de pagamento :
// 1 - À vista em dinheiro ou cheque, recebe 10% de desconto
// 2 - À vista no cartão de crédito, recebe 15% de desconto
// 3 - Em duas vezes, preço normal de etiqueta sem juros
// 4 - Em três vezes, preço normal de etiqueta mais juros de 10%

const preco = 80;
const codigo = 1;

if (codigo == 1) {
  console.log(preco * 0.9);
} else if (codigo == 2) {
  console.log(preco * 0.85);
} else if (codigo == 3) {
  console.log(preco);
} else if (codigo == 4) {
  console.log(preco * 1.1);
}
