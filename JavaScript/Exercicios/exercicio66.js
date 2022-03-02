// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente 
// com as consoantes, ou seja, sem as vogais.

const removerVogais = (str) => str.replace(/[aeiou]/g,'') // olhar espressoes regulares

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))