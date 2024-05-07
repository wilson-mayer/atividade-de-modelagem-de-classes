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

class ContaCorrente {
  numeroConta: number;
  nomeCorrentista: string;
  saldo: number;

  constructor(numeroConta: number, nomeCorrentista: string, saldo: number = 0) {
    this.numeroConta = numeroConta;
    this.nomeCorrentista = nomeCorrentista;
    this.saldo = saldo;
  }

  alterarNome(novoNome: string) {
    this.nomeCorrentista = novoNome;
  }

  deposito(valor: number) {
    this.saldo += valor;
  }

  saque(valor: number): void {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente");
    } else {
      this.saldo -= valor;
      console.log("Saque realizado com sucesso");
    }
  }
}

export default ContaCorrente;
