//Exercício 80: Crie um objeto que represente um estudante, com propriedades para o nome, notas de várias matérias e um método para calcular a média das notas.

const estudante = {
  nome:"Francisco",
  idade:"15",
  notas:[10,7.5,6,10],
  calculaMedia:function(){
    let soma = 0
    for(index in this.notas){
      soma += this.notas[index]
    }
    return soma/this.notas.length
  }
}
console.log(estudante.calculaMedia())