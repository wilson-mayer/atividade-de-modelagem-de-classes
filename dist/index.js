"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const msg = "hello world !!!";
//EXERCICIO 01
const Contador_1 = __importDefault(require("./model/Contador"));
console.log(msg);
const novoContador = new Contador_1.default(1);
console.log(novoContador.retornar());
novoContador.incrementar();
console.log(novoContador.retornar());
novoContador.zerar();
console.log(novoContador.retornar());
//EXERCICIO 02
const Bola_1 = __importDefault(require("./model/Bola"));
const novaBola = new Bola_1.default("vermelha", 50, "couro");
novaBola.mostrarCor();
novaBola.trocarCor("amarelo");
novaBola.mostrarCor();
//EXERCICIO 03
const ContaCorrente_1 = __importDefault(require("./model/ContaCorrente"));
const novaContaCorrente = new ContaCorrente_1.default(123456789, "Jorge");
console.log(novaContaCorrente);
novaContaCorrente.alterarNome("José");
console.log(`Nome alterado para: ${novaContaCorrente.nomeCorrentista}`);
novaContaCorrente.deposito(556);
console.log(`Depósito realizado com sucesso! saldo atual de: ${novaContaCorrente.saldo}`);
novaContaCorrente.saque(256);
console.log(`Saldo atual de: ${novaContaCorrente.saldo}`);
//EXERCICIO 04
const Calculadora_1 = __importDefault(require("./model/Calculadora"));
const novaCalculadora = new Calculadora_1.default();
novaCalculadora.visualizarHistorico();
novaCalculadora.multiplicar(5, 6);
novaCalculadora.somar(8, 9);
novaCalculadora.dividir(45, 5);
novaCalculadora.diminuir(87, 50);
novaCalculadora.visualizarHistorico();
//EXERCICIO 05
const BombaCombust_vel_1 = __importDefault(require("./model/BombaCombust\u00EDvel"));
const novaBombaCombustivel = new BombaCombust_vel_1.default("gasolina", 5.9, 46);
console.log(novaBombaCombustivel);
novaBombaCombustivel.abastecerPorValor(100);
console.log(`Quantidade de combustível restante na bomba: ${novaBombaCombustivel.quantidadeCombustivel.toFixed(2)} litros`);
novaBombaCombustivel.abastecerPorLitro(50);
console.log(`Quantidade de combustível restante na bomba: ${novaBombaCombustivel.quantidadeCombustivel.toFixed(2)} litros`);
novaBombaCombustivel.alterarValor(6.0);
console.log(`valor do combustível alterado para R$: ${novaBombaCombustivel.valorLitro} por litro`);
novaBombaCombustivel.alterarCombustivel("etanol");
console.log(`combustível alterado para R$: ${novaBombaCombustivel.tipoCombustivel}`);
novaBombaCombustivel.alterarQuantidadeCombustivel(21);
console.log(`Quantidade de combustível alterado na bomba: ${novaBombaCombustivel.quantidadeCombustivel.toFixed(2)} litros`);
//EXERCICIO 06
const Carro_1 = __importDefault(require("./model/Carro"));
const novoCarro = new Carro_1.default(12);
console.log(novoCarro);
novoCarro.andar(100);
novoCarro.adicionarGasolina(25);
novoCarro.obterGasolina();
