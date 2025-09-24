//Escreva uma função que ordene um array de números em ordem decrescente.
function decrescente(array){
  return array.sort((b,a) => {
    return b - a;
  });
}