//Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. 
// Isósceles: Dois lados iguais.
// Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne 
// sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair
// as condições matemáticas de existência de um triângulo).

function classiTriangulo (x, y, z) {
    if (x === y && x === z) {
        console.log("O triângulo é equilátero")
    } else if (x === y || x === z || y === z) {
        console.log("O triângulo é isósceles")
    } else {
        console.log("O triângulo é escaleno")
    }
}

classiTriangulo ( 3, 3, 3) // equilátero
classiTriangulo ( 3, 3, 1) // isósceles
classiTriangulo ( 3, 2, 1) // escaleno