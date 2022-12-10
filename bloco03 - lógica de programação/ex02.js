//Uma pessoa desenvolvedora recebe frequentemente propostas de trabalho pela CLT(Consolidação das Leis Trabalhistas) e pela PJ(Pessoa Jurídica). Considerando que o trabalho como CLT envolve férias, 13°salário, R$ 700 de benefício e 8% mensal referente ao FGTS. Faça um programa que receba como entrada os dois valores mensais oferecidos e tome a decisão informando qual proposta a pessoa deve aceitar.

const salarioCLT = 1280;
const salarioPJ = 1800;

const salarioCLTComBeneficios =
  salarioCLT + salarioCLT * 0.08 + 700 + salarioCLT / 12 + salarioCLT / 6;

if (salarioCLTComBeneficios > salarioPJ) {
  console.log("A pessoa deve aceitar a proposta de trabalho CLT");
} else {
  console.log("A pessoa deve aceitar a proposta de trabalho PJ");
}
