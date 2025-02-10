// 1) Dado um sistema que armazena notas de alunos em uma matriz 3x3, realize as seguintes atividades:
// a) Criar uma matriz 3x3 preenchida com valores numéricos representando as notas dos alunos.
// b) Exibir a matriz no console de forma organizada. (usando uma estrutura de repetição)
// c) Calcular e exibir a média das notas de cada aluno.
// d) Identificar e exibir a maior nota da matriz.
// e) Substituir todas as notas menores que 6 por 6, garantindo que nenhum aluno fique com nota abaixo desse valor.

let matriz = [
    [10,8,7.5],
    [3,6,5],
    [9,4,8],
];
let linhas = 3;
let colunas = 3;

for (let i = 0; i < matriz.length; i++) {
    document.write(matriz[i].join(" | ") +"<br>");
}

for (let i = 0; i < linhas; i++) {
    let somaNotas = 0;
    for (let j = 0; j < colunas; j++) {
        somaNotas += matriz[i][j];
    }
    let media = somaNotas / colunas;
    document.write("A média do aluno "+(i+1)+" é: "+media.toFixed(2)+"<br>");
}

for (let i = 0; i < matriz.length; i++) {
    let maior = matriz[i][0];
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] > maior) {
            maior = matriz[i][j];
        }
    }
    document.write("A maior nota do aluno "+(i+1)+" é: "+maior+"<br>");
}

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] < 6) {
            matriz[i][j] = 6;
        }
    }
}