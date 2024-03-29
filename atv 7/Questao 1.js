function calcularPotencia(base, expoente) {
    let resultado = 1;
    for (let i = 1; i <= expoente; i++) {
        resultado *= base;
    }
    return resultado;
}

let base = parseFloat(prompt("Digite a base:"));
let expoente = parseInt(prompt("Digite o expoente:"));

if (expoente < 0) {
    console.log("Erro: O programa não suporta cálculo de potência com expoente negativo.");
} else {
    
    let potencia = calcularPotencia(base, expoente);
    console.log(base + " elevado a " + expoente + " é igual a " + potencia);
}