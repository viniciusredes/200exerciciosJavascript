//Exercício 86:  Crie um objeto "livro" que possui propriedades para o título, autor e número de páginas, e um método para exibir o livro na console.

const livro = {
  titulo: "A volta dos que não foram",
  autor:"Desconhecido",
  numeroDePaginas : 999,
  mostrarLivro: function(){
    console.log(`
      titulo: ${this.titulo},
      autor: ${this.autor},
      numeroDePaginas : ${this.numeroDePaginas},      
      `)
  }
}
livro.mostrarLivro()