const fullName = "Juca da Silva";
const servidor = true;
const professor = true;

if (servidor && professor) {
  console.log(
    "Parabéns " +
      fullName +
      "! Você tem acesso a nossa linha de crédito especial!"
  );
} else if (servidor) {
  console.log(
    "Parabéns " +
      fullName +
      "! Você tem acesso a nossa linha de crédito para servidores"
  );
} else if (professor) {
  console.log(
    fullName + " infelizmente você não tem uma linha de crédito disponível."
  );
}
