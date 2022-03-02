// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse 
// array como um novo array:
const receberPrimeiroEUltimoElemento = array => [array[0], array[array.length - 1]]

console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]))
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))
