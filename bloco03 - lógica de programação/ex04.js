//Crie um algoritmo que tem como entradaum número eimprime a sua tabuada do 1 ao 10.
//OBS: Para melhorar a resolução desse problema, monte um código que aceiteum segundo valor e irá imprimir a tabuada de 1 até esse valor.

const numero = 5;
const valor = 9;

console.log(`Tabuada do ${numero} até ${valor}`);

const tabuada = (numero, valor) => {
  for (let i = 1; i <= valor; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
};

tabuada(numero, valor);
