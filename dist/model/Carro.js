"use strict";
// 6. Implemente uma classe chamada Carro com as seguintes
// propriedades:
// a. Um veículo tem um certo consumo de combustível (medidos
// em km / litro) e uma certa quantidade de combustível no
// tanque.
// b. O consumo é especificado no construtor e o nível de
// combustível inicial é 0.
// c. Forneça um método andar() que simula o ato de dirigir o
// veículo por uma certa distância, reduzindo o nível de
// combustível no tanque de gasolina.
Object.defineProperty(exports, "__esModule", { value: true });
// d. Forneça um método obterGasolina(), que retorna o nível atual
// de combustível e forneça um método adicionarGasolina(),
// para abastecer o tanque.
// Exemplo:
// meuFusca = new Carro(15)
// meuFusca.adicionarGasolina(20)
// meuFusca.andar(100)
// meuFusca.obterGasolina()
class Carro {
    constructor(consumoPorLitro, nivelCombustivel = 0) {
        this.consumoPorLitro = consumoPorLitro;
        this.nivelCombustivel = nivelCombustivel;
    }
    andar(distancia) {
        const litrosNecessarios = distancia / this.consumoPorLitro;
        if (litrosNecessarios <= this.nivelCombustivel) {
            this.nivelCombustivel -= litrosNecessarios;
            console.log(`Distância percorrida: ${distancia} km`);
            console.log(`Litros gastos: ${litrosNecessarios.toFixed(2)} litros`);
            console.log(`Nível atual de combustível: ${this.nivelCombustivel.toFixed(2)} litros`);
        }
        else {
            console.log("Combustivel insuficiente para percorrer essa distância!");
        }
    }
    obterGasolina() {
        console.log(`Nível atual de combustível: ${this.nivelCombustivel.toFixed(2)} litros`);
    }
    adicionarGasolina(litros) {
        this.nivelCombustivel += litros;
        console.log(`Tanque abastecido com ${litros} litros`);
    }
}
exports.default = Carro;
