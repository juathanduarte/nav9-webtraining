//Crie uma função que conte quantas palavras existem na frase que for passada comoparâmetro (dica: utilizem o método split de string)

let frase = "Eu quero viver o Amor!";

function contarPalavras(frase) {
  let palavras = frase.split(" ");
  return palavras.length;
}

console.log(contarPalavras(frase));
