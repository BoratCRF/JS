const $num = 35

switch (true) {
    case ($num >=1 && $num <=10):
        console.log ("Número dentro do intervalo")
        break
    case ($num >=50 && $num <=100):
        console.log ("Número dentro do intervalo")
        break
    default:
        console.log("Número fora do intervalo")
        break    
}