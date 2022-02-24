// Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe
// como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o
// valor da anuidade. A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros
// (sob o regime de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês
// escolhido.

// função para deixar no formato R$XX,XX
function din (x) {
    // converte um 'number' para uma 'string', arredondado para a casa decimal informada
    let valor = x.toFixed(2)
    let realCentavo = valor.split('.') // retorna um array com as partes splitadas
    return(`R$${realCentavo[0]},${realCentavo[1]}`)
}

// se pago em janeiro n cobra juros, por isso 'mes - 1'
let anuidadeAssoc = (mes, valor) => din(valor * (1 + 0.05) ** (mes - 1))

console.log(`Pago em janeiro: ${anuidadeAssoc(1, 800)}`)
console.log(`Pago em junho: ${anuidadeAssoc(6, 800)}`)
console.log(`Pago em setembro: ${anuidadeAssoc(9, 800)}`)
console.log(`Pago em dezembro: ${anuidadeAssoc(12, 800)}`)
