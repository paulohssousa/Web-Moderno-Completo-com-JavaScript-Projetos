// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, 
// em que cada elemento é um array formado pelos pares chave/valor que corresponde a um 
// atributo do objeto. Observe os exemplos abaixo para um melhor entendimento:

const objetoParaArray = objeto => Object.entries(objeto)

let obj1 = {
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}

let obj2 = {
    codigo: 11111,
    preco: 12000
}

console.log(objetoParaArray(obj1))
console.log(objetoParaArray(obj2))