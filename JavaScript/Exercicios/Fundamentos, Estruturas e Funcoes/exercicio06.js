// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e
// tempo de aplicação. A primeira função retornará o montante da aplicação financeira
// sob o regime de juros simples e a segunda retornará o valor da aplicação sob o
// regime de juros compostos.

// função para deixar no formato R$XX,XX
function din (x) {
    // converte um 'number' para uma 'string', arredondado para a casa decimal informada
    let valor = x.toFixed(2)
    let realCentavo = valor.split('.') // retorna um array com as partes splitadas
    console.log(`R$${realCentavo[0]},${realCentavo[1]}`)
}

let juroSimples = (cap, tx, temp) => cap + cap * tx * temp

let jurosComposto = (cap, tx, temp) => cap * (1 + tx) ** temp

let js = juroSimples(1200, 0.02, 14) // 1200 reais , taxa de 2% ao mês, por 14 meses
let jc = jurosComposto(620, 0.015, 24) // 620 reais, taxa de 1.5% ao mês, por 24 meses

din(js)

din(jc)
