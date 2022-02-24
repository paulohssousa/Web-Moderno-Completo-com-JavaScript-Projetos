// Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de
// 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.

function conceito (vetorNotas) {
    for (let i = 0; i < vetorNotas.length; i++) {
        if (vetorNotas[i] >= 0.0 && vetorNotas[i] <= 4.9){
            console.log(`Conceito da disciplina ${i + 1} : D`)
        } else if (vetorNotas[i] >= 5.0 && vetorNotas[i] <= 6.9) {
            console.log(`Conceito da disciplina ${i + 1} : C`)
        } else if (vetorNotas[i] >= 7.0 && vetorNotas[i] <= 8.9) {
            console.log(`Conceito da disciplina ${i + 1} : B`)
        } else if (vetorNotas[i] >= 9.0 && vetorNotas[i] <= 10) {
            console.log(`Conceito da disciplina ${i + 1} : A`)
        } else {
            console.log (`Nota da disciplina ${i + 1} inválida!`)
        }
    }
}

let vetorN = [9.9, 2.4, 7.0, 5.6, -1, 15]
conceito(vetorN)