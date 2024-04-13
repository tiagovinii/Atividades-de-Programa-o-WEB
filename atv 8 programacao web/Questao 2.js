function somaFracaoAteN(N) {
    
    if (N === 1) {
        return 1;
    }

    return 1/N + somaFracaoAteN(N - 1);
}

const resultado = somaFracaoAteN(5); 
console.log(resultado);