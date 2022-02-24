// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há
// nesse vetor e imprime a quantidade no console.

let vetor = [1, 6, 3, 78, -794, -65, 7, -13, 66, 0, -1] 
let negativos = 0

for (let i=0; i < vetor.length; i++) {
    if ( vetor[i] < 0) {
        negativos++
    }
}

console.log(`O vetor tem ${negativos} números negativos`)