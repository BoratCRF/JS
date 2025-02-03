let $nomes = [];
let $nome = "";
let $cidades = [];
let $cidade = "";

for (let i = 0; i < 3; i++) {
    $nome = prompt("Digite um nome " + (i+1) + ":");
    $nomes.push($nome);
    $cidade = prompt("Digite a cidade " + (i+1) + ":");
    $cidades.push($cidade);
}

for (let i = 0; i < 3; i++) {
document.write((i+1) + " : " + $nomes[i] + " - ")
document.write($cidades[i] + "<br>")
}

// let indice;
// let continua;

// while (true){
//     indice = prompt("Informe o Índice");
//     if (indice >=0 && indice<3) {
//          alert("Nome..: " + $nome[indice] + " Cidade: " + $cidade[indice]);
//     } else {
//         alert("índice inválido");
//     }
//     continua = prompt("Deseja çer outro [indice <s/n>").toLowerCase();
//     if (continua != "s") break;
// }


