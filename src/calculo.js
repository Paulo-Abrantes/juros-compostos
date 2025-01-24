function calcularJurosCompostos(capital, taxa, tempo) {
    return capital * Math.pow((1 + taxa / 100), tempo);
}

// Exemplo de uso
const capitalInicial = 1000;
const taxaJuros = 5; // 5% ao mês
const tempoMeses = 12;

console.log(`Montante final: R$ ${calcularJurosCompostos(capitalInicial, taxaJuros, tempoMeses).toFixed(2)}`);

module.exports = calcularJurosCompostos;
// src/calculo.js

// src/calculo.js
function calcularJurosCompostos(principal, taxa, tempo) {
    return principal * Math.pow((1 + taxa / 100), tempo);
}  