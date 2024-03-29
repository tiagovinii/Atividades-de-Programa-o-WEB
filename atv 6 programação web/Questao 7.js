let numeros = [];

for (let i = 0; i < 5; i++) {
    numeros.push(parseFloat(prompt("Digite o número " + (i + 1) + ":")));
}

let maiorNumero = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}

console.log("O maior número é: " + maiorNumero);