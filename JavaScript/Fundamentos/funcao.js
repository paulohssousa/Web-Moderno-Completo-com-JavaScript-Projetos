// funcao sem retor
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //NaN
imprimirSoma(2, 6, 7, 8, 9) // ignora os outros valores
imprimirSoma() //NaN

// funcao com retorno
function soma(a, b = 1) {
    return a+ b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) // NaN

// armazenando uma funcao em uma variavel
const imprimirSoma2 = function (a, b) {
    console.log(a + b)
}

imprimirSoma2(2, 3)

// armazenando um funcao arrow em uma variavel
const soma2 = (a, b) => {
    return a + b
}
console.log(soma2(2, 3))

// retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))