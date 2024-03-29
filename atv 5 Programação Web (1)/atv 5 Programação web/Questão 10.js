function calcularFatorial(numero) {
    
    if (numero < 0) {
        return "Não é possível calcular o fatorial de um número negativo.";
    }
    
    if (numero === 0) {
        return 1;
    }
    
    var resultado = 1;
    
    for (var i = 1; i <= numero; i++) {
        resultado *= i;
    }
    
    return resultado;
}

console.log(calcularFatorial(5)); 
console.log(calcularFatorial(0)); 
console.log(calcularFatorial(3)); 
console.log(calcularFatorial(10)); 
console.log(calcularFatorial(-5));