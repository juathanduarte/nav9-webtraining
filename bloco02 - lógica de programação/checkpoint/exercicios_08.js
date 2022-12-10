//Crie uma função chamada rockPaperScissorsWinner e recebe dois valores comoparâmetro. Esses dois valores podem ser:
// ●0: tesoura
// ●1: papel
// ●2: pedra
// Construa um algoritmo que recebe esses valores randomicamente e printa na telaqual usuário ganhou, se o usuário 1 ou usuário 2

let user1 = Math.floor(Math.random() * 3);
let user2 = Math.floor(Math.random() * 3);

function rockPaperScissorsWinner(user1, user2) {
  if (user1 === 0 && user2 === 1) {
    console.log("User 2 wins");
  } else if (user1 === 0 && user2 === 2) {
    console.log("User 1 wins");
  } else if (user1 === 1 && user2 === 0) {
    console.log("User 1 wins");
  } else if (user1 === 1 && user2 === 2) {
    console.log("User 2 wins");
  } else if (user1 === 2 && user2 === 0) {
    console.log("User 2 wins");
  } else if (user1 === 2 && user2 === 1) {
    console.log("User 1 wins");
  } else {
    console.log("It's a draw");
  }
}

rockPaperScissorsWinner(user1, user2);
