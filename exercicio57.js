//Escreva uma função que retorne a soma de todos os números ímpares em um array de números.
function somaImpar(array){
  let somaImpar = 0
  for(item of array){
    somaImpar += item % 2 != 0 ? item : 0
  }
  return somaImpar
}