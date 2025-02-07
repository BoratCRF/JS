let frutas = ["banana", "laranja", "manga", "abacaxi"];

console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
if (frutas[0] == undefined) {
    console.log("Índice inválido")
}

// funções básicas

// push() >> acrescenta no final do array
console.log("Acrescentando com push");
frutas.push("abacate");
console.log(frutas);

// pop() >> remove o último elemento do array
console.log("removendo com pop");
frutas.pop;
console.log(frutas);
// sort() >> ordena um array string

console.log("Ordenando o string do array");
frutas.sort();
console.log(frutas);

// copy() >> copia um array: sintaxe: [...array_a_ser_copiado]
let copia =  [...frutas];
console.log("Mostrando a cópia");
console.log(copia);

// length() >> conta os elementos do array
console.log("Quantos elementos tem no array");
console.log(frutas.length);

// como trazer a função Math.random para exibir um elemento aleatório
let indiceAleatorio = Math.floor(Math.random()*frutas.length);
console.log(frutas[indiceAleatorio]);