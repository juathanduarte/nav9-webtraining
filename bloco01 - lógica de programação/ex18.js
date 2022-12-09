let valueOne = 10;
let valueTwo = 20;
let valueThree = 30;

console.log(valueOne + ", " + valueTwo + ", " + valueThree);

let aux = valueTwo;
valueTwo = valueThree;
valueThree = valueOne;
valueOne = aux;

console.log(valueOne + ", " + valueTwo + ", " + valueThree);
