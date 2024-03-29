function gerarNumerosNoIntervalo(numeroInicial, numeroFinal) {
    console.log("Números no intervalo de " + numeroInicial + " a " + numeroFinal + ":");
    if (numeroInicial <= numeroFinal) {
        for (let i = numeroInicial; i <= numeroFinal; i++) {
            console.log(i);
        }
    } else {
        for (let i = numeroInicial; i >= numeroFinal; i--) {
            console.log(i);
        }
    }
}

let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

gerarNumerosNoIntervalo(numero1, numero2);