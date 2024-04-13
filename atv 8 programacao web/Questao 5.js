function pell(n) {
    
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return 2 * pell(n - 1) + pell(n - 2);
}

const N = 5; 
const resultado = pell(N);
console.log(`O ${N}-ésimo número de Pell é: ${resultado}`);