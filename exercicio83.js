//Exercício 83: Crie um objeto "tempo" que possui propriedades para horas, minutos e segundos, e um método para converter o tempo para segundos.
const tempo = {
  horas:"6",
  minutos:"30",
  segundos:"45",
  converterParaSegundos:function(){
    return this.horas*60*60 + this.minutos*60 + this.segundos
  }
}
console.log(tempo.converterParaSegundos())