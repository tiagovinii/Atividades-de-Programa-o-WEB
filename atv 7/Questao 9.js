function verificarPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return "O número não é primo. É divisível por " + i + ".";
        }
    }
    return "O número é primo.";
}

let numero = parseInt(prompt("Digite um número inteiro para verificar se é primo:"));

console.log(verificarPrimo(numero));