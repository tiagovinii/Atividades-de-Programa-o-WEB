let populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB;

do {
    populacaoA = parseInt(prompt("Digite a população inicial do país A:"));
    taxaCrescimentoA = parseFloat(prompt("Digite a taxa de crescimento anual do país A (em porcentagem):")) / 100;
    populacaoB = parseInt(prompt("Digite a população inicial do país B:"));
    taxaCrescimentoB = parseFloat(prompt("Digite a taxa de crescimento anual do país B (em porcentagem):")) / 100;

    if (populacaoA <= 0 || taxaCrescimentoA <= 0 || populacaoB <= 0 || taxaCrescimentoB <= 0) {
        alert("Erro: As populações e as taxas de crescimento devem ser valores positivos.");
    }
} while (populacaoA <= 0 || taxaCrescimentoA <= 0 || populacaoB <= 0 || taxaCrescimentoB <= 0);

let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA *= (1 + taxaCrescimentoA);
    populacaoB *= (1 + taxaCrescimentoB);
    anos++;
}

console.log("Serão necessários " + anos + " anos para a população do país A ultrapassar ou igualar a população do país B.");