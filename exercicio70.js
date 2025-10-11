//Exercício 70: Escreva uma função de alta ordem que aceite um array de funções de callback e um valor, e retorne um array de resultados de aplicar cada função de callback ao valor.
const arrayFunction = [
  (a) => {return a**2},
  (a) => {return a%2},
  (a) => {return a >= a*2-10 }
]
const numero = 8
const executeFunctions = (arrayFunction, numero) => {
  for (f of arrayFunction){
    console.log(f(numero));
  }
}
executeFunctions(arrayFunction, numero)