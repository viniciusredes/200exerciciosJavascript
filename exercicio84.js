//Exercício 84:  Crie um objeto "retangulo" que possui propriedades para altura e largura, e um método para calcular a área.
const retangulo = {
  altura:10,
  largura:50,
  calculaArea:function(){
    return this.altura * this.largura
  }
}
console.log(retangulo.calculaArea())

