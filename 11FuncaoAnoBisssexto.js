function calcularAnoBissexto(ano) {
  if (ano <= 0) {
    return false;
  } else if (ano % 400 == 0) {
    console.log("O ano é bissexto!");
    return true;
  } else if (ano % 100 == 0) {
    return false;
  } else if (ano % 4 == 0) {
    console.log("O ano é bissexto!");
    return true;
  } else {
    return false;
  }
}
