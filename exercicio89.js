//Exercício 89: Dada uma string com várias palavras separadas por espaços, transforme-a em um array e depois retorne a palavra mais longa.

const frase = "batatinha quando nasce, espalha a rama pelo chão"
const arrayFrase = frase.split(" ")
const maiorPalavra = arrayFrase.reduce((a,b) => {return a.length > b.length ? a : b})
console.log(maiorPalavra)
