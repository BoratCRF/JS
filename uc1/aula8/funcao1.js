//------------------Parte 1

// function mensagemBoasVindas() {
//     alert("Bem-vindo ao nosso curso de programação!");
// }

// // Chamando função

// mensagemBoasVindas();

// let valor1 = 0;
// let valor2 = 1;
// let soma =  valor1+valor2;
// mensagemBoasVindas();


//--------------Part 2
// function cumprimentar(nome) {
//     alert("Olá, " + nome + "! Seja bem-vindo.");
// }

// // // Chamando função com diferentes valores

// // cumprimentar("Vinicius");
// // cumprimentar("Sarah");
// // cumprimentar("Alice");
// // let nome = prompt("Informe seu nome: ");
// // cumprimentar(nome);
// let nomes = ["Anna","Simone","Cristina","Elias"];
// for (let i=0; i < nomes.length; i++) {
//     cumprimentar(nomes[i]);
// }


//--------------Part 3
function somar(a, b) {
    let soma = a+b;
    return soma;
}

// Armazenando o resultado em variáveis

let resultado1 = somar(5, 3);
alert(resultado1);