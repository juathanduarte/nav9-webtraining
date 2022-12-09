//Faça uma função que recebe um valor inteiro e verifica se o valor é par. A funçãodeve retornar um valor booleano se for par.

const number = 8;

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(number));

//Faça uma função que recebe a idade de um nadador e retorna a categoria dessenadador de acordo com a tabela abaixo:
// Idade - Categoria
// 5 a 7 anos - Infantil A
// 8 a 10 anos - Infantil B
// 11 - 13 anos - Juvenil A
// 14 - 17 anos - Juvenil B
// Maiores de 18 anos (inclusive) - Adulto

const age = 18;

console.log(category(age));

function category(age) {
  if (age >= 5 && age <= 7) {
    return "Infantil A";
  } else if (age >= 8 && age <= 10) {
    return "Infantil B";
  } else if (age >= 11 && age <= 13) {
    return "Juvenil A";
  } else if (age >= 14 && age <= 17) {
    return "Juvenil B";
  } else if (age >= 18) {
    return "Adulto";
  } else {
    return "Idade inválida";
  }
}
