// Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que
// recebam como parâmetros um número n (número de termo), ​ a1​ (o primeiro termo) e ​ r​ (a razão)
// e escreva os ​ n​ termos , bem como a soma dos elementos.

function pa (n, a1, r) {
    let PA = []
    for (let i = 1; i <= n; i++) {
        PA.push(a1 + (i - 1)*r)
    }
    let soma = (a1 + PA[n - 1]) * n / 2
    console.log(`Progressão aritmética: ${PA}`)
    console.log(`Soma dos elementos: ${soma}`)
}

function pg (n, a1, r) {
    let PG = []
    for (let i = 1; i <= n; i++) {
        PG.push(a1 * r ** (i - 1))
    }
    let soma = 0
    if (r < 1) {
        soma = a1 * (1 - r ** n) / (1 - r)
    } else {
        soma = a1 * (r ** n - 1)/ (r - 1)
    }
    console.log(`Progresssão geométrica: ${PG}`)
    console.log(`Soma dos elementos: ${soma}`)
}

pa(7, 2, 2)
pg(5, 1, 3)