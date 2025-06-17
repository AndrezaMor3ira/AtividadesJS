function RetornarValor(valor){
    convertevalor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

    console.log(`O valor é: ${convertevalor}`)
}