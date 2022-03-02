// Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string 
// Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

const nomeDoMes = mes => {
    switch (mes) {
        case 1:
            return 'janeiro'
        case 2:
            return 'fevereiro'
        case 3:
            return 'marco'
        case 4:
            return 'abril'
        case 5:
            return 'maio'
        case 6:
            return 'junho'
        case 7:
            return 'julho'
        case 8:
            return 'agosto'
        case 9:
            return 'setembro'
        case 10:
            return 'outubro'
        case 11:
            return 'novembro'
        case 12:
            return 'dezembro'
        default:
            return 'valor invalido!'
    }
}

console.log(nomeDoMes(1))
console.log(nomeDoMes(4))
console.log(nomeDoMes(-1))