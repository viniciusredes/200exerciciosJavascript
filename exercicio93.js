//Dado um array de números, encontre a mediana.
const numbersArray = [1,2,3,4,5,6,10,11,12,13,18,15,16,0,-1];
const orderNumberArray = numbersArray.sort((a, b) => {return a - b});
const half = Math.floor(orderNumberArray.length/2)
const median = orderNumberArray.length % 2 == 0? (orderNumberArray[half-1] + orderNumberArray[half])/2 : orderNumberArray[half] 

console.log(median)