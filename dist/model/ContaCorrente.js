"use strict";
// 3. Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo
// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.
Object.defineProperty(exports, "__esModule", { value: true });
class ContaCorrente {
    constructor(numeroConta, nomeCorrentista, saldo = 0) {
        this.numeroConta = numeroConta;
        this.nomeCorrentista = nomeCorrentista;
        this.saldo = saldo;
    }
    alterarNome(novoNome) {
        this.nomeCorrentista = novoNome;
    }
    deposito(valor) {
        this.saldo += valor;
    }
    saque(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        }
        else {
            this.saldo -= valor;
            console.log("Saque realizado com sucesso");
        }
    }
}
exports.default = ContaCorrente;
