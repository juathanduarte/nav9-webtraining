//Crie uma função que recebe uma string (com quatro possibilidades: “soma”,“subtrai”, “divide”, “multiplica”) e dois números. A função deve retornar a operação realizada informada pela string nos dois números.Exemplo Entrada:myFunction(‘soma’)(3)(5)Exemplo Saída:8

const myFunction = (operacao) => {
  return (num1) => {
    return (num2) => {
      switch (operacao) {
        case "soma":
          return num1 + num2;
        case "subtrai":
          return num1 - num2;
        case "divide":
          return num1 / num2;
        case "multiplica":
          return num1 * num2;
        default:
          return "Operação inválida";
      }
    };
  };
};

console.log(myFunction("subtrai")(3)(5));
