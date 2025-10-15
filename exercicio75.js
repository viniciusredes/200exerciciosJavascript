//Escreva uma função de alta ordem que aceite um array de funções de callback e um valor, e retorne um novo array que contém os resultados de aplicar a função de callback ao valor, na ordem inversa.
const number = 100;
const arrayFunctions = [
  (a) => {return a-2},
  (a) => {return a+2},
  (a) => {return a**2}
];
const inverseArrayFunction = (arrayFunctions, number) => {
  return arrayFunctions.map((_function) => {return _function(number)}).reverse()
}
console.log(inverseArrayFunction(arrayFunctions, number))

