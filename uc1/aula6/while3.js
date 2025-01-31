let $nome, $cadastro = "";
let $conti = "s";
let i = 0;

while ($conti == "s") {
    $nome = prompt("Informe o nome");
    // $cadastro = $cadastro + $nome + "<br>";
    $cadastro += $nome + "<br>";
    i++;
    $conti = prompt("Deseja continuar ? <s/n>");
   // if (continua != "s") break;
}

document.write($cadastro);
document.write("Foram lidos " + i + " nomes");
