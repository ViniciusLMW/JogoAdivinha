//Jogo adivinhação com limite de tentativas e numeros de chutes
var numSecreto = parseInt(Math.random() * 1001);
var contador = 1;
var contadorChutes = 1;
var limite = 16;
while(chute != numSecreto && contador < limite) {
  var chute = prompt("Informe um número de 0 a 1000:");
  
  if(chute == numSecreto) {
    alert("Você acertou!"
         + "\nCom o total de " + contador + " chutes!");
  } else if(chute < numSecreto && chute > 0 && chute < 1000) {
    alert("Errou... Número é maior que " + chute + "!"
         + "\nVocê tem apenas " + contador + "/15 tentativas."
         + "\nVocê ja deu no total " + contador + " chutes.");
    contador++;
  } else if(chute > numSecreto && chute > 0 && chute < 1000) {
    alert("Errou... Número é menor que " + chute + "!"
         + "\nVocê tem apenas " + contador + "/15 tentativas."
         + "\nVocê ja deu no total " + contador + " chutes.");
    contador++;
  } else if(chute > 1000 || chute < 0) {
    alert("Número inválido. Tente novamente.");
  }

}
if(limite == contador) {
  alert("Programa encerrado. O número secreto era " + numSecreto + "!");
}
