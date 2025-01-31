let $nome = prompt("Digite um nome:");
const $qnt = parseInt(prompt("Digite a quantidade de vezes a ser repetida"))
let i = 0

while (i< $qnt) {
    document.write($nome + "<br>")
    i++
}