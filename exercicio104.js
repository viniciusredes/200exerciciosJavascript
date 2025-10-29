//Exercício 104: Convertendo Strings JSON em Objetos
const cadastroJSON = `{
  "nome":"José",
  "idade":66,
  "sexo":"Masculino"
}`
const cadastroObject = (cadastroJSON) => {
  return JSON.parse(cadastroJSON)
}
console.log(cadastroObject(cadastroJSON))