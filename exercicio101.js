//Dado um array de números, retorne a soma de todos os valores únicos.
const myArray = [10,10,11,12,13,15,16,16,20,20]
const somaArrayUnicos = myArray.filter(element => {  
  return myArray.indexOf(element) === myArray.lastIndexOf(element)
}).reduce((sum, number) => sum + number)
console.log(somaArrayUnicos)
