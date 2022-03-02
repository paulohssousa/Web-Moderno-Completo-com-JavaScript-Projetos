// Crie uma função que receba um array de elementos e retorne um array somente com os 
// números presentes no array recebido como parâmetro

const filtrarNumeros = array => array.filter(x => typeof x === 'number')

console.log(filtrarNumeros(["Jacascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a","c"]))