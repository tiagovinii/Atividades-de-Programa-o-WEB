function tribonacci(n) {

    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }

    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}


const N = 6; 
const resultado = tribonacci(N);
console.log(`O ${N}-ésimo número da sequência de Tribonacci é: ${resultado}`);