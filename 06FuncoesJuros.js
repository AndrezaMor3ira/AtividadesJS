function JurosSimples (capital, taxa, tempo){
    montante = capital * taxa * tempo

    console.log(`O valor em juros simples é: ${montante}`)
}

function JurosCompostos(capital, taxa, tempo){
    montante = capital * (1 + taxa)**tempo

    console.log(`O valor em juros compostos é: ${montante}`)
}