// função Math.floor()
// Arredonda um número para baixo 
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(2.3)); // 2

// função Math.random()
// Gera npumeros aleatórios
console.log("*** Números aleatórios ***")
// entre 0 e 1, onde 0 incluso e 1 excluso
console.log(Math.random());
console.log(Math.floor(Math.random() * 11));
// Entre 1 e 6
console.log(Math.floor(Math.random() * 6) + 1);

// função Math.ceil() aredonda para cima
console.log("*** Números cm ceil ***");
console.log(Math.ceil(3.2)); // 4

let preco = 10.25;
console.log(Math.ceil(preco)); // 11

// Função Math.round() arrendondamento normal
console.log("*** Números com round **");
console.log(Math.round(4.4));
console.log(Math.round(4.7)); 
let media = 7.6;
console.log(Math.round(media));

// Função Math.max() e Math.min()
console.log(Math.max(10, 20, 5, 30));
console.log(Math.min(10, 20, 5, 30));

// Função Math.pow() = potência
console.log(Math.pow(2, 3)); // 2³
let lado = 4;
let area = Math.pow(lado, 2);
console.log("Área do quadrado: " + area);

// Função Math.sqrt() = raiz quadrada
console.log(Math.sqrt(25));
console.log(Math.sqrt(9));