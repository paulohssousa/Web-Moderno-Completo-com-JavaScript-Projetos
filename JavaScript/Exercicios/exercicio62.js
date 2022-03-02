// Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na 
// função, será gerado um número aleatório de 1 a 10. A função deverá retornar se o 
// parâmetro de entrada foi igual ao número sorteado internamente. Se o valor fornecido 
// foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual, 
// retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.

function numAleatorioInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function funcaoDaSorte (numDaSorte) {
    let numSorteado = numAleatorioInt (0, 10)
    if (numDaSorte == numSorteado) {
        return `Parabéns! O número sorteado foi o ${numSorteado}`
    } else {
        return `Que pena! O número sorteado foi o ${numSorteado}`
    }
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(3))