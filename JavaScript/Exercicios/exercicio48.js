// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais 
// a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.

const multiplicar = (x, y) => {
    let mult = 0
    for (let i = 0; i < y; i++) {
        mult += x
    }
    return mult
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))