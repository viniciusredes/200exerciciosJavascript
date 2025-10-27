//Dado dois arrays, retorne um novo array que é a concatenação dos dois.
const array1 = [1,10,15,25,30,35,50,60,75]
const array2 = [-10,-20,-30,-40,-50]
const array3 = [...array1, ...array2] //array1.concat(array2)
console.log(array3)