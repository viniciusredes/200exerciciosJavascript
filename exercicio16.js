//Escreva um programa que determina o maior entre três números.
let num1 = 10;
let num2 = 20;
let num3 = 30;
let maior
//Math.max(num1,num2,num3);
if(num1 > num2 && num1 > num3){
  maior = num1
}else if(num2 > num3){
  maior = num2
}else{
  maior = num3
}
console.log(`${maior} é o maior número`);