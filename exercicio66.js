//Escreva uma função que aceite uma função de callback que retorne verdadeiro ou falso e um array, e retorne um novo array que contém apenas os elementos para os quais a função de callback retornou verdadeiro.

const falseOrTrue = (n) => {return n % 2 == 0 ? true : false}
const myArray = [0,1,2,3,4,5,6,7,8,9,10]
function myCallbackFunction (falseOrTrue, myArray){
  return myArray.filter (a => {
    return falseOrTrue(a);
  })
}
console.log(myCallbackFunction (falseOrTrue, myArray))