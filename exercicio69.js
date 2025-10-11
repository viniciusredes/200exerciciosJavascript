//Exercício 69: Escreva uma função que aceite um número e uma função de callback, e execute a função de callback o número de vezes especificado.
const xVezes = 10;
const duplica = () => {return Math.floor(Math.random() * (10 - 1) + 1) }
const myFunction = (xVezes, duplica) => {
  for(let i = 1; i <= xVezes ; i++){
    console.log(duplica())
  }
}
myFunction(xVezes, duplica)