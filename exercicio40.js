//Usando um laço while, crie um programa que inverta uma string.
let nome = "abobrinha";
let nomeInvertido;
let index = nome.length;
while(index >= 0){
  if(nomeInvertido == undefined){
    nomeInvertido = nome[index];
  }else{
    nomeInvertido += nome[index];
  }  
  index--
}