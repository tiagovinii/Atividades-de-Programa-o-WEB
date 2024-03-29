function calcularMediaAritmetica(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

let numeroDeNotas = parseInt(prompt("Digite o número de notas:"));

if (isNaN(numeroDeNotas) || numeroDeNotas <= 0) {
    console.log("Erro: Por favor, insira um número inteiro positivo.");
} else {

    let notas = [];

    for (let i = 0; i < numeroDeNotas; i++) {
        let nota = parseFloat(prompt("Digite a nota " + (i + 1) + ":"));
    
        if (isNaN(nota) || nota < 0) {
            console.log("Erro: Por favor, insira uma nota válida.");
            break;
        } else {
            notas.push(nota);
        }
    }

    if (notas.length === numeroDeNotas) {
        let media = calcularMediaAritmetica(notas);
        console.log("A média aritmética das notas é: " + media.toFixed(2));
    }
}