// 6 - Crie uma Função que Informa o Mês pelo Número 
// e retorna o mês por escrito (dica: use um array)

function chamarMes (mes) {
    let $meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    return $meses [mes - 1];
}

let $mes = parseInt(prompt("Digite o número do mês: "));

document.write("O mês é: " + chamarMes($mes));