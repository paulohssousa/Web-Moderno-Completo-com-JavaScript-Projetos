// Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele
// mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo
// valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista
// string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá
// comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu
// recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).
// Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:
// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior
// pontuação aconteceu no sétimo jogo.)

function recordJogos (listaJogos) {
    let jogos = listaJogos.split(' ').map(Number) // '.map()' é chamado para cada elemento do array
    let maiorPontuacao = jogos[0]
    let recordPont = 0
    let piorPont = [jogos[0], 1]
    for (let i = 0; i < jogos.length; i++) {
        if (jogos[i] > maiorPontuacao) {
            maiorPontuacao = jogos[i]
            recordPont++
        } else if (jogos[i] < piorPont[0]) {
            piorPont[0] = jogos[i]
            piorPont[1] = i + 1
        }
    }
    return [recordPont, piorPont[1]]
}

let resultado = recordJogos("10 20 20 8 25 3 0 30 1")
console.log(resultado)