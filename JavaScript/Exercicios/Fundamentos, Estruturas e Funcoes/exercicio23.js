// Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada
// do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o
// código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for
// maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código 
// lido seja negativo.

function randomZeroDez () {
    let num = +(Math.random() * 11).toFixed(2)
    if (num > 10) {
        num = 10
    }
    return num
}

function maiorNota (aluno) {
    if (aluno.nota2 >= aluno.nota1 && aluno.nota2 >= aluno.nota3) {
        [aluno.nota1, aluno.nota2] = [aluno.nota2, aluno.nota1]
        return aluno
    } else if (aluno.nota3 >= aluno.nota1 && aluno.nota3 >= aluno.nota2){
        [aluno.nota1, aluno.nota3] = [aluno.nota3, aluno.nota1]
        return aluno
    } else {
        return aluno
    }
}

function novoAluno () {
    let aluno = {
        nota1: randomZeroDez(),
        nota2: randomZeroDez(),
        nota3: randomZeroDez()
    }
    return aluno
}

let turma = []
let numAlunos = 10

for (let i = 0; i < numAlunos; i++){
    turma[i] = new novoAluno()
}

let cod = numAlunos - 1
let media = 0

while (cod >= 0) {
    turma[cod] = maiorNota(turma[cod])
    console.log(`O aluno com código: ${cod}`)
    console.log(`Nota 1: ${turma[cod].nota1}`)
    console.log(`Nota 2: ${turma[cod].nota2}`)
    console.log(`Nota 3: ${turma[cod].nota3}`)
    media = ((turma[cod].nota1 * 4) + (turma[cod].nota2 * 3) + (turma[cod].nota3 * 3)) / 10
    console.log(`Média ponderada: ${media.toFixed(2)}`)
    if ( media >= 5) {
        console.log('APROVADO')
    } else {
        console.log('REPROVADO')
    }
    cod--
}