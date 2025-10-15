//Exercício 77: Crie um objeto que represente um livro, com propriedades para o título, autor e número de páginas. Em seguida, adicione um método ao objeto que imprima uma descrição do livro.

const livro = {
  titulo: "A volta dos que não foram",
  autor:"Desconhecido",
  numeroDePaginas : 999,
  editora: "Sem noção"
}
livro.mostrardetalhes = () => {console.log(`Este é o livro se chama ${livro.titulo}, seu autor é ${livro.autor}, este volume possui ${livro.numeroDePaginas} páginas, e foi impresso pela editora ${livro.editora}`)}
livro.mostrardetalhes()