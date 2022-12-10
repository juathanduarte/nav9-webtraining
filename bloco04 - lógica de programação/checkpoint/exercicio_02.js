//Troque todas as vírgulas na string abaixo por ponto final:
// a.“Olá, mundo, meu, nome, é, Juca”

let string = "Olá, mundo, meu, nome, é, Juca";

let novaString = string.replace(/,/g, ".");

console.log(novaString);
