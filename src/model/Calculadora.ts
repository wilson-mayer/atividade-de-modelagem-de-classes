// 4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.

class Calculadora {
  historico: string[];

  constructor() {
    this.historico = [];
  }

  somar(a: number, b: number) {
    this.historico.push(`${a} + ${b} = ${a + b}`);
    return a + b;
  }

  multiplicar(a: number, b: number) {
    this.historico.push(`${a} * ${b} = ${a * b}`);
    return a * b;
  }
  dividir(a: number, b: number) {
    this.historico.push(`${a} / ${b} = ${a / b}`);
    return a / b;
  }
  diminuir(a: number, b: number) {
    this.historico.push(`${a} - ${b} = ${a - b}`);
    return a - b;
  }

  visualizarHistorico(): void {
    console.log(this.historico);
  }
}

export default Calculadora;
