//Escreva um programa que verifica se uma palavra é um palíndromo.

let palavra = "natan"
let arvalap = palavra.split("").reverse().join("")
console.log(palavra === arvalap ? "É palíndromo" : "Não é palíndromo")