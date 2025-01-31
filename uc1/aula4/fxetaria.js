const idade = 42

// switch (true) {
    
//     case (idade >=0 && idade <=12):
//         console.log ("Criança")
//         break
//     case (idade >=13 && idade <=17):
//         console.log ("Adolescente")
//         break
//     case (idade >=18 && idade <=65):
//         console.log ("Adulto")
//         break
//     case (idade >=66):
//         console.log ("Idoso")
//         break           
//     default:
//         console.log ("Idade inválida")
// }

if (idade >= 0 && idade <=12) {
    console.log ("Criança")
} else if (idade >= 13 && idade <= 17) {
    console.log ("Adolescente")
} else if (idade >= 18 && idade <= 65) {
    console.log ("Adulto")
} else if (idade >= 66) {
    console.log ("Idoso")
} else {
    console.log ("Idade inválida")
} 