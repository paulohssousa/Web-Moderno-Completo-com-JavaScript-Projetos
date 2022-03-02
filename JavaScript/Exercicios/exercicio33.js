//  Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores
// deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o
// terceiro com valores decimais. Declarados os vetores, utilize a função de união concat() de duas
// maneiras diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do
// vetor resultado deverão aparecer no console.

let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['um', 'dois', 'tres', 'quatro']
let vetorDouble = [1.23, 2.64, 3.65, 4.79]

let novoVetor = vetorInteiro.concat(vetorDouble, vetorString)
console.log(`novoVetor: [${novoVetor}]`)

let novoVetor2 = vetorInteiro.concat(vetorDouble[0], vetorDouble[1], vetorDouble[2], vetorDouble[3],
                                     vetorString[0], vetorString[1], vetorString[2], vetorString[3])
console.log(`novoVetor2: [${novoVetor2}]`)