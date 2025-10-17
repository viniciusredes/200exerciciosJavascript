//Exercício 87: Dado dois arrays, um com vários números pares e outro com números ímpares, combine-os e, em seguida, filtre apenas os números que são múltiplos de 5.

const pares = [0,2,4,6,8,10,12,14,16,18,20]
const impares = [1,3,5,7,9,11,13,15,17,19,21]
const mCinco = [...pares, ...impares].sort().filter((a) => {return a%5==0})
console.log(mCinco)