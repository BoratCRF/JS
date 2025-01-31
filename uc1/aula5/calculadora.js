// let $num1 = parseInt(prompt("Digite o primeiro número: "))
// let $num2 = parseInt(prompt("Digite o segundo número: "))
let $valor1 = prompt("Digite o primeiro número: ")
let $valor2 = prompt("Digite o segundo número: ")

//Conversão dos valores

//  let $num1 = parseInt ($valor1)
//  let $num2 = parseInt ($valor2)

// testar se valores são nulos

if ($valor1.trim() === "" || $valor2.trim() === "") {
    alert("Informe valores válidos")
} else {
    let $num1 = parseInt($valor1)
    let $num2 = parseInt($valor2)
    let $soma = $num1 + $num2
    let $sub = $num1 - $num2
    let $mult = $num1 * $num2
    let $div = $num1 / $num2

}


switch ($op) {
    case "+":
        console.log("A soma de " + $num1 + " e " + $num2 + " é: " + $soma)
        document.write("A soma de " + $num1 + " e " + $num2 + " é: " + $soma)
        if ($soma > 20) {
            document.write($soma + " É maior que 20")
        }
        else if ($soma < 20) {
            document.write($soma + " É menor que 20")
        } else {
            document.write($soma + " É igual 20")
        }
        break
    case "-":
        console.log("A subtração de " + $num1 + " e " + $num2 + " é: " + $sub)
        document.write("A subtração de " + $num1 + " e " + $num2 + " é: " + $sub)
        break
    case "*":
        console.log("A multiplicação de " + $num1 + " e " + $num2 + " é: " + $mult)
        document.write("A multiplicação de " + $num1 + " e " + $num2 + " é: " + $mult)
        break
    case "/":
        console.log("A divisão de " + $num1 + " e " + $num2 + " é: " + $div)
        document.write("A divisão de " + $num1 + " e " + $num2 + " é: " + $div)
        break
    default:
        console.log("Operador inválido, escolha um, dentre esses operadores  (+, -, *, /)")
        document.write("Operador inválido, escolha um, dentre esses operadores  (+, -, *, /)")
        break
}

    //faça uma condição para testar se a soma é maior ou menor que 20
