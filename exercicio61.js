//Escreva uma função que receba um array de números e retorne um novo array com a raiz quadrada de todos os números.

function raizQuadrada(array){
  return array.map((a) => {
      return Math.sqrt(a)
  })  
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let novoArray = raizQuadrada(array)

