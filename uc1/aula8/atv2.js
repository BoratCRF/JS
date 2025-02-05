function opSoma(valor1, valor2) {
    let $soma = valor1 + valor2;
    return $soma
}
function opSub (Valor1, Valor2) {
    let $sub = Valor1 - Valor2;
    return $sub
}

function opMult (Valor1, Valor2) {
    let $mult = Valor1 * Valor2;
    return $mult
}

function opDiv (Valor1, Valor2) {
    let $div = Valor1 / Valor2;
    return $div
}
let $num1 = parseInt(prompt("Digite o primeiro número: "));
let $num2 = parseInt(prompt("Digite o segundo número: "));
let $soma = opSoma($num1, $num2);
let $sub = opSub($num1, $num2);
let $mult = opMult($num1, $num2);
let $div = opDiv($num1, $num2);

document.write("A soma de " + $num1 + " e " + $num2 + " é: " + $soma + "<br>");
document.write("A subtração de " + $num1 + " e " + $num2 + " é: " + $sub + "<br>");
document.write("A multiplicação de " + $num1 + " e " + $num2 + " é: " + $mult + "<br>");
document.write("A divisão de " + $num1 + " e " + $num2 + " é: " + $div + "<br>");