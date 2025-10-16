//Exercício 78: Crie um objeto "cachorro" com propriedades para raça, nome e idade. Adicione um método que retorne a idade do cachorro em anos humanos (idade do cachorro * 7).
const cachorro = {
  raca:"vira-lata",
  nome:"caramelo",
  idade:2
}
cachorro.anosHumanos = () => {return cachorro.idade * 7};
console.log(cachorro);