// Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim
// sucessivamente. Faça a troca sem utilizar uma variável auxiliar.

function trocaElemento (vetorA, vetorB) {
    console.log('Antes da troca:')
    console.log(`vetorA: ${vetorA}`)
    console.log(`vetorB: ${vetorB}`)
    for (let i = 0; i < vetorA.length; i++) {
        [vetorA[i], vetorB[i]] = [vetorB[i], vetorA[i]]
    }
    console.log('\nDepois da troca:')
    console.log(`vetorA: ${vetorA}`)
    console.log(`vetorB: ${vetorB}`)
}

let v1 = [1, 2, 3, 4, 5]
let v2 = ['a', 'b', 'c', 'd', 'e']

trocaElemento(v1, v2)
