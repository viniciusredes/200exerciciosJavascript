//Escreva uma função que receba um array de números e retorne um novo array com todos os números duplicados.
function duplica(array){
  let arrayDuplicado = []
  for(item of array){
    arrayDuplicado.pop(item, item)
  }
  return arrayDuplicado
}