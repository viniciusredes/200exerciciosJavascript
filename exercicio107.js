//Exercício 107: Filtrando Propriedades ao Converter para JSON (Use o segundo parâmetro da função JSON.stringify() para filtrar propriedades.)

const cadastro = {
  nome: "José",
  idade: 66,
  sexo: "Masculino"
}
const cadastroJson = (cadastro) => {
  return JSON.stringify(cadastro,['nome','idade'])
  
}
console.log(cadastroJson(cadastro))
