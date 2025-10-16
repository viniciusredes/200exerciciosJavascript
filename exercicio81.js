//Exercício 81: Crie um objeto representando uma conta bancária, que possui uma propriedade de saldo e métodos para depósito e saque.

const contaBancaria = {
  numero: Math.floor(Math.random() * 1000),
  saldo: 0,
  deposito: function(n){
    return this.saldo += n
  },
  saque:function(n){
    if(this.saldo < n){
      return "saldo insuficiente"
    }else{
      return this.saldo -= n
    }
  }
}
console.log(contaBancaria.deposito(10))
console.log(contaBancaria.saque(7))