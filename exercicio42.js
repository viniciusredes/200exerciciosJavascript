//Usando um laço for, crie um programa que transforme um número binário em decimal.
/**
 * 11001 = 1x2^4 + 1x2^3 + 0x2^2 + 0x2^1 + 1x2^0
 * 11001 = 16 + 8 + 0 + 0 + 1
 * 11001 = 25
 * */

let decimal = 0
let binario = 11001
let tamanho = binario.toString().split("").length - 1
for(let i = 0; i <= tamanho; i++){  
    decimal += binario.toString().split("")[tamanho - i] * 2 ** i;
    console.log(tamanho - i)
}
console.log(decimal)