// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

let v = [12, 13, 89, 11, 3, 97, 2, 4, 67, 14, 17]

let soma = 0

for (let i = 0; i < v.length; i++) {
    soma += v[i]
}

let media = soma/v.length

console.log(`A média aritmética dos valores do vetor é ${media}`)