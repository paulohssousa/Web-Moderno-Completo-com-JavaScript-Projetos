// Crie uma função que recebe um array de números e retorna o segundo maior número presente 
// nesse array.

const segundoMaior = arrayNum => arrayNum.sort((a, b) => a - b)[arrayNum.length - 2]

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))