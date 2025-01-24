const calcularJurosCompostos = require("../src/calculo");

test("Cálculo de juros compostos com valores positivos", () => {
    expect(calcularJurosCompostos(1000, 5, 12)).toBeCloseTo(1795.86, 2);
});

test("Cálculo de juros compostos com taxa zero", () => {
    expect(calcularJurosCompostos(1000, 0, 12)).toBe(1000);
});

test("Cálculo de juros compostos com tempo zero", () => {
    expect(calcularJurosCompostos(1000, 5, 0)).toBe(1000);
});
// tests/calculo.test.js
const { calcularJurosCompostos } = require('../src/calculo');

describe('Testes para juros compostos', () => {
it('Deve calcular juros compostos corretamente com valores positivos', () => {
    expect(calcularJurosCompostos(1000, 0.05, 10)).toBeCloseTo(1628.89463, 5);
});

it('Deve retornar 0 se o valor principal for 0', () => {
    expect(calcularJurosCompostos(0, 0.05, 10)).toBe(0);});
it('Deve retornar um valor negativo para um juros negativo', () => {
    expect(calcularJurosCompostos(1000, -0.05, 10)).toBeCloseTo(598.736939, 5);});
});
