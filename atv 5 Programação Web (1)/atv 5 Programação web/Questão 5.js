function verificarPrimo(numero) {
    
    if (numero <= 1) {
        return false;
    }
    
    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; 
        }
    }
    
    return true; 
}

console.log(verificarPrimo(7));
console.log(verificarPrimo(10)); 
console.log(verificarPrimo(23)); 
console.log(verificarPrimo(1));
console.log(verificarPrimo(0)); 