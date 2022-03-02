// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada 
// estudante estarão num array, conforme exemplo abaixo. Você deverá calcular a média da 
// nota de cada aluno e retornar um objeto com os atributos nome e media, que indica o 
// aluno que teve o melhor desempenho nas notas.

const receberMelhorEstudante = estudantes => {
    let entradas = Object.entries(estudantes)
    let mediaPorAlunos = entradas.map(notas => [notas[0], notas[1].reduce((acumulador, atual) => acumulador + atual) / notas[1].length])
    let melhorAluno = mediaPorAlunos.reduce((aluno, atual) => {
        if (aluno[1] > atual[1]) {
            return aluno
        } else {
            return atual
        }
    } )
    return { nome: melhorAluno[0], media: melhorAluno[1]}
}

const classeDeAula = {
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}

console.log(receberMelhorEstudante(classeDeAula))