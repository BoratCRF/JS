let $nota1 = 10
let $nota2 = 10
let $med = ($nota1+$nota2)/2

/* if ($med >=7) {
    console.log("Aluno está aprovado: " + $med)
} else if ($med >=5){
    console.log("Aluno está de recuperação: " + $med)
} else {
    console.log("Aluno está reprovado: " + $med)
} */

if ($med >=7) {
    if ($med == 10){
        console.log("Aluno gabaritou!!! : " + $med)
    } else {
    console.log("Aluno está aprovado: " + $med)
}
} else if ($med >=5){
    console.log("Aluno está de recuperação: " + $med)
} else {
    console.log("Aluno está reprovado: " + $med)
}
