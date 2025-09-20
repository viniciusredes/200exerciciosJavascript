//Usando um laço for, crie um programa que transforme um número binário em decimal.
let decimal = 0
let binario = 11001
let tamanho = binario.toString().split("").length - 1
for(let i = 0; i <= tamanho; i++){  
    decimal += binario.toString().split("")[tamanho - i] * 2 ** i;
    console.log(tamanho - i)
}
console.log(decimal)