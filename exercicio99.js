//Exercício 99: Dado um array, retorne um novo array com todas as combinações possíveis de pares de elementos.
const numbers = [1,2,3,4,5,6]
const uniquePairs = numbers.flatMap((a, i) =>
  numbers.slice(i + 1).map(b => [a, b])
);

console.log(uniquePairs);