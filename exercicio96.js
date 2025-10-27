//Exercício 96: Dado dois arrays, verifique se o segundo array é um subarray do primeiro.

const array1 = [10,20,30,40,50,60,70,80,90,100]
const array2 = [10,50,100]
const checkSubArray = (array1, array2) => {
  let include = false;
  if(array1.length >= array2.length){
    for(element of array2){
      include = array1.includes(element)? true : false
    }
    return  `Array 2 ${include ? "está" : "não está"} incluído no Array 1"` 
  }else{
    for(element of array1){
      include = array1.includes(element)? true : false
    }
    return  `Array 1 ${include ? "está" : "não está"} incluído no Array 2"`
  }  
}
console.log(checkSubArray(array1, array2))


