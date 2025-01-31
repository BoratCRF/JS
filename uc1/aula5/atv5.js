let $num = prompt("Digite um número: ");

if ($num.trim() == "") {
    document.write("Informe um número valido")
} else {
     if (parseInt($num % 2) == 0) { // onde % retorna o resto da divisão
    document.write("O número é par")
} else {
    document.write("O número é impar")
}
}