//Exercício 106:  Adicionando Propriedades a um Objeto Convertido (adicione uma nova propriedade ao objeto e retorne o objeto atualizado.)

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
