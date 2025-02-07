let $numeros = [];
let valor

for (let i = 0; i < 3; i++) {
    valor = parseInt(prompt("Digite o número: "));    
    $numeros.push(valor);
}


console.log($numeros);
let $numMax = Math.max(...$numeros);
console.log($numMax);