//Dado um array de números, façaum programa que imprimana tela somente os números positivos.
//OBS: Para melhorar a resolução desse problema, crie funções que tambémimprimem os números negativos, os pares, os ímpares e realize a contagem decada um deles.

const numeros = [1, 2, 3, -4, -5, -6, 7, 8, 9, 10, -11, -12, -13, 14, 15, 16];

const numerosPositivos = (numeros) => {
  console.log("Numeros positivos: ");
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
      console.log(numeros[i]);
    }
  }
};

const numerosNegativos = (numeros) => {
  console.log("Numeros negativos: ");
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
      console.log(numeros[i]);
    }
  }
};

const numerosPares = (numeros) => {
  console.log("Numeros pares: ");
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      console.log(numeros[i]);
    }
  }
};

const numerosImpares = (numeros) => {
  console.log("Numeros impares: ");
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      console.log(numeros[i]);
    }
  }
};

const contagem = (numeros) => {
  let positivos = 0;
  let negativos = 0;
  let pares = 0;
  let impares = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
      positivos++;
    } else {
      negativos++;
    }

    if (numeros[i] % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }

  console.log(`Positivos: ${positivos}`);
  console.log(`Negativos: ${negativos}`);
  console.log(`Pares: ${pares}`);
  console.log(`Impares: ${impares}`);
};

numerosPositivos(numeros);
numerosNegativos(numeros);
numerosPares(numeros);
numerosImpares(numeros);
contagem(numeros);
