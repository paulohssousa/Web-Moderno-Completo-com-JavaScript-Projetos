// WHILE

function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')

// DO WHILE

function getInteiroAleatorioEntre2 (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao2 // nao precisa de valor inicial para o 'do while'

do {
    opcao2 = getInteiroAleatorioEntre2 (-1, 10)
    console.log(`Opção escolhida foi ${opcao2}.`)
} while (opcao2 != -1)

console.log('Até a próxima!')