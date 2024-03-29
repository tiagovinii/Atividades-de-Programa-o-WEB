let numeroAtual = 0;
let proximoNumero = 1;

console.log("Sequência de Fibonacci até o valor ser maior que 500:");

while (numeroAtual <= 500) {
    console.log(numeroAtual);
    let temp = proximoNumero;
    proximoNumero = numeroAtual + proximoNumero;
    numeroAtual = temp;
}