//Usando um laço do-while, crie um programa que transforme um número decimal em binário.
let decimal = 25;
let binario = "";
do{
  if(decimal%2 == 0){
    binario += 0;    
  }else{
    binario += 1;    
  }
  decimal = parseInt(decimal/2);      
}while(decimal > 0)
  binario = binario.split("").reverse().join("")
  console.log(binario)