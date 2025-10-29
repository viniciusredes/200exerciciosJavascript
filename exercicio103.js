const { stringify } = require("querystring")

//Convertendo Objetos em Strings JSON
const cadastro = {
  nome: "José",
  idade: 66,
  sexo: "Masculino"
}
const cadastroJson = (cadastro) => {
  return JSON.stringify(cadastro)
}
console.log(cadastroJson(cadastro))