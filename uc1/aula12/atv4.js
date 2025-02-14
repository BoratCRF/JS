class Produto {
    constructor (nome, preco){
    this.nome = nome
    this.preco = preco
}

descontar(){
this.preco = this.preco - (this.preco/100)
}
}