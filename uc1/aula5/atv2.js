let $peso = parseFloat(prompt("Digite o seu peso: "))
let $altura = parseFloat(prompt("Digite a sua altura: "))
let $imc = $peso / ($altura**2)

if (isNaN($peso) || isNaN($altura)) {
    document.write("Peso ou altura inválidos")
} else {
if ($imc < 18.5) {
    document.write("Seu IMC é: " +$imc.toFixed(2) + " você está abaixo do peso")
} else if ($imc >= 18.5 && $imc <= 24.99) {
    document.write("Seu IMC é: " +$imc.toFixed(2) + " você está com o Peso normal")
} else if ($imc >= 25 && $imc <= 29.99) {
    document.write("Seu IMC é: " +$imc.toFixed(2) + " você está com Sobrepeso")
} else if ($imc >= 30 && $imc <= 34.99) {
    document.write("Seu IMC é: " +$imc.toFixed(2) + " você está com Obesidade I")
} else if ($imc >= 35 && $imc <= 39.99) {
    document.write("Seu IMC é: " +$imc.toFixed(2) + " você está com Obesidade II")
} else if ($imc >= 40) {
    document.write("Seu IMC é: " +$imc.toFixed(2) + " você está com Obesidade III")
} else {
    document.write("Peso inválido")
}
}   