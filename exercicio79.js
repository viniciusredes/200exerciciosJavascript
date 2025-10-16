//Exercício 79: Crie um objeto que represente um carro, com propriedades para a marca, modelo, ano e velocidade atual, e os seguintes métodos: acelerar, frear e obter velocidade atual.

const carro = {
  marca: "chevrolet",
  modelo:"camaro", 
  ano:2025,
  velocidade:0,
  acelerar:function(){return this.velocidade += 10},
  frear:function(){
    return this.velocidade >= 10 ? this.velocidade -= 10 : this.velocidade
  },
  mostrarVelocidade: function(){return this.velocidade}
}

console.log(carro.acelerar())