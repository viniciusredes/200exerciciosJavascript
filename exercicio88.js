//Exercício 88: Dado um array de preços de produtos, calcule o preço total após adicionar 10% de imposto a cada produto usando map(), e depois somando tudo com reduce().
const precos = [9.99, 10.50, 12.15, 50.00]
const total = precos.map(a => {return (a*1.1)}).reduce((a,b) => {return a + b}).toFixed(2)
console.log(total)