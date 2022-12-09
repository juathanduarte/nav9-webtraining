const number = -1;

checkSignal(number);

function checkSignal(number) {
  if (number > 0) {
    console.log(number + " é positivo");
  } else if (number < 0) {
    console.log(number + " é negativo");
  } else {
    console.log(number + " é zero");
  }
}
