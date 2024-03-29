let numerosPares = 0;
let numerosImpares = 0;

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Digite o número " + (i + 1) + ":"));
    if (numero % 2 === 0) {
        numerosPares++;
    } else {
        numerosImpares++;
    }
}

console.log("Quantidade de números pares: " + numerosPares);
console.log("Quantidade de números ímpares: " + numerosImpares);