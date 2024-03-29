function verificarPalindromo(palavra) {
 
    var palavraFormatada = palavra.toLowerCase().replace(/\s/g, '');
  
    var palavraInvertida = palavraFormatada.split('').reverse().join('');
  
    return palavraFormatada === palavraInvertida;
}

console.log(verificarPalindromo("arara")); 
console.log(verificarPalindromo("reviver")); 
console.log(verificarPalindromo("banana")); 
console.log(verificarPalindromo("Ame a ema")); 