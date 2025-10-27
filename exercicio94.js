//Dado um array de strings e um número n, retorne um novo array contendo apenas as strings que têm mais de n caracteres.

const stringArray = ['aba', 'neta', 'filha', 'cordão', 'chimarrão', 'cachaça'];
const filterNumber = 4;
const arrayFilter = stringArray.filter(e => e.length > filterNumber)
console.log(arrayFilter);