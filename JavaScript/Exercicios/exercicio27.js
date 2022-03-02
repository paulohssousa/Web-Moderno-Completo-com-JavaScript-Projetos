// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de
// duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará
// a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function crescimentoAnual (alturaA, alturaB, taxaA, taxaB) {
    let anos = 0
    if (alturaA < alturaB) {
        if (taxaA > taxaB){
            while (alturaA < alturaB) {
                alturaA += taxaA
                alturaB += taxaB
                anos++
            }
            console.log(`A criança A demorará ${anos} anos para ultrapassar a criança B`)
        } else {
            console.log("A criança 'A' não ultrapassará a criança 'B'")
        }
    } else if (alturaB < alturaA) {
        if (taxaB > taxaA){
            while (alturaB < alturaA) {
                alturaA += taxaA
                alturaB += taxaB
                anos++
            }
            console.log(`A criança B demorará ${anos} anos para ultrapassar a criança A`)

        } else {
            console.log("A criança 'B' não ultrapassará a criança 'A'")
            return
        }
    } else {
        console.log("As crianças tem o mesmo tamanho!")
    }
}

// criançaA = 102cm, tx de cresc = 6cm anuais, criançaB = 120cm, tx de cresc = 4cm anuais
crescimentoAnual(102, 120, 6, 4) 
// mesmo tamanho, txs diferentes
crescimentoAnual(120, 120, 6, 4) 
// criançaA = 108cm, tx de cresc = 3cm anuais, criançaB = 120cm, tx de cresc = 4cm anuais
crescimentoAnual(108, 120, 3, 4) 