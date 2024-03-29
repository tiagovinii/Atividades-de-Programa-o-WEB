function encontrarPrimosAteN(N) {

    let primos = new Array(N + 1).fill(true);
    primos[0] = false;
    primos[1] = false;

    let divisoes = 0;

    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (primos[i]) {
            for (let j = i * i; j <= N; j += i) {
                primos[j] = false;
                divisoes++;
            }
        }
    }

    let primosEncontrados = [];

    for (let i = 0; i <= N; i++) {
        if (primos[i]) {
            primosEncontrados.push(i);
        }
    }

    return { primosEncontrados, divisoes };
}

let N = parseInt(prompt("Digite um número inteiro para encontrar todos os primos até este número:"));

let { primosEncontrados, divisoes } = encontrarPrimosAteN(N);

console.log("Números primos até " + N + ": " + primosEncontrados.join(", "));
console.log("Número total de divisões realizadas: " + divisoes);