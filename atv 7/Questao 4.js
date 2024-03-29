function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

let numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial:"));

if (isNaN(numero) || numero < 0) {
    console.log("Erro: Por favor, insira um número inteiro não negativo.");
} else {
    let resultado = calcularFatorial(numero);
    console.log(numero + "! = " + resultado);
}