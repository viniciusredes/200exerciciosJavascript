//Exercício 67: Escreva uma função que aceite uma função de callback e um array de arrays, e retorne um novo array que contém os resultados de aplicar a função de callback a cada array.

const aoQuadrado = (a) => a**2;
const myArrays = [[0,1,2,3,4,5], [10,20,30,40,50], [0.5,0.25,0.125,0.001]]
function myFunction (callback, arrays){
  return myArrays.map(
    a => {return a.map(b => {return aoQuadrado(b)})})
}
console.log(myFunction(aoQuadrado, myArrays))