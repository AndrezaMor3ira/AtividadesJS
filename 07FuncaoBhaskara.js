function ResolveBhaskara (valora, valorb, valorc){
    let resultados = []
    delta = b**2 - (4 * a * c)

    if(delta < 0){
        return "Delta é negativo"
    }else{
        x1 = (-b + delta)/(2 * a)
        x2 = (-b - delta)/(2 * a)
    }
    resultados.push(x1)
    resultados.push(x2)
    return resultados
}