function aumentarPorcentagem(valor, porcentagem) {
    
    var aumento = (valor * porcentagem) / 100;
    var valorAumentado = valor + aumento;
    return valorAumentado;
}

console.log(aumentarPorcentagem(100, 10)); 
console.log(aumentarPorcentagem(50, 20)); 
console.log(aumentarPorcentagem(200, 25)); 