function IdentificaoDeTriangulos(ladoa, ladob, ladoc){
    if(ladoa == ladob && ladoc == ladoa){
        console.log('Equilátero')
    }else if(ladoa == ladob || ladoa == ladoc || ladob == ladoc){
        console.log('Isósceles')
    }else{
        console.log('Escaleno')
    }
}