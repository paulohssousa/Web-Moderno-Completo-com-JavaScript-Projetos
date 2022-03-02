// Elabore uma função que receba um array de números e retorne um array que tenha todos os 
// números que são pares e que também tenham índices pares.

const ePar = (x) => x % 2 == 0

const receberSomenteOsParesIndicesPares = array => array.filter((x, index) => ePar(x) && ePar(index))

// outra maneira
// const receberSomenteOsParesIndicesPares = array => {
//     let novoArray = []
//     for ( let i = 0; i < array.length; i++) {
//         if (i % 2 == 0) {
//             novoArray.push(array[i])
//         }
//     }
//     return novoArray.filter(ePar)
// }

console.log(receberSomenteOsParesIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesIndicesPares([10, 70, 22, 43]))