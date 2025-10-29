//
const myArray = [0,1,2,3,4,5,6,7,8,9,10,11]
const n = 5
function divideArray(myArray, n){
  let newArray = []
  let finalArray = []
  for(let index in myArray){
    newArray.push(myArray[index])     
    if(newArray.length == n || myArray[index] == myArray.length-1){
      finalArray.push(newArray)
      newArray = []    
    }
  }
  console.log(finalArray)
}
divideArray(myArray, n)
