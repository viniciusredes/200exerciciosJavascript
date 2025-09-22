//Escreva uma função que calcule o fatorial de um número.
function fatorial(a){
  return a > 1 ? a * fatorial(a-1) : 1
}