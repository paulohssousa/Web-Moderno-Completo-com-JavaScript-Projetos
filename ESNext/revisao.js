// let e const
{
    var a =2
    let b = 3
    console.log(b)
}
console.log(a)

// template string
const produto = 'iPad'
console.log(`${produto} é caro!`)

// destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)

// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = () => lexico1.bind({})
lexico1()
lexico2()

// parametros default
function log(texto = 'Node') {
    console.log(texto)
}
log()
log('Sou mais forte')

// operador rest
function total(... numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))

// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Liteal
const nome1 = 'Carla'
const pessoa = {
    nome1,
    ola() {
        return 'Oi gente'
    } 
}

console.log(pessoa.nome1, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au'
    }
}

console.log(new Cachorro().falar())