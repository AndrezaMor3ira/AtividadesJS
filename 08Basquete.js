let stringPontuacoes = "10, 20, 20, 8, 25, 3, 0, 30, 1"

function ConferePontuacao(stringPontuacoes){
    let pontuacoes = stringPontuacoes.split(", ")
    let quebrouRecorde = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for(let i = 1; i < pontuacoes.length; i++){
        if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)){
            maiorPontuacao = pontuacoes[i]
            quebrouRecorde++
        }else if(parseInt(pontuacoes[i]) < parseInt(menorPontuacao)){
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1
        }
    }

    return [quebrouRecorde, piorJogo]
} 

console.log(ConferePontuacao(stringPontuacoes))