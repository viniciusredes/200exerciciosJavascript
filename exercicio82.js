//Crie um objeto "circulo" que possui uma propriedade de raio e dois métodos que calculam a área e a circunferência.
const circulo = {
  raio:10,
  area:function(){
    return Math.floor(Math.PI*this.raio**2);
  },
  perimetro:function(){
    return Math.floor(2*Math.PI*this.raio);
  }
}
console.log(circulo.area());
console.log(circulo.perimetro());