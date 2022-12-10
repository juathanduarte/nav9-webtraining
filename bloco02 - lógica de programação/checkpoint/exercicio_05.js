//Levando em consideração o array [6, 21, 9, 2, 50, 98, 1] crie uma função que mostrao maior numero da lista

let numeros = [6, 21, 9, 2, 50, 98, 1];

function maiorNumero(numeros) {
  let maior = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }
  return maior;
}

console.log(maiorNumero(numeros));
