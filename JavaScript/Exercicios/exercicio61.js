// Criar uma função que receba um array de números e retorne o menor número desse array.

const menorNumero = array => array.reduce((menor, atual) => {
    if (atual < menor) {
        menor = atual
    }
    return menor
})

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))