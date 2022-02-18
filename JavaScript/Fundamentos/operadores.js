//// atribuição
console.log('\nATRIBUICAO')

const a = 7
let b = 3

b += a  // b = b + a
console.log(b)

b -= 4  // b = b - 4
console.log(b)

b *= 2  // b = b * 2
console.log(b)

b /= 2  // b = b / 2
console.log(b)

b %= 2  // b = b % 2
console.log(b)

//// destructuring  ( novo recurso do ES2015)
console.log('\nDESTRUCTURING')

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero:1000
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

// destructuring array
console.log('\nDESTRUCTURING ARRAY')

const [c] = [10]
console.log(c)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

// destructuring objeto
console.log('\nDESTRUCTURING OBJETO')

function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))
// console.log(rand())  // erro!

//destructing array
console.log('\nDESTRUCTURING ARRAY')

function rand2([min2 = 0, max2 = 1000]) {
    if (min2 > max2) [min2, max2] = [max2, min2]
    const valor2 = Math.random() * (max2 - min2) + min2
    return Math.floor(valor2)
}

console.log(rand2([50, 40]))
console.log(rand2([992]))
console.log(rand2([, 10]))
console.log(rand2([]))
// console.log(rand()) // erro!

//// aritméticos
console.log('\nARITMETICOS')

const [e, f, g, h] = [3, 4, 1, 15]

const soma =  e + f + g + h
const subtracao = e - f
const multiplicacao = g * h
const divisao = h / e
const modulo = e % 2

console.log(soma, subtracao, multiplicacao, divisao, modulo)

//// relacionais
console.log('\nRELACIONAIS')

console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)

//// lógicos
console.log('\nLOGICOS')

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2  // or
    const comprarTv50 = trabalho1 && trabalho2  // and
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2  // xor
    const manterSaudavel = !comprarSorvete  // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}  // recurso novo
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

//// unários
console.log('\nUNARIOS')

let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)

//// ternário
console.log('\nTERNARIO')

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

