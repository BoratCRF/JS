let $num1 = 15
let $num2 = 25
let $op = "/"
let $soma = $num1 + $num2
let $sub = $num1 - $num2
let $mult = $num1 * $num2
let $div = $num1 / $num2

switch ($op) {
    case "+":
        console.log ("A soma de " + $num1 + " e " + $num2 + " é: " + $soma)
        break
    case "-":
        console.log ("A subtração de " + $num1 + " e " + $num2 + " é: " + $sub)
        break        
    case "*":
        console.log ("A multiplicação de " + $num1 + " e " + $num2 + " é: " + $mult)
        break
    case "/":
        console.log ("A divisão de " + $num1 + " e " + $num2 + " é: " + $div)
        break
    default:
        console.log ("Operador inválido, escolha um, dentre esses operadores  (+, -, *, /)") 
        break          
    }