function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

while (true) {
    let numero = parseInt(prompt("Digite um número inteiro positivo menor que 16 para calcular o fatorial (ou digite um número negativo para sair):"));

    if (numero < 0) {
        console.log("Programa encerrado.");
        break;
    }

    if (numero < 0 || numero >= 16 || isNaN(numero)) {
        console.log("Erro: Por favor, insira um número inteiro positivo menor que 16.");
    } else {
    
        let resultado = calcularFatorial(numero);
        console.log(numero + "! = " + resultado);
    }
}