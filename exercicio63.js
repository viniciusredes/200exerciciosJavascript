//Escreva uma função que receba um número e retorne um array com todos os números primos até aquele número.

function primosAte(x){
  for(let i = 1; i <= x; i++){  
    if(i == 2 || i == 3 || i == 5 || i == 7 || i == 11 || i == 13){
      console.log(i)
    }else if(i != 1 && i%2!=0 && i%3!=0 && i%5!=0 && i%7!=0 && i%11!=0 && i%13!=0){
      console.log(i)
    }else{
      continue;
    }
  }
}