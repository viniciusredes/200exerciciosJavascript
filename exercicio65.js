//Escreva uma função que aceite um array de números e uma função de callback e retorne a soma de todos os números do array após a aplicação da função de callback.

function   callbackSoma (array, callback) { 
  return array.map(callback).reduce((a, b) => a + b, 0 ); 
} 
  let array = [ 1 , 5 , 10 , 15 , 20 ]; 
  let callback = num => num ** 2 ; 
  console .log(callbackSoma(array, callback));
  
 