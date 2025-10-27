//Exercício 91: Dado um array de strings, ordene-o em ordem decrescente com base no comprimento de cada string.

const myStringArray = ['abobrinha','beringela', 'pequi','batata','ceriguelas']
console.log(myStringArray.sort((a,b) => {
  return b.length - a.length;
}))