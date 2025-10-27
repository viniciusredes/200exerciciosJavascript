//Exercício 97: Dado um array, encontre o elemento que aparece mais vezes.
const arrayItens = [1,1,2,4,6,8,10,1,3,3,10,5,6,7,1,10,10,10,10]
const countItens = (arrayItens) => {
  let lastitem = 0;
  let frequency = 0;
  let maxFrequency = 0;
  let maxItem = 0;
  const orderArrayItem = arrayItens.sort((a,b) => a-b)
  for(let item of orderArrayItem){
    //console.log(lastitem + " " + item)
    if(lastitem == item){
      frequency++      
    }else{
      frequency = 0
    }
    if(frequency > maxFrequency){
      maxFrequency = frequency;
      maxItem = item;
    }
    lastitem = item    
  }
  console.log(maxItem)
}
countItens(arrayItens);
