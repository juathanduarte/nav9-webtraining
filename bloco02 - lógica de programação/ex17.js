//Dado o array de objetos a seguir, crie um algoritmoque imprimirá noconsole se o user é dev ou não, conforme a saída esperada à seguir.Importante: DEVE ser na mesma linha.

let usuarios = [
  { name: "Marília", age: 26, job: "Dev" },
  { name: "Juca", age: 21, job: "RH" },
  { name: "Flávia", age: 30, job: "Financeiro" },
  { name: "Sérgio", age: 24, job: "Dev" },
];

for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i].job === "Dev") {
    console.log(`${usuarios[i].name} é Dev`);
  } else {
    console.log(`${usuarios[i].name} não é Dev`);
  }
}
