//Usando um laço for, imprima os primeiros 10 números da sequência de Fibonacci.
//F(n) = F(n-1) + F(n-2)
let myArray = [];
for(let n = 0; n < 10; n++ ){
  if(n < 2){
    myArray.push(1);
  }else{
    myArray.push(myArray[n-1] + myArray[n-2]);
  }  
}
console.log(myArray);