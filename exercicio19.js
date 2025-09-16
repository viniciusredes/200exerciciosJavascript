//Escreva um programa que verifica se um número está dentro de um determinado intervalo.
let intervaloInferior = 0;
let intervalosuperior = 100;
let numero = 50;
let resultado
if(intervaloInferior < numero && intervalosuperior > numero){
  resultado = "dentro";
}else{
  resultado = "fora";
}
console.log(`O número ${numero} está ${resultado} do intervalo de ${intervaloInferior} e ${intervalosuperior}`)