"use strict";
// 2. Crie uma classe que modele uma bola:
// a. Atributos
// i. Cor
// ii. Circunferência
// iii. Material
// b. Métodos
// i. Trocar Cor
// ii. Mostrar cor
Object.defineProperty(exports, "__esModule", { value: true });
class Bola {
    constructor(corParametro, circunferenciaParametro, materialParametro) {
        this.cor = corParametro;
        this.circunferencia = circunferenciaParametro;
        this.material = materialParametro;
    }
    trocarCor(corParametro) {
        this.cor = corParametro;
    }
    mostrarCor() {
        console.log(this.cor);
    }
}
exports.default = Bola;
