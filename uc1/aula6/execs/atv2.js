let $num = 1;

while ($num <= 15) {
    if (parseInt($num % 2) == 1) // onde % retorna o resto da divisão
    document.write($num + "<br>");
    $num++;
}