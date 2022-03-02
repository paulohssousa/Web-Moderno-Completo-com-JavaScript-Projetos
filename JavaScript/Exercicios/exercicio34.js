// Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou 
// False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam
// contidos em ambas palavras.

function stringsIguais (palavraA, palavraB) {
    palavraA = palavraA.toUpperCase()
    palavraB = palavraB.toUpperCase()
    if (palavraA == palavraB) {
        return true
    } else {
        return false
    }
}

console.log(stringsIguais('bola', 'Bola'))
console.log(stringsIguais('coisa', 'estranho'))
console.log(stringsIguais('lápis', 'LáPiS'))
console.log(stringsIguais('cerveja', 'cervej'))