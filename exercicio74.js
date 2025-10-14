//Escreva uma função de alta ordem que aceite uma função de callback e um array, e retorne um novo array que contém os resultados de aplicar a função de callback a cada elemento do array, sem alterar o array original.

const callbackFunction = (n) => {return n+"0"};
const myArray = [1,2,3,4,5,6,7,8,9]

const myFunction = (myArray, callbackFunction) => {
  return myArray.map((n) => callbackFunction(n));  
}
newArray = myFunction(myArray, callbackFunction)
console.log(newArray)