// Exercício 3 – Arredondando Valores
// 📜 Enunciado:Receba um número decimal qualquer e exiba:
// O valor arredondado para cima (Math.ceil())
// O valor arredondado para baixo (Math.floor())
// O valor arredondado normalmente (Math.round())

let $num = Math.random();

document.write("O valor sorteado foi: " + $num + "<br>");
document.write("O valor arredondado para cima é: " + Math.ceil($num) + "<br>");
document.write("O valor arredondado para baixo é: " + Math.floor($num) + "<br>");
document.write("O valor arredondado normalmente é: " + Math.round($num) + "<br>");
