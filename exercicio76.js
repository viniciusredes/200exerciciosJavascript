//Exercício 76: Crie um objeto vazio e adicione três propriedades a ele, cada uma com diferentes tipos de valores.
let newObject = {}
newObject = {nome : "Vinícius Oliveira"}
newObject.idade = "40"
newObject = { ...newObject, estado_civil : "Casado"}
console.log(newObject)