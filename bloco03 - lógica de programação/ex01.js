//Pegue um valor de entrada e calculeo menor número denotas possíveis (cédulas) no qual o valor pode ser decomposto.
//As notasconsideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e arelação de notas necessárias

let valor = 576;
let notas = [100, 50, 20, 10, 5, 2, 1];
let notasdisponiveis = [];

const notasDisponiveis = (valor) => {
  for (let i = 0; i < notas.length; i++) {
    while (valor >= notas[i]) {
      valor -= notas[i];
      notasdisponiveis.push(notas[i]);
    }
  }
  return notasdisponiveis;
};

console.log("Notas disponiveis: " + notasDisponiveis(valor));
