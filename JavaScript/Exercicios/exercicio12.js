// Faça um algoritmo que calcule o fatorial de um número.

function fatorial (x) {
    let fator = 1
    while (x > 0) {
        fator *= x
        x--
    }
    return fator
}

function fatRecursivo (x) {
    if (x === 0) {
        return 1
    } else {
        return x * fatRecursivo (x -1)
    }
}

console.log(fatorial(0))
console.log(fatorial(1))
console.log(fatorial(4))
console.log(fatorial(5))
console.log(fatorial(15))

console.log(fatRecursivo(0))
console.log(fatRecursivo(1))
console.log(fatRecursivo(4))
console.log(fatRecursivo(5))
console.log(fatRecursivo(15))

