const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)

// Desafio 1: Todos os alunos são bolsistas?
const todosBols = alunos.map(e => e.bolsista).reduce(function(acumulador, atual) {
    return acumulador && atual
})
if (todosBols) {
    console.log('Todos são bolsistas!')
} else {
    console.log('Nem todos são bolsistas!')
}

// Desafio 2: Algum aluno é bolsista?
const algumBols = alunos.map(e => e.bolsista).reduce(function(acumulador, atual) {
    return acumulador || atual
})
if (algumBols) {
    console.log('Algum aluno é bolsista!')
} else {
    console.log('Todos os alunos não são bolsistas!')
}

// reduce() por dentro
Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for(let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21))