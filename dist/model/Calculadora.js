"use strict";
// 4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.
Object.defineProperty(exports, "__esModule", { value: true });
class Calculadora {
    constructor() {
        this.historico = [];
    }
    somar(a, b) {
        this.historico.push(`${a} + ${b} = ${a + b}`);
        return a + b;
    }
    multiplicar(a, b) {
        this.historico.push(`${a} * ${b} = ${a * b}`);
        return a * b;
    }
    dividir(a, b) {
        this.historico.push(`${a} / ${b} = ${a / b}`);
        return a / b;
    }
    diminuir(a, b) {
        this.historico.push(`${a} - ${b} = ${a - b}`);
        return a - b;
    }
    visualizarHistorico() {
        console.log(this.historico);
    }
}
exports.default = Calculadora;
