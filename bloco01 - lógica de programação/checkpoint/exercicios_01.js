// Crie variáveis para armazenar algumas informações de cadastro de um estudante,são elas: nome, sobrenome, dia do nascimento, mês do nascimento, ano donascimento, primeira nota e segunda nota. A partir dessas informações, você devemostrar um relatório na tela da seguinte forma: Nome Completo, Idade, Data deNascimento e Média:

const nome = "João";
const sobrenome = "Silva";
const diaNascimento = 1;
const mesNascimento = 1;
const anoNascimento = 2000;
const primeiraNota = 7;
const segundaNota = 8;

const nomeCompleto = nome + " " + sobrenome;
const idade = 2021 - anoNascimento;
const dataNascimento =
  diaNascimento + "/" + mesNascimento + "/" + anoNascimento;
const media = (primeiraNota + segundaNota) / 2;

console.log("Nome Completo: " + nomeCompleto);
console.log("Idade: " + idade);
console.log("Data de Nascimento: " + dataNascimento);
console.log("Média: " + media);

//Crie um programa que some os números 5, 10 e 15. Salve o resultado em umavariável e imprima no console.

const numero1 = 5;
const numero2 = 10;
const numero3 = 15;

const soma = numero1 + numero2 + numero3;

console.log(soma);
