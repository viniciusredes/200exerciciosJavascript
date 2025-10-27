//Exercício 98: Dado um array de strings e um array de palavras proibidas, retorne um novo array sem as palavras proibidas.

const arrayWords = ['cuca', 'fruta', 'puta', 'chuta', 'chuca', 'bruxa']
const badWords = ['puta', 'chuca', 'bruxa']
const filterWords = (arrayWords, badWords) => {
  
  return arrayWords.filter(word => {
    return !badWords.includes(word) ? word : ""
  })
}
console.log(filterWords(arrayWords, badWords))