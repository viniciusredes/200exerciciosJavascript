//Dado um array de objetos que têm várias propriedades, crie uma função que retorne um novo array contendo apenas os valores de uma propriedade específica.

const objectsArray = [
  {
    nome: 'Vinícius',
    idade: 40,
    animal: 'leão'
  },
  {
    nome: 'Alana',
    idade: 38,
    animal: 'cisne'
  }
]
const extractNames = (objectsArray)=> {return objectsArray.map((element, index) => {return element.nome})}
console.log(extractNames(objectsArray))