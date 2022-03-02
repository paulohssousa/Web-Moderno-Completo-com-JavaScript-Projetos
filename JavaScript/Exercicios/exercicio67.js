// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que 
// corresponde ao objeto recebido como parâmetro, porém com as posições das chaves e 
// valores invertidas:

const inverter = obj => Object.fromEntries(Object.entries(obj).map(([chave, valor]) => [valor, chave] ))

// outra maneira
// const inverter = obj => {
//     let e = Object.entries(obj)
//     console.log(e)
//     e = e.map(([chave, valor]) => [valor, chave])
//     console.log(e)
//     return Object.fromEntries(e)
// }
let obj1 = { a: 1, b: 2, c: 3}

console.log(inverter(obj1))
