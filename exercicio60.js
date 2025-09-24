//Escreva uma função que receba um array de números e retorne um novo array com todos os números ao quadrado.
function quadrado(array){
  return array.map((x) => {
    return x**2
  })
}