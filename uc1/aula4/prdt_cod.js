const $cod = 1
// const $cod1 = "Alimento perecível"
// const $cod2 = "Bebida"
// const $cod3 = "limpeza"
// const $cod4 = "higiene pessoal"

switch ($cod) {
    case 1:
        console.log("O produto é do tipo: Alimento Preicível")
        break
    case 2:
        console.log("O produto é do tipo: Bebida")
        break
    case 3:
        console.log("O produto é do tipo: Limpeza")
        break
    case 4:
        console.log("O produto é do tipo: Higiene Pessoal")
        break
    default:
        console.log("Categoria inválida.")    
}