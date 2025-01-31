let $preco = prompt("Digite o valor do produto: ")
let $desconto = prompt("Digite a porcentagem de desconto: ")


if ($preco.trim() === "" || $desconto.trim() === "") {
    alert("Informe valores válidos")
} else {
    let $precoDesconto = parseFloat($preco) * (1-(parseFloat($desconto) / 100))
    document.write("O valor do produto com desconto é: " + $precoDesconto.toFixed(2))
}

