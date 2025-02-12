// criação de classe

class Carro {
    constructor(marca, modelo, cor, ano) { // Criação da classe
        this.marca = marca; // definição dos atributos
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }

    // método de uma classe
    acelerar() {
        document.write("O carro " + this.modelo + " " + this.cor + " de ano " + this.ano + " está acelerando... <br>");
    }
    frear() {
        document.write("O carro " + this.modelo + " " + this.cor + " de ano " + this.ano + " está freiando... <br>");
    }  
}

// criando um objeto a partir da classe Carro
let meuCarro = new Carro("Toyota", "Supra", "Vermelho", "2020");
meuCarro.acelerar();
meuCarro.frear();

let meuOutroCarro = new Carro ("Ford", "Mustang", "Preto", "2024");
meuOutroCarro.acelerar();
meuCarro.frear();
