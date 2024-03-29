let nota;

do {
    nota = parseFloat(prompt("Digite uma nota entre zero e dez:"));

    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("Valor inválido. Por favor, digite uma nota válida.");
    } else {
        alert("Nota válida: " + nota);
    }
} while (isNaN(nota) || nota < 0 || nota > 10);