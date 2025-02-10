/* Monte uma matriz 3x3 que preencha o seu conteúdo via prompt */

let matriz = []; // criação de uma matriz
let linhas = 3; // Quantidade de linhas
let colunas = 0; // Quantidade de colunas
for (let i = 0; i < linhas; i++) {
    matriz[i] = []; // criação de uma nova linha
    for (let j = 0; j < colunas; j++) {
        matriz[i][j] = parseInt(prompt('Digite o valor para a posição ['+i+']['+j+']'));

    }
}
//exibindo a matriz formatada no console
console.log("Matriz informada pelo usuário");
for (let i = 0; i < linhas; i++) {
    console.log(matriz[i].join(" "));
    document.write(matriz[i].join(" | ") + "<br>");
}