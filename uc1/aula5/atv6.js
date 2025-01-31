let $num1 = prompt("Digite o primeiro número: ")
let $num2 = prompt("Digite o segundo número: ")

if ($num1.trim() === "" || $num2.trim() === "") {
    alert("Informe valores válidos")
} else {
    if (parseInt($num1) > parseInt($num2)) {
        document.write("O maior número é: " + $num1)
    } else {
        document.write("O maior número é: " + $num2)
    }
}