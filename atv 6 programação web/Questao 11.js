function gerarNumerosESomar(numeroInicial, numeroFinal) {
    console.log("Números no intervalo de " + numeroInicial + " a " + numeroFinal + ":");
    let soma = 0;
    if (numeroInicial <= numeroFinal) {
        for (let i = numeroInicial; i <= numeroFinal; i++) {
            console.log(i);
            soma += i;
        }
    } else {
        for (let i = numeroInicial; i >= numeroFinal; i--) {
            console.log(i);
            soma += i;
        }
    }
    return soma;
}

let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

let somaDosNumeros = gerarNumerosESomar(numero1, numero2);

console.log("A soma dos números é: " + somaDosNumeros);