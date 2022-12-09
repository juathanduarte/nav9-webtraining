const initialHours = 22;
const endHours = 6;

if (initialHours < endHours) {
  console.log("O jogo durou " + (endHours - initialHours) + " horas");
} else if (initialHours > endHours) {
  console.log("O jogo durou " + (24 - initialHours + endHours) + " horas");
} else {
  console.log("O jogo durou 24 horas");
}
