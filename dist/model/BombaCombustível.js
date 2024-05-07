"use strict";
// 5. Faça um programa completo utilizando classes e métodos que:
// a. Possua uma classe chamada BombaCombustivel, com no
// mínimo esses atributos:
// i. tipoCombustivel.
// ii. valorLitro
Object.defineProperty(exports, "__esModule", { value: true });
// iii. quantidadeCombustivel
// b. Possua no mínimo esses métodos:
// i. abastecerPorValor() – método onde é informado o
// valor a ser abastecido e mostra a quantidade de litros
// que foi colocada no veículo
// ii. abastecerPorLitro() – método onde é informado a
// quantidade em litros de combustível e mostra o valor a
// ser pago pelo cliente.
// iii. alterarValor() – altera o valor do litro do combustível.
// iv. alterarCombustivel() – altera o tipo do combustível.
// v. alterarQuantidadeCombustivel() – altera a
// quantidade de combustível restante na bomba.
// OBS: Sempre que acontecer um abastecimento é necessário
// atualizar a quantidade de combustível total na bomba. Não deve ser
// possível abastecer se não tiver gasolina suficiente na bomba.
class BombaCombustivel {
    constructor(tipoCombustivel, valorLitro, quantidadeCombustivel) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }
    abastecerPorValor(valor) {
        const litrosAbastecidos = valor / this.valorLitro;
        if (litrosAbastecidos <= this.quantidadeCombustivel) {
            console.log(`Abastecidos ${litrosAbastecidos.toFixed(2)} litros de ${this.tipoCombustivel}`);
            this.quantidadeCombustivel -= litrosAbastecidos;
        }
        else {
            console.log("Não há combustível suficiente na bomba.");
        }
    }
    abastecerPorLitro(litros) {
        const valorPagar = litros * this.valorLitro;
        if (litros <= this.quantidadeCombustivel) {
            console.log(`Valor a ser pago: R$ ${valorPagar.toFixed(2)}`);
            this.quantidadeCombustivel -= litros;
        }
        else {
            console.log("Não há combustível suficiente na bomba para a quantidade solicitada de combustível.");
        }
    }
    alterarValor(novoValor) {
        this.valorLitro = novoValor;
    }
    alterarCombustivel(novoCombustivel) {
        this.tipoCombustivel = novoCombustivel;
    }
    alterarQuantidadeCombustivel(novaQuantidade) {
        this.quantidadeCombustivel = novaQuantidade;
    }
}
exports.default = BombaCombustivel;
