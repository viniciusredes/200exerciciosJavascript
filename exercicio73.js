//Exercício 73: Escreva uma função de alta ordem que aceite um número, um array de funções de callback e um valor inicial, e retorne o resultado final após a aplicação de todas as funções de callback no valor inicial, a cada "n" milissegundos.
const inicialNumber = 50;
const delay = 1000;
const arrayFunctions = [
  (a) => {return a**2},
  (a) => {return a*2 },
  (a) => {return a*3 },
  (a) => {return a/2 }
];
const Operationsfunction = (inicialNumber,arrayFunctions, delay) => {
  let finalNumber = inicialNumber;
  let index = 0
    const runStep = ( ) => {
      if(index >= arrayFunctions.length){
        clearInterval(interval);
        console.log('Resultado final:', finalNumber);
      }else{        
        finalNumber += arrayFunctions[index](finalNumber)  
        console.log(finalNumber)      
      }
      index++
    }
    const interval = setInterval(runStep,delay)    
}

Operationsfunction(inicialNumber,arrayFunctions, delay)