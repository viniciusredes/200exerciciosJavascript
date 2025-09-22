//Escreva uma função que verifique se um número é primo.
function ePrimo(i){
  if(i == 2 || i == 3 || i == 5 || i == 7 || i == 11 || i == 13){
    return `${i} é primo`
  }else if(i != 1 && i%2!=0 && i%3!=0 && i%5!=0 && i%7!=0 && i%11!=0 && i%13!=0){
    return `${i} é primo`
  }else{    
    return `${i} não é primo`
  }
}
