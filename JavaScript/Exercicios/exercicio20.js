// Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de
// cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, 
// R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao
// solicitar R$18, o programa deve informar apenas a seguinte informação (note que não foram
// exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s)
// de R$ 1.

// versão 1
function contaNotas (dinheiro) {
    let notas = [[100, 0], [50, 0], [10, 0], [5, 0], [1, 0]]
    for (let i = 0; i < 5; i++) {
        notas[i][1] = Math.floor(dinheiro/notas[i][0])
        if (notas[i][1] > 0) {
            console.log(`${notas[i][1]} notas de R$${notas[i][0]}`)
        }
        dinheiro -= notas[i][0]*notas[i][1]
    }
}

console.log('função contaNotas')
console.log('R$463:')
contaNotas(463)
console.log('R$18:')
contaNotas(463)

// versão 2
function quaisNotas (valor) {
    let notas = 0
    if (valor >= 100) {
        notas = Math.floor(valor/100)
        console.log(`${notas} notas de R$100`)
        valor -= notas*100
    } 
    if (valor >= 50) {
        notas = Math.floor(valor/50)
        console.log(`${notas} notas de R$50`)
        valor -= notas*50
    } 
    if (valor >= 10) {
        notas = Math.floor(valor/10)
        console.log(`${notas} notas de R$10`)
        valor -= notas*10
    }
    if (valor >= 5) {
        notas = Math.floor(valor/5)
        console.log(`${notas} notas de R$5`)
        valor -= notas*5
    }
    if (valor >= 1) {
        notas = Math.floor(valor/1)
        console.log(`${notas} notas de R$1`)
    }
    if (valor < 0) {
        console.log('Valor inválido!')
    }
}

console.log('\nfunção quaisNotas')
console.log('R$463:')
quaisNotas(463)
console.log('R$18:')
quaisNotas(463)