let quantidadeNumeros = parseInt(prompt("Digite a quantidade de números a serem inseridos:"));

if (isNaN(quantidadeNumeros) || quantidadeNumeros <= 0) {
    console.log("Erro: Por favor, insira um número inteiro positivo.");
} else {
    let menorValor = Infinity;
    let maiorValor = -Infinity;
    let soma = 0;

    for (let i = 0; i < quantidadeNumeros; i++) {
        let numero = parseFloat(prompt("Digite o número " + (i + 1) + ":"));
        if (!isNaN(numero) && numero >= 0 && numero <= 1000) {
            if (numero < menorValor) {
                menorValor = numero;
            }
            if (numero > maiorValor) {
                maiorValor = numero;
            }
            soma += numero;
        } else {
            console.log("Atenção: Valor inválido, será ignorado.");
        }
    }

    console.log("Menor valor: " + (menorValor !== Infinity ? menorValor : "N/A"));
    console.log("Maior valor: " + (maiorValor !== -Infinity ? maiorValor : "N/A"));
    console.log("Soma dos valores: " + soma);
}