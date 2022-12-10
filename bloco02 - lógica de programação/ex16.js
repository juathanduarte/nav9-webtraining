// Dado o objeto user = { name: "Marília", age:26, job: "Dev" }, imprima cadauma de suas propriedade da seguinte forma "o valor da propriedadepropriedade_nome é valor".

let user = {
  name: "Marília",
  age: 26,
  job: "Dev",
};

for (let prop in user) {
  console.log(`O valor da propriedade ${prop} é ${user[prop]}`);
}
