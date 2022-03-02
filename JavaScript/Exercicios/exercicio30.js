// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do
// vetor.

let v = [12, 13, 89, 11, 3, 97, 2, 4, 67, 14, 17]
let menor = v[0]
let maior = v[0]

for (let i = 0; i < v.length; i++) {    
    if (v[i] > maior) {
        maior = v[i]
    } else if (v [i] < menor) {
        menor = v[i]
    }
}

console.log(`menor valor: ${menor}\nmaior valor: ${maior}`)