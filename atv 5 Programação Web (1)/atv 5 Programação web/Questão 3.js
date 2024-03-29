function calcularMedia(arrayDeNumeros) {
    
    if (arrayDeNumeros.length === 0) {
        return 0;
    }
    
    var soma = 0;
    
    for (var i = 0; i < arrayDeNumeros.length; i++) {
        soma += arrayDeNumeros[i];
    }
    
    var media = soma / arrayDeNumeros.length;
    return media;
}

var numeros1 = [5, 10, 15, 20];
console.log("Média 1:", calcularMedia(numeros1)); 

var numeros2 = [2, 4, 6, 8, 10];
console.log("Média 2:", calcularMedia(numeros2)); 

var numeros3 = [];
console.log("Média 3:", calcularMedia(numeros3)); 