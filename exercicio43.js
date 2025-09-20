//Usando um laço while, crie um programa que determine se um número é palíndromo ou não (um número é palíndromo se for igual ao seu reverso).
let numero = String(1001);
let i = 0
// let reverso = numero.split("").reverse().join("")
//let palindromo = numero == reverso
let ePalindromo = true;
let limite = numero.toString().length - 1
while(i < limite){  
  if(numero[i] !== numero[limite]){
    ePalindromo = false;    
    break;
  }
  i++
  limite--
}
console.log(`O número ${numero} ${ePalindromo ? "é": "não é" } palindromo`)

