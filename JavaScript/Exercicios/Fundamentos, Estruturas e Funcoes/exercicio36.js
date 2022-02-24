// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação
// de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira
// se e somente se o valor do elemento for maior que 5.

function multVetor (vetor, escalar) {
    let novoVetor = []
    for (let i= 0; i < vetor.length; i++) {
        novoVetor.push(vetor[i]*escalar)
    }
    
    return novoVetor
}

function multEscalarMaiorQue5 (vetor, escalar) {
    let novoVetor = []
    if (escalar <= 5) {
        return 'Escalar não é maior que 5'
    } else {
        for (let i= 0; i < vetor.length; i++) {
            novoVetor.push(vetor[i]*escalar)
        }
        return novoVetor
    }
}

let V = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(multVetor(V, 2))
console.log(multEscalarMaiorQue5(V, 2))
console.log(multEscalarMaiorQue5(V, 6))