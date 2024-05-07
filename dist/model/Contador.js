"use strict";
// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.
Object.defineProperty(exports, "__esModule", { value: true });
class Contador {
    constructor(contador) {
        this.contador = 0;
    }
    zerar() {
        this.contador = 0;
    }
    incrementar() {
        this.contador++;
    }
    retornar() {
        return this.contador;
    }
}
exports.default = Contador;
