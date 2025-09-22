//Escreva uma função que calcule o n-ésimo número de Fibonacci.
//F(n) = F(n-1) + F(n-2)

function fibonacci(n){
  let myArray = [];
  for(let i = 0; i < n; i++ ){
    if(i < 2){
      myArray.push(1);
    }else{
      myArray.push(myArray[i-1] + myArray[i-2]);
    }  
  }
  return myArray[n-1]
}
