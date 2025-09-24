//Escreva uma função que retorne o menor número em um array de números.
function retornaMenor(array){
  array.sort((a, b) => {
    return a - b
  })
  return array[0];
}