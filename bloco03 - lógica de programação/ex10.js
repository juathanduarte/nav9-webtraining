//Em uma empresa de tecnologia a área de RecursosHumanos precisava organizar algumas informações a respeito dos funcionários. Para que isso fosse possível, ele precisava criar um programa que entregasse a lista defuncionalidades abaixo.
// Tendo como entrada um array de objetos crie funções que realizam as seguintesoperações:
// ●Ordena o Array em ordem crescente por idade;
// ●Ordena o Array em ordem decrescente por idade;
// ●Ordena o Array em ordem crescente por salário;
// ●Ordena o Array em ordem decrescente por salário;
// ●Ordena o Array em ordem crescente por senioridade;
// ●Ordena o Array em ordem decrescente por senioridade;

const funcionarios = [
  { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
  { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
  { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
  { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
  { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
  { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
  { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
];

const ordenarPorIdadeCrescente = (funcionarios) => {
  return funcionarios.sort((a, b) => a.idade - b.idade);
};

const ordenarPorIdadeDecrescente = (funcionarios) => {
  return funcionarios.sort((a, b) => b.idade - a.idade);
};

const ordenarPorSalarioCrescente = (funcionarios) => {
  return funcionarios.sort((a, b) => a.salario - b.salario);
};

const ordenarPorSalarioDecrescente = (funcionarios) => {
  return funcionarios.sort((a, b) => b.salario - a.salario);
};

const ordenarPorSenioridadeCrescente = (funcionarios) => {
  return funcionarios.sort((a, b) =>
    a.senioridade.localeCompare(b.senioridade)
  );
};

const ordenarPorSenioridadeDecrescente = (funcionarios) => {
  return funcionarios.sort((a, b) =>
    b.senioridade.localeCompare(a.senioridade)
  );
};

console.log(ordenarPorIdadeCrescente(funcionarios));
console.log(ordenarPorIdadeDecrescente(funcionarios));
console.log(ordenarPorSalarioCrescente(funcionarios));
console.log(ordenarPorSalarioDecrescente(funcionarios));
console.log(ordenarPorSenioridadeCrescente(funcionarios));
console.log(ordenarPorSenioridadeDecrescente(funcionarios));
