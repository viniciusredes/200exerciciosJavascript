//Escreva uma função que retorne o maior número em um array de números.
function retornaMaior(array){
  array.sort((a, b) => {
    return b - a;
  })
  return array[0];
}