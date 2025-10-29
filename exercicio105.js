//Exercício 105: Acessando Propriedades de um Objeto Convertido ( Dado uma string JSON que representa um objeto, converta essa string e acesse uma propriedade específica do objeto convertido.)

const cadastroJSON = `{
  "nome":"José",
  "idade":66,
  "sexo":"Masculino"
}`
const cadastroObject = (cadastroJSON) => {
  return JSON.parse(cadastroJSON)
}

const cadastro = cadastroObject(cadastroJSON)
cadastro['estadoCivil'] = 'Casado'
console.log(cadastro)
