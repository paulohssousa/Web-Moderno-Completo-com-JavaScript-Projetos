//  Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a
// tabela abaixo:
// Plano Aumento
//      __________
//     | A  | 10% |
//     | B  | 15% |
//     | C  | 20% |
//     |____|_____|
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e
// imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o
// plano é inválido

const planoAumento = function (plano, salario) {
    switch (plano) {
        case 'A':
            console.log(`Seu novo salário é: R$${salario*1.1}`)
            break
        case 'B':
            console.log(`Seu novo salário é: R$${salario*1.15}`)
            break
        case 'C':
            console.log(`Seu novo salário é: R$${salario*1.2}`)
            break
        default:
            console.log('Plano inválido!')
    }
}

planoAumento('A', 4200)
planoAumento('B', 4200)
planoAumento('C', 4200)
planoAumento('D', 4200)