//Exercício 72: Escreva uma função que aceite um número, um array de funções de callback e um valor inicial, e retorne o resultado final após a aplicação de todas as funções de callback no valor inicial, o número de vezes especificado.
const inicialNumber = 50;
const arrayFunctions = [
  (a) => {return a**2},
  (a) => {return a*2},
  (a) => {return a*3},
  (a) => {return a/2}
];
const Operationsfunction = (inicialNumber,arrayFunctions) => {
  let finalNumber = inicialNumber;
  arrayFunctions.map(_function => {finalNumber += _function(inicialNumber)})
  console.log(finalNumber)
}
Operationsfunction(inicialNumber,arrayFunctions)
