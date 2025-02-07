alert("Olá, vamos sortear um número entre 1 e 100");
let $num = (Math.floor(Math.random() * 100) + 1);

if ($num % 2 == 0) {
    document.write("O número sorteado é: " + $num + " e ele é um número Par");
} else {
    document.write("O número sorteado é: " + $num + " e ele é um número ímpar");
}

