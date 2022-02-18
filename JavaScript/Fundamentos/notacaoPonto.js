console.log(Math.ceil(6.1))  // o uso de ponto '.' para acessar o método de Math

const obj1 = {}
obj1.nome = 'Bola'

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)  // atributo
console.log(obj3.nome)  // atributo
obj3.exec()  // função