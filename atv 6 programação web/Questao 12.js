function gerarTabuada(numero) {
    console.log("Tabuada de " + numero + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " X " + i + " = " + (numero * i));
    }
}

let numero = parseInt(prompt("Digite um número entre 1 e 10 para ver sua tabuada:"));

if (numero >= 1 && numero <= 10) {
    gerarTabuada(numero);
} else {
    console.log("Erro: O número deve estar entre 1 e 10.");
}