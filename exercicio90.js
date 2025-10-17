//Exercício 90: Dado um array que contém vários elementos duplicados, crie uma função que remova todas as duplicatas e retorne um array com elementos únicos.

const numerosMisturados = [1,1,2,2,3,4,5,5,6,7,8,9,10,11,12,12,16,15,17,17,80,80,]
const numerosUnicos = [...new Set(numerosMisturados)]
console.log(numerosUnicos)