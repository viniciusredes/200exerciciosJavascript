//Exercício 68: Escreva uma função de alta ordem que aceite um array de números e uma função de callback, e retorne um novo array que contém apenas os números do array original que satisfazem a condição da função de callback.
const bingo = (a) => {return a == Math.floor(Math.random() * (10 - 1) + 1) ? a : ''}
const cartela = [1,1,2,1,3,4,10,5,5,6,7,8,8,9,10,10,10]
const myfunction = cartela.filter(a => {return bingo(a)})
console.log(myfunction)