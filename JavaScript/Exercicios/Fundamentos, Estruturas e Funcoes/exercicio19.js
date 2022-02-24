// O cardápio de uma lanchonete é o seguinte:
// Código   Descrição do Produto             Preço
//  100      Cachorro Quente ...............R$ 3,00
//  200      Hambúrguer Simples ............R$ 4,00
//  300      Cheeseburguer .................R$ 5,50
//  400      Bauru .........................R$ 7,50
//  500      Refrigerante ..................R$ 3,50
//  600      Suco ..........................R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule 
// o valora ser pago por aquele lanche. Considere que a cada execução somente será calculado um
// item. Use o comando switch. Crie um caso default para produto não existente.

// função para deixar no formato R$XX,XX
function din (x) {
    // converte um 'number' para uma 'string', arrendado para a casa decimal informada
    let valor = x.toFixed(2) 
    let realCentavo = valor.split('.') // retorna um array com as partes splitadas
    return `R$${realCentavo[0]},${realCentavo[1]}`
}

const valorConta = function (codigo, quantidade) {
    switch (codigo){
        case 100:
            console.log('O lanche vai custar: ' + din(3.00*quantidade))
            break
        case 200:
            console.log('O lanche vai custar: ' + din(4.00*quantidade))
            break
        case 300:
            console.log('O lanche vai custar: ' + din(5.50*quantidade))
            break
        case 400:
            console.log('O lanche vai custar: ' + din(7.50*quantidade))
            break
        case 500:
            console.log('O lanche vai custar: ' + din(3.50*quantidade))
            break
        case 600:
            console.log('O lanche vai custar: ' + din(2.80*quantidade))
            break
        default:
            console.log('Código do lanche inexistente!')
    }
}

valorConta(100, 5)
valorConta(200, 3)
valorConta(300, 6)
valorConta(400, 1)
valorConta(500, 7)
valorConta(600, 3)
valorConta(700, 2)