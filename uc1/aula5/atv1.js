let $valor1 = prompt("Digite o valor do lado 1: ");
let $valor2 = prompt("Digite o valor do lado 2: ");
let $valor3 = prompt("Digite o valor do lado 3: ");

// testar se valores são nulos

if ($valor1.trim() === "" || $valor2.trim() === "" || $valor3.trim() === "") {
    alerta("Informe valores válidos");
} else if ($valor1 + $valor2 < $valor3 || $valor1 + $valor2 > $valor3 || $valor2 + $valor3 < $valor1) {
    document.write("Esses valores não formam um triângulo.")
} else if ($valor1 === $valor2 && $valor1 === $valor3) {
    document.write("é um Triângulo equilátero")
} else if (($valor1 === $valor2 && $valor2 !== $valor3) || ($valor1 !== $valor2 && $valor1 === $valor3)){
    document.write("é um Triângulo isósceles")
} else {
    document.write("é um Triângulo escaleno")
}
