let numeros = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
    numeros.push(parseFloat(prompt("Digite o número " + (i + 1) + ":")));
    soma += numeros[i];
}

let media = soma / 5;

console.log("A soma dos números é: " + soma);
console.log("A média dos números é: " + media);