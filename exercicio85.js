//Exercício 85: Crie um objeto "quadrado" que herda as propriedades do objeto "retangulo" e substitua o método para calcular a área.
const retangulo = {
  altura:10,
  largura:50,
  calculaArea:function(){
    return this.altura * this.largura
  }
}
const quadrado = {...retangulo}
quadrado.largura = 10;
quadrado.altura = quadrado.largura;

console.log(quadrado.calculaArea())