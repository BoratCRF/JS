/* Ideia: Criar um programa para receber um número de 1 a7 e informar qual é o dia da semana */

$dia = 7
$dom = "Domingo"
$seg = "Segunda"
$ter = "Terça"
$qua = "Quarta"
$qui = "Quinta"
$sex = "Sexta"
$sab = "Sábado"

if ($dia == 1) {
console.log ("Se o dia for 1, hoje é " + $dom)
} else if ($dia == 2) {
    console.log ("Se o dia for 2, hoje é " + $seg)
} else if ($dia == 3) {
    console.log ("se o dia for 3, hoje é " + $ter)
} else if ($dia == 4) {
    console.log ("Se o dia for 4, hoje é " + $qua)
} else if ($dia == 5) {
    console.log ("Se o dia for 5, hoje é " + $qui)
} else if ($dia == 6) {
    console.log ("Se o dia for 6, hoje é " + $sex)
} else if ($dia == 7) {
    console.log ("Se o dia for 7, hoje é " + $sab)
} else {
    console.log ("Dia inválido. Informe um  número de 1 a 7.")
}