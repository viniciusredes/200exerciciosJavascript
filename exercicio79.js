//Exercício 79: Crie um objeto que represente um carro, com propriedades para a marca, modelo, ano e velocidade atual, e os seguintes métodos: acelerar, frear e obter velocidade atual.

const carro = {
  marca: "chevrolet",
  modelo:"camaro",
  ano:2025,
  velocidade:0,
  acelerar:() => {this.velocidade += 10},
  frear:() => {if(this.velocidade >= 10){
    this.velocidade -= 10
  }},
  mostrarVelocidade: () => {return this.velocidade}
}
carro.acelerar()
carro.acelerar()
carro.frear()
carro.mostrarVelocidade()