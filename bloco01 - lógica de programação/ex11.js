let lado1 = 1;
let lado2 = 10;
let lado3 = 8;

if (lado1 === lado2 && lado2 === lado3) {
  console.log("Triângulo equilátero");
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
  console.log("Triângulo isósceles");
} else {
  console.log("Triângulo escaleno");
}
