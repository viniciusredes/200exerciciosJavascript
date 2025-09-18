//Usando um laço while, crie um programa que adivinha um número que o usuário pensou, através do método de busca binária.
function adivinhaNumero(){
let piso = 0;
let teto = 100;
let numero = prompt("Escolha um número entre 0 e 100");
let chute = Math.floor((teto + piso) / 2);

while(chute != numero){
  if(chute > numero){
    teto = chute;
  }else{
    piso = chute;
  }
  chute = Math.floor((teto + piso) / 2);
}
console.log(`O número que você pensou é ${chute}`);
}
