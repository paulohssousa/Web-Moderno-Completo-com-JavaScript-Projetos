// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

let vetor = [1, 6, 3, 78, 794, 65, 7, 13, 66] // vetor com 9 numeros
let pares = 0
let impares = 0
for (let i=0; i < vetor.length; i++) {
    if ( vetor[i]%2 == 0) {
        pares++
    } else {
        impares++
    }
}

console.log(`O vetor tem ${pares} pares e ${impares} ímpares`)