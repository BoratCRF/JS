class Livro {
    constructor(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    
    exibirDetalhes (){
        document.write("O Livro " + this.titulo + " foi escrito por " + this.autor + " e publicado no ano " + this.anoPublicacao);
    }
}

livroAula = new Livro("American Gods", "Neil Gaiman", "2001");

livroAula.exibirDetalhes();