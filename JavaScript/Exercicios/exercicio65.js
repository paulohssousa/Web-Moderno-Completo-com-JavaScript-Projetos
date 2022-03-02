// A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando 
// uma função para identificar palavras semelhantes. Escreva uma função que recebe como 
// primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings. A função 
// deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.

function buscarPalavrasSemelhantes (palavra, arrStr) {
    let resultado = arrStr.filter(e => e.includes(palavra))
    return resultado
}

let str1 = ["programação", "mobile", "profissional"]
let str2 = ["javascript", "java", "c++"]

console.log(buscarPalavrasSemelhantes("pro", str1))
console.log(buscarPalavrasSemelhantes("python", str1))