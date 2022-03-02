// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos 
// números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja,
// inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.

function intervalo(vetor) {
    let dentro = 0
    let fora = 0
    for (let i = 0; i < vetor.length; i++ ) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentro++
        } else {
            fora++
        }
    }
    console.log(`São ${dentro} números dentro do intervalo [10,20] e ${fora} fora`)
}

let v = [12, 13, 89, 11, 3, 97, 2, 4, 67, 14, 17]

intervalo(v)