let string = "/";
let number1 = 10;
let number2 = 20;

console.log(calculate(string, number1, number2));

function calculate(string, number1, number2) {
  switch (string) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    default:
      return "Operação inválida";
  }
}
